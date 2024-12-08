import mongoose, { model, Schema } from 'mongoose';
import { TCourse, TPreRequisiteCorses } from './course.interface';

const preRequisteCoursesSchema = new Schema<TPreRequisiteCorses>({
  course: {
    type: Schema.Types.ObjectId,
    ref:"Course"
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const courseSchema = new mongoose.Schema<TCourse>(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    prefix: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: Number,
      trim: true,
      required: true,
    },
    credits: {
      type: Number,
      trim: true,
      required: true,
    },
    preRequisteCourses: [preRequisteCoursesSchema],
    isDeleted:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true },
);

const Course = model<TCourse>('Course', courseSchema);
export default Course;