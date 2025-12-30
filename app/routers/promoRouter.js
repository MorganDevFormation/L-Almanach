import { Router } from 'express';
import { promoController } from '../controllers/promoController.js';
import { isPositiveInteger } from '../middlewares/isPositiveInt.js';

const promoRouter = Router();

    promoRouter.get('/promos', promoController.list);
    promoRouter.get('/promos/:id', isPositiveInteger, promoController.show);

export { promoRouter };