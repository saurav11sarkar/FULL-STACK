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

router.get('/', AcademicFacultyController.getAllAcademicFaculty);

router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultySchema),
  AcademicFacultyController.updateAcademicFaculty,
);

export const academicFacultyRouter = router;
