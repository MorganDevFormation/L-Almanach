import { dataMapper } from "../dataMapper/dataMapper.js";

const adminController = {

    async getAddStudentForm(req, res) {

        try {
            const promos = await dataMapper.getPromos(); // on recupère les promos

            res.render("add_student", { promos }); // on transmet le liste à ejs pour le rendu du FORM

        } catch (error) {
            console.error(error)
            res.status(500).send(error.message)
        }
    },

    async postAddStudentForm(req, res) {

        try {
            
            const result = await dataMapper.insertStudent(req.body);

            if (result) {
                res.redirect(`/promos/${req.body.promo}/students`);
            } else {
                res.status(500).send('Aucun étudiant ajouté');
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
}

export { adminController }