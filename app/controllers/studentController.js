import { dataMapper } from '../dataMapper/dataMapper.js';

const studentController = {

    async listStudents(req, res, next) {

        const { id } = req.params;

        try {

            const promo = await dataMapper.getOnePromo(id);

        if (promo) {

            const students = await dataMapper.getStudentsPromo(id);

            return res.render('students', { promo: promo, students: students });
            };

            next();
    // si y'a une erreur dans le 'try' alors on déclenche le middleware de gestion
    // d'erreur et on recupère l'erreur
        } catch (error) {

            next(error); 
        }

        },
}

export { studentController };