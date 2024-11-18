import mongoose from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Students,
  UserName,
} from "./student.interface";

// Define Guardian sub-schema
const guardianSchema = new mongoose.Schema<Guardian>({
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
const userNameSchema = new mongoose.Schema<UserName>({
  firstName: {
    type: String,
    required: [true,"First Name Is Required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true,"Lest Name Is Required"],
  },
});

// Define LocalGuardian sub-schema
const localGuardianSchema = new mongoose.Schema<LocalGuardian>({
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
const studentSchema = new mongoose.Schema<Students>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values:["male", "female", "other"],
      message:"{VALUE} is not valid"
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
});


const StudentData = mongoose.model("StudentData", studentSchema);

export default StudentData;
