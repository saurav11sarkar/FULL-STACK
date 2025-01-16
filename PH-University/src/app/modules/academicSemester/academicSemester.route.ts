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
  '/create-academic-semester/:id',
  AcademicSemesterController.singleAcademicSemester,
);

router.patch(
  '/create-academic-semester/:id',
  validateRequest(
    AcademicSemesterValidation.createacademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateAcademicSemester,
);

router.get(
  '/create-academic-semester',auth('admin'),
  AcademicSemesterController.allAcademicSemesters,
);

export const academicSemesterRoute = router;
