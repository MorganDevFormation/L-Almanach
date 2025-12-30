import { dataMapper } from '../dataMapper/dataMapper.js';

const promoController = {

    async list(req,res) {

        const promos = await dataMapper.getPromos();

        res.render('promos', { promos }); // on affiche la liste de toutes les promos
    },

    async show(req, res, next) {

        const id = Number(req.params.id);// conversion faite dans isPositiveInt.js

        try {
            const promo = await dataMapper.getOnePromo(id);

        // envoi un 404 si pas de promo
        if (promo) {
            return res.render('promo', { promo });
        }

        return next();

        } catch (error) {
            // console.error(error) pour vérifier 
            next(error);
        }
    }
}

export { promoController }