import { z } from 'zod';

const PreRequisteCoursesSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});
const UpdatePreRequisteCoursesSchema = z.object({
  course: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidation = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisteCourses: z.array(PreRequisteCoursesSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const updateCourseValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisteCourses: z.array(UpdatePreRequisteCoursesSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const CourseValidation = {
  createCourseValidation,
  updateCourseValidation,
};
