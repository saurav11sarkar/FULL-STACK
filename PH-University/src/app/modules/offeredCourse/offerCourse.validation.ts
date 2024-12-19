import { z } from 'zod';
import { Days } from './offerCourse.constan';

const createOfferedCoursevalidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string(),
    // academicSemester: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    maxCapacity: z.number(),
    section: z.number(),
    // days: z.array(z.enum([...Days] as [string, ...string[]])),
    startTime: z.string(),
    endTime: z.string(),
  }),
});

const updateOfferedCoursevalidationSchema = z.object({
  body: z.object({
    faculty: z.string().optional(),
    maxCapacity: z.number().optional(),
    section: z.number().optional(),
    days: z.array(z.enum([...Days] as [string, ...string[]]).optional()),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferedCourseValidation = {
  createOfferedCoursevalidationSchema,
  updateOfferedCoursevalidationSchema,
};
