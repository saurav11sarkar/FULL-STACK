import { z } from 'zod';
import {
  AcademicSemestername,
  Months,
  TcademicSemestercode,
} from './academicSemester.constants';
const createacademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemestername] as [string, ...string[]]),
    code: z.enum([...TcademicSemestercode] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidation = {
  createacademicSemesterValidationSchema,
};
