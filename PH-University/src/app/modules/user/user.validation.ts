import { z } from 'zod';

const userSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, 'Password can not be more then 20 characters')
    .optional()
});

export const userValidation = {
  userSchema,
};
