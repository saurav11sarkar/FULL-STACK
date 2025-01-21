import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course.constan';
import { TCourse, TCourseFaculty } from './course.interface';
// import Course from './course.model';
import AppError from '../../errors/appError';
import { Course, CourseFaculty } from './course.model';

const createCourse = async (playload: TCourse) => {
  const result = await Course.create(playload);
  return result;
};

const getAllCourse = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find({ isDeleted: false }).populate('preRequisteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await courseQuery.modelQuery;
  const meta = await courseQuery.countTotal();

  return { result, meta };
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id, { isDeleted: false }).populate(
    'preRequisteCourses.course',
  );
  return result;
};

const updateCourseIntoDB = async (id: string, playload: Partial<TCourse>) => {
  const { preRequisteCourses, ...courseRemaningData } = playload;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
      id,
      courseRemaningData,
      { new: true, runValidators: true, session },
    );

    if (!updatedBasicCourseInfo) {
      throw new AppError(400, 'Faild to update course');
    }

    if (preRequisteCourses && preRequisteCourses.length > 0) {
      const deletedPreRequisites = preRequisteCourses
        .filter((el) => el.course && el.isDeleted)
        .map((el) => el.course);
      const deletedPreRequisteCourses = await Course.findByIdAndUpdate(
        id,
        {
          $pull: {
            preRequisteCourses: { course: { $in: deletedPreRequisites } },
          },
        },
        { new: true, runValidators: true, session },
      );

      if (!deletedPreRequisteCourses) {
        throw new AppError(400, 'Faild to update course');
      }

      // filter out new course fields
      const newPreRequis = preRequisteCourses?.filter(
        (el) => el.course && !el.isDeleted,
      );
      const newPreRequisCourses = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisteCourses: { $each: newPreRequis } },
        },
        { new: true, runValidators: true, session },
      );

      if (!newPreRequisCourses) {
        throw new AppError(400, 'Faild to update course');
      }
    }

    const result = await Course.findById(id).populate(
      'preRequisteCourses.course',
    );

    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(500, error);
  }
};

const deleteCourceFromBD = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const assignFacultisIntoBD = async (
  id: string,
  playload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: playload } },
    },
    { upsert: true, new: true },
  );
  return result;
};

const removeFacultiesIntoDB = async (
  id: string,
  playload: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: playload } },
    },
    { new: true },
  );
  return result;
};

const getFacultiesWithCourse = async (courseId: string) => {
  const result = await CourseFaculty.findOne({ course: courseId }).populate(
    'faculties',
  );
  return result;
};

export const CourseService = {
  createCourse,
  getAllCourse,
  getSingleCourseFromDB,
  deleteCourceFromBD,
  updateCourseIntoDB,
  assignFacultisIntoBD,
  removeFacultiesIntoDB,
  getFacultiesWithCourse
};
