import { client } from '../database/client.js';

const dataMapper = {

    async getPromos() {
        const result = await client.query('SELECT * FROM promo;')

        return result.rows;
    },

    async getOnePromo(id) {
        const query = {
            text: 'SELECT * FROM promo WHERE id = $1',
            values: [id],
        };
        const result = await client.query(query);

        return result.rows[0];
    },
    async getStudentsPromo(promoId) {

        const query = {
                text: ' SELECT * FROM student WHERE promo_id = $1',
                values: [promoId],
            };
            const results = await client.query(query);

            return results.rows;
    },
    async insertStudent(student) {

        const { promo, first_name, last_name, github_username } = student;
    // version destructuring de :
    // const promo = student.promo;
    // const first_name = student.first_name
    // const last_name = student.last_name
    // const github_username = student.github_username

    const query = {
        text: `INSERT INTO "student" ("promo.id", "first_name", "last_name", "github_username" )
                VALUES ($1,$2,$3,$4)`,
        values: [promo, first_name, last_name, github_username],
    };

    const result = await client.query(query);

    return !!result.rowCount;
    },
};

export { dataMapper }