import QueryBuilder from '../../builder/QueryBuilder';
import { TAcademicDepartment } from './academicDepartment.interface';
import AcademicDepartment from './academicDepartment.model';
import { AcademicDepartmentSearchableFields } from './academicDepartmet.constant';

const createAcademicDepermentsIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepermentsFromDB = async (
  query: Record<string, unknown>,
) => {
  const academicDepermentQuery = new QueryBuilder(
    AcademicDepartment.find().populate('academicFaculty'),
    query,
  )
    .search(AcademicDepartmentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
const result = await academicDepermentQuery.modelQuery;
const meta = await academicDepermentQuery.countTotal();
  return { result, meta };
};

const getSingleAcademicDepermentsFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

const updateAcademicDepermentsFromDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepermentsService = {
  createAcademicDepermentsIntoDB,
  getAllAcademicDepermentsFromDB,
  getSingleAcademicDepermentsFromDB,
  updateAcademicDepermentsFromDB,
};
