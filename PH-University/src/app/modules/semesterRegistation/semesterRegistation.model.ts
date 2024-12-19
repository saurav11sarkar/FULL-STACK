import mongoose, { model, Schema } from 'mongoose';
import { TSemesterRegistration } from './semesterRegistation.interface';
import { SemesterRegistaratiStatus } from './semesterRegistion.constan';

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
    },
    status: {
      type: String,
      enum: SemesterRegistaratiStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      default: 3,
      required: true,
    },
    maxCredit: {
      type: Number,
      default: 15,
      required: true,
    },
  },
  { timestamps: true },
);

export const SemesterRegistation = model<TSemesterRegistration>(
  'SemesterRegistation',
  semesterRegistrationSchema,
);
