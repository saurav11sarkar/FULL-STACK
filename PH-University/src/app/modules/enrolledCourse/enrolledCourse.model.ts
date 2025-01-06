import { model, Schema } from 'mongoose';
import { TCourseMarks, TEnrolledCourse } from './enrolledCourse.interface';
import { Grade } from './enrolledCourse.constan';

const courseMarksSchema = new Schema<TCourseMarks>({
  classTest: {
    type: Number,
    default: 0,
  },
  midTerm: {
    type: Number,
    default: 0,
  },
  classTest2: {
    type: Number,
    default: 0,
  },
  finalTerm: {
    type: Number,
    default: 0,
  },
},{_id: false});

const enrolledCourseSchema = new Schema<TEnrolledCourse>({
  semesterRegistration: {
    type: Schema.Types.ObjectId,
    ref: 'SemesterRegistration',
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
  },
  academicDepertment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepertment',
  },
  offeredCourse: {
    type: Schema.Types.ObjectId,
    ref: 'OfferedCourse',
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  isEnrolled: {
    type: Boolean,
    default: false,
  },
  courseMarks: {
    type: courseMarksSchema,
  },
  grade: {
    type: String,
    enum: Grade,
    default: 'N/A',
  },
  gradePoint: {
    type: Number,
    min:0,
    max:4,
    default: 0,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
},{timestamps: true});

const EnrolledCourse = model<TEnrolledCourse>('EnrolledCourse', enrolledCourseSchema);
export default EnrolledCourse;
