import { z } from 'zod';
import { UserStatus } from './user.constan';

const userSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, 'Password can not be more then 20 characters')
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

export const userValidation = {
  userSchema,
  changeStatusValidationSchema
};
