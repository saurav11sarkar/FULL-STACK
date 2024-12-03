import { z } from 'zod';

// Zod schemas for subdocuments
const guardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

const localGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
});

const userNameSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
});

// Main Zod schema for student
const createStudentSchema = z.object({
  body: z.object({
    password: z.string().min(1, 'Password is required'),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email('Invalid email format'),
      contactNumber: z.string().min(1, 'Contact number is required'),
      emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
      presentAddress: z.string().min(1, 'Present address is required'),
      permamentAddress: z.string().min(1, 'Permanent address is required'),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema.optional(),
      admissionSemester: z.string(),
      academicDeperment:z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

// update
const UpdateguardianSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
});

const UpdatelocalGuardianSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
});

const UpdateuserNameSchema = z.object({
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

// Main Zod schema for student
const UpdateStudentSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z
      .object({
        name: UpdateuserNameSchema.optional(),
        gender: z.enum(['male', 'female', 'other']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string().email('Invalid email format').optional(),
        contactNumber: z.string().optional(),
        emergencyContactNo: z.string().optional(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
        presentAddress: z.string().optional(),
        permamentAddress: z.string().optional(),
        guardian: UpdateguardianSchema.optional(),
        localGuardian: UpdatelocalGuardianSchema.optional(),
        admissionSemester: z.string().optional(),
        academicDeperment: z.string().optional(),
        profileImg: z.string().optional(),
      })
      .optional(),
  }),
});

// Export validation schema
export const validateStudent = {
  createStudentSchema,
  UpdateStudentSchema
};
