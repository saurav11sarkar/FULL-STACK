import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

router.post('/', StudentController.createStudent);
router.post('/', StudentController.getStudentAll);

export const StudentRouts = router;
