import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course.constan';
import { TCourse } from './course.interface';
import Course from './course.model';

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

  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id, { isDeleted: false }).populate(
    'preRequisteCourses.course',
  );
  return result;
};

const updateCourseIntoDB = async (id: string, playload: Partial<TCourse>) => {
  const { preRequisteCourses, ...courseRemaningData } = playload;

  const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemaningData,
    { new: true, runValidators: true },
  );

  if (preRequisteCourses && preRequisteCourses.length > 0) {
    const deletedPreRequisites = preRequisteCourses.filter(
      (el) => el.course && el.isDeleted,
    ).map(el => el.course);
    const deletedPreRequisteCourses = await Course.findByIdAndUpdate(id,{
    $pull:{preRequisteCourses:{course:{$in:deletedPreRequisites}}}
    });
  }


  return updatedBasicCourseInfo;
};

const deleteCourceFromBD = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CourseService = {
  createCourse,
  getAllCourse,
  getSingleCourseFromDB,
  deleteCourceFromBD,
  updateCourseIntoDB,
};
