import mongoose from "mongoose";
import { Students } from "./student.interface";

const studentSchema = new mongoose.Schema<Students>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  contactNo: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
  },
});

const StudentData = mongoose.model("StudentData", studentSchema);

export default StudentData;
