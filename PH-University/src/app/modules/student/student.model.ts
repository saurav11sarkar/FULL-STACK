import { model, Schema } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudentModel,
  TStudents,
  TUserName,
} from './student.interface';


const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<TStudents, TStudentModel>(
  {
    id: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User Id Must be Requried'],
      unique: true,
      ref: 'User',
    },
    name: userNameSchema,
    gender: { type: String, enum: ['male', 'female', 'other'] },
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permamentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);



studentSchema.pre('find', function () {
  this.find({ isDeleted: { $ne: true } });
});
studentSchema.pre('findOne', function () {
  this.findOne({ isDeleted: { $ne: true } });
});

studentSchema.statics.isUserExits = async function (id: string) {
  const existingUser = await this.findOne({ id });
  return existingUser;
};

const StudentModel = model<TStudents, TStudentModel>('Student', studentSchema);
export default StudentModel;
