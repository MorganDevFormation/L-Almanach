import { Router } from 'express';
import { studentController } from '../controllers/studentController.js';
import { isPositiveInteger, } from '../middlewares/isPositiveInt.js';

const studentRouter = Router();

    studentRouter.get('/promos/:id/students', isPositiveInteger, studentController.listStudents);


export { studentRouter };