import mongoose from 'mongoose';
import { TOfferedCourse } from './offerCourse.interface';
import { Days } from './offerCourse.constan';

const offeredCourseSchema = new mongoose.Schema<TOfferedCourse>({
  semesterRegistration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SemesterRegistation',
    required: true,
  },
  academicSemester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicSemester',
    required: true,
  },
  academicFaculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
    required: true,
  },
  academicDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseFaculty',
    required: true,
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true,
  },
  maxCapacity: {
    type: Number,
    required: true,
  },
  section: {
    type: Number,
    required: true,
  },
  days: [{
    type: String,
    enum:Days
  }],
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
},{timestamps: true});


export const OfferedCourse = mongoose.model<TOfferedCourse>('OfferedCourse', offeredCourseSchema); 