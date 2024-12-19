import { z } from 'zod';
import { SemesterRegistaratiStatus } from './semesterRegistion.constan';

const createSemeterRegistionValidationSchema = z.object({
  body: z.object({
    academicSemester: z.string(),
    status: z.enum([...(SemesterRegistaratiStatus as [string, ...string[]])]),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    minCredit: z.number(),
    maxCredit: z.number(),
  }),
});
const updatedSemeterRegistionValidationSchema = z.object({
  body: z.object({
    academicSemester: z.string().optional(),
    status: z.enum([...(SemesterRegistaratiStatus as [string, ...string[]])]).optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    minCredit: z.number().optional(),
    maxCredit: z.number().optional(),
  }),
});

export const SemesterRegistaratiValidation = {
  createSemeterRegistionValidationSchema,
  updatedSemeterRegistionValidationSchema
};
