import promos from '../../data/promos.json' with { type: 'json' };
import students from '../../data/students.json' with { type: 'json' };

const studentController = {
    listStudents(req, res) {

// on doit afficher tous les étudiants d'une promo précise 
// on doit récupérer l'id d'un promo, et une promo si elle existe 
        const { id: promoId } = req.params;
        const found = promos.find(promo => promo.id === promoId ); // pour trouver l'id d'une promo
// on doit récupérer les étudiants d'une promo si elle en en contient
        let filteredStudents = [];
        if(found) {
            filteredStudents = students.filter((student) => student.promo === promoId);
        }


        res.render('students', { promo: found, students: filteredStudents } );
    },

    async listStudentsExampleCallBack(req, res) {

        const { id } = req.params;

        try {

            const queryPromo = {
            text: 'SELECT * FROM promo WHERE id = $1',
            values: [id],
            };

            const resultPromo = await client.query(queryPromo)

        if (resultPromo.rows.length) {

            const queryStudent = {
                text: ' SELECT * FROM student WHERE promo_id = $1',
                values: [id],
            };
            const studentResult = await client.query(queryStudent);

            return res.render('students', { promo: resultPromo.rows[0], students: studentResult.rows});
            };

            next();
    // si y'a une erreur dans le 'try' alors on déclenche le middleware de gestion
    // d'erreur et on recupère l'erreur
        } catch (error) {

            next(error); 
        }
        }

}



export { studentController };