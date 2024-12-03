import { z } from 'zod';

const academicDepartmentSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Deperment Name must be string',
      required_error: 'Name must be requried',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Academic faculty must be requried',
    }),
  }),
});

const updateacademicDepartmentSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Deperment Name must be string',
      required_error: 'Name must be requried',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Academic faculty must be requried',
    }).optional(),
  }),
});

export const academicDepartmentValidetion = {
    academicDepartmentSchema,
    updateacademicDepartmentSchema
}
