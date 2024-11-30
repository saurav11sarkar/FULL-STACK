import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/:studentId', StudentController.getSingleStudent);
router.delete('/:studentId', StudentController.deleteStudent);
router.get('/', StudentController.getAllStudents);

export const studentRouter = router;
