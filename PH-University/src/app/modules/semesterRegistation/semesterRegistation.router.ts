import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { SemesterRegistaratiValidation } from './semesterRegistation.validation';
import { SemesterRegistationController } from './semesterRegistation.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(
    SemesterRegistaratiValidation.createSemeterRegistionValidationSchema,
  ),
  SemesterRegistationController.createSemesterRegistration,
);

router.get('/', SemesterRegistationController.getAllSemesterRegistrations);
router.get(
  '/:id',
  SemesterRegistationController.getSingleSemesterRegistrations,
);
router.patch(
  '/:id',
  validateRequest(
    SemesterRegistaratiValidation.updatedSemeterRegistionValidationSchema,
  ),
  SemesterRegistationController.updatedSemeterRegistion,
);

export const SemesterRegistarRouter = router;
