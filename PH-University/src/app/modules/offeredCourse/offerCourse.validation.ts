import { z } from 'zod';
import { Days } from './offerCourse.constan';

const createOfferedCoursevalidationSchema = z.object({
  body: z
    .object({
      semesterRegistration: z.string(),
      // academicSemester: z.string(),
      academicFaculty: z.string(),
      academicDepartment: z.string(),
      course: z.string(),
      faculty: z.string(),
      maxCapacity: z.number(),
      section: z.number(),
      days: z.array(z.enum([...Days] as [string, ...string[]])),
      startTime: z.string().refine(
        (time) => {
          const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        { message: 'Start time is not valid' },
      ),
      endTime: z.string().refine(
        (time) => {
          const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        { message: 'End time is not valid' },
      ),
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}:00`);
        const end = new Date(`1970-01-01T${body.endTime}:00`);
        return start.getTime() < end.getTime();
      },
      { message: 'End time should be greater than start time' },
    ),
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
