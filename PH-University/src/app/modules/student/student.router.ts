import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middleware/validateRequest';
import { validateStudent } from './student.validation';
import auth from '../../middleware/auth';
const router = express.Router();

router.get('/:studentId',auth('admin','faculty'), StudentController.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(validateStudent.UpdateStudentSchema),
  StudentController.updateStudent,
);

router.delete('/:studentId', StudentController.deleteStudent);

router.get('/', StudentController.getAllStudents);

export const studentRouter = router;
