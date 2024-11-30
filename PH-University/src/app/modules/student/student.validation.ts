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
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

// Main Zod schema for student
const studentSchema = z.object({
  id: z.string().optional(),
  password: z.string().min(1, "Password is required"),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']).optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email("Invalid email format"),
  contactNumber: z.string().min(1, "Contact number is required"),
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  presentAddress: z.string().min(1, "Present address is required"),
  permamentAddress: z.string().min(1, "Permanent address is required"),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema.optional(),
  profileImg: z.string().optional(),
  isDeleted: z.boolean().optional().default(false),
});

// Export validation schema
export const validateStudent = studentSchema;
