import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemeester.validation';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createacademicSemesterValidationSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

router.get(
  '/:id',
  AcademicSemesterController.singleAcademicSemester,
);

router.patch(
  '/:id',
  validateRequest(
    AcademicSemesterValidation.createacademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

router.get('/', auth('admin'), AcademicSemesterController.allAcademicSemesters);

export const academicSemesterRoute = router;
