import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/appError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistation.interface';
import { SemesterRegistation } from './semesterRegistation.model';
import { RegistationStatus } from './semesterRegistion.constan';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  const isThereUpcommingorOnGoingSemester = await SemesterRegistation.findOne({
    $or: [
      { status: RegistationStatus.UPCOMING },
      { status: RegistationStatus.ONGOING },
    ],
  });

  if (isThereUpcommingorOnGoingSemester) {
    throw new AppError(
      400,
      `There is alraedy a ${isThereUpcommingorOnGoingSemester.status} register semester`,
    );
  }

  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);

  if (!isAcademicSemesterExists) {
    throw new AppError(400, 'This academic semester is not found');
  }

  const isSemesterRegistrationExists = await SemesterRegistation.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(404, 'This academic semester alrady registered');
  }

  const result = await SemesterRegistation.create(payload);
  return result;
};

const getAllSemesterRegistrationsDB = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistationQuery = new QueryBuilder(
    SemesterRegistation.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistationQuery.modelQuery;
  return result;
};

const getSingleSemesterRegistrationsDB = async (id: string) => {
  const result =
    await SemesterRegistation.findById(id).populate('academicSemester');
  return result;
};

const updatedSemeterRegistionIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  const isSemesterRegistrationExists = await SemesterRegistation.findById(id);
  if (!isSemesterRegistrationExists) {
    throw new AppError(404, 'THIS SEMESTER IS NOT FOUND');
  }
  const currentSemesterStstus = isSemesterRegistrationExists?.status;
  const requestStatus = payload?.status;
  if (currentSemesterStstus === 'ENDED') {
    throw new AppError(404, `This Semester is alrady ${currentSemesterStstus}`);
  }

  if (
    currentSemesterStstus === RegistationStatus.UPCOMING &&
    requestStatus === RegistationStatus.ENDED
  ) {
    throw new AppError(
      404,
      `You can not directly change status from ${currentSemesterStstus} to ${requestStatus}`,
    );
  }

  if (
    currentSemesterStstus === RegistationStatus.ONGOING &&
    requestStatus === RegistationStatus.UPCOMING
  ) {
    throw new AppError(
      404,
      `You can not directly change status from ${currentSemesterStstus} to ${requestStatus}`,
    );
  }

  const result = await SemesterRegistation.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const SemesterRegistationServices = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsDB,
  getSingleSemesterRegistrationsDB,
  updatedSemeterRegistionIntoDB,
};
