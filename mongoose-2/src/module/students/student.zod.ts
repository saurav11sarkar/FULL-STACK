import { z } from "zod";

// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().nonempty("Father Name is required"),
  fatherOccupation: z.string().nonempty("Father Occupation is required"),
  fatherContactNo: z.string().nonempty("Father Contact No is required"),
  motherName: z.string().nonempty("Mother Name is required"),
  motherOccupation: z.string().nonempty("Mother Occupation is required"),
  motherContactNo: z.string().nonempty("Mother Contact No is required"),
});

// UserName schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("First Name is required")
    .max(10, "First Name must not exceed 10 characters")
    .refine(
      (value) => {
        const capitalized = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return capitalized === value;
      },
      { message: "First Name must be in capitalized format" }
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty("Last Name is required")
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: "Last Name must contain only alphabets",
    }),
});

// LocalGuardian schema
const localGuardianSchema = z.object({
  name: z.string().nonempty("Local Guardian Name is required"),
  occupation: z.string().nonempty("Occupation is required"),
  contactNo: z.string().nonempty("Contact No is required"),
});

// Main Student schema
const studentSchema = z.object({
  id: z.string().nonempty("ID is required"),
  password: z.string().max(30).min(3),
  name: userNameSchema,
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender must be 'male', 'female', or 'other'" }),
  }),
  dateOfBirth: z.string().nonempty("Date of Birth is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  contactNumber: z.string().nonempty("Contact Number is required"),
  emergencyContactNo: z.string().nonempty("Emergency Contact No is required"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().nonempty("Present Address is required"),
  permamentAddress: z.string().nonempty("Permanent Address is required"),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
  isDeleted: z.boolean().default(false),
});

// Export the schema
export const StudentValidationSchema = studentSchema;
