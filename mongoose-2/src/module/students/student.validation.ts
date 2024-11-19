import Joi from "joi";
// Joi schema for UserName
const userNameSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .max(10)
      .pattern(/^[A-Z][a-z]*$/, "capitalized format")
      .messages({
        "string.pattern.base": "{#label} must be capitalized",
        "string.max": "{#label} must not exceed 10 characters",
      }),
    middleName: Joi.string().optional().allow(null, ""),
    lastName: Joi.string()
      .trim()
      .required()
      .pattern(/^[a-zA-Z]+$/, "alphabetic")
      .messages({
        "string.pattern.base":
          "{#label} must contain only alphabetic characters",
      }),
  });

  // Joi schema for Guardian
  const guardianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });

  // Joi schema for LocalGuardian
  const localGuardianSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
  });

  // Joi schema for Students
  const studentSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameSchema.required(),
    gender: Joi.string()
      .valid("male", "female", "other")
      .required()
      .messages({ "any.only": "{#label} must be male, female, or other" }),
    dateOfBirth: Joi.string().isoDate().required(),
    email: Joi.string()
      .email()
      .trim()
      .required()
      .messages({ "string.email": "{#label} must be a valid email address" }),
    contactNumber: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string()
      .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
      .optional()
      .messages({ "any.only": "{#label} must be a valid blood group" }),
    presentAddress: Joi.string().required(),
    permamentAddress: Joi.string().required(),
    guardian: guardianSchema.required(),
    localGuardian: localGuardianSchema.required(),
    profileImg: Joi.string().optional(),
    isActive: Joi.string()
      .valid("active", "blocked")
      .default("active")
      .messages({ "any.only": "{#label} must be active or blocked" }),
  });

  export default studentSchema;