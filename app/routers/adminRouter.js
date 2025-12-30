import { Router } from 'express';
import { adminController } from '../controllers/adminController.js';

const adminRouter = Router();

adminRouter.get('/admin/addStudent', adminController.getAddStudentForm);
adminRouter.get('admin/Student', adminController.postAddStudentForm);

export { adminRouter }