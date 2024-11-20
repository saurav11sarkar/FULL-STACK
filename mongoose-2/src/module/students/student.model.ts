import mongoose, { Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

// Import interfaces
import {
  StudentMethods,
  TGuardian,
  TLocalGuardian,
  TStudents,
  TUserName,
} from "./student.interface";

// Define Guardian sub-schema
const guardianSchema = new mongoose.Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

// Define UserName sub-schema
const userNameSchema = new mongoose.Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: [10, "First name cannot exceed 10 characters"],
    trim: true,
    validate: {
      validator: function (value: string) {
        const formattedName =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return formattedName === value;
      },
      message: "{VALUE} is not in capitalized format",
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not a valid name",
    },
  },
});

// Define LocalGuardian sub-schema
const localGuardianSchema = new mongoose.Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

// Define Students schema
const studentSchema = new mongoose.Schema<TStudents, StudentMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: [30, "Maxmun 30 word"],
    minlength: [3, "Miniman 3 word"],
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not a valid email",
    },
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permamentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},{toJSON:{virtuals:true}});

// virtual
studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// pre save middleware: will work on create() save()
studentSchema.pre("save", async function (next) {
  // hashing password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.BCRTPT_SALT_ROUNT)
  );
  next();
});

// post save middleware
studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Query middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// Creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  return await this.findOne({ id });
};

// Model creation
const StudentData = mongoose.model<TStudents, StudentMethods>(
  "StudentData",
  studentSchema
);

export default StudentData;
