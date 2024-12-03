import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './AcademicFaculty.validation';
import { AcademicFacultyController } from './AcademicFaculty.controller';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.academicFacultySchema),
  AcademicFacultyController.createAcademicFaculty,
);

router.get(
  '/create-academic-faculty',
  AcademicFacultyController.getAllAcademicFaculty,
);

router.get(
  '/create-academic-faculty/:facultyId',
  AcademicFacultyController.getSingleAcademicFaculty,
);

router.patch(
  '/create-academic-faculty/:facultyId',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultySchema),
  AcademicFacultyController.updateAcademicFaculty,
);

export const academicFacultyRouter = router;
