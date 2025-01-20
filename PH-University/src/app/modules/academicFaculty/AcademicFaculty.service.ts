import QueryBuilder from '../../builder/QueryBuilder';
import { AcademicFacultySearchableFields } from './AcademicFaculty.constant';
import { TAcademicfaculty } from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicfaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyfromDB = async (query: Record<string, unknown>) => {
  const academicFacultyQuery = new QueryBuilder(AcademicFaculty.find(), query)
    .search(AcademicFacultySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
    const result = await academicFacultyQuery.modelQuery;
    const meta = await academicFacultyQuery.countTotal();
  return {result, meta};
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyFromDB = async (
  id: string,
  payload: TAcademicfaculty,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyfromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyFromDB,
};
