import { z } from 'zod';

const academicFacultySchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic faculty must be a string' }),
  }),
});
const updateAcademicFacultySchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic faculty must be a string' }),
  }),
});

export const AcademicFacultyValidation = {
  academicFacultySchema,
  updateAcademicFacultySchema,
};
