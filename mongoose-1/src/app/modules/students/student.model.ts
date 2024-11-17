import mongoose from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new mongoose.Schema<Student>({
  id: {
    type: String,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: {
    enum: ['male', 'female'],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: String,
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permamentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    fatherName: String,
    fatherOccupation: String,
    fitherContactNo: String,
    motherName: String,
    motherOccupation: String,
    motherContactNo: String,
  },
  localGuardian: {
    name: String,
    occupation: String,
    contactNo: String,
  },
  prifuleImg: String,
  isActive: ['active', 'blocked'],
});

const Students = mongoose.model("Students", studentSchema);

export default Students;
