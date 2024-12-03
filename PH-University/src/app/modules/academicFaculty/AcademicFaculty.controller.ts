import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './AcademicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  );
  res.status(201).json({
    success: true,
    message: 'Academic Faculty create Successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyfromDB();
  res.status(200).json({
    success: true,
    message: 'All Academic Faculty',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.facultyId;
  const result =
    await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyId);
  res.status(200).json({
    success: true,
    message: 'This is Academic Faculty',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.facultyId;
  const result = await AcademicFacultyService.updateAcademicFacultyFromDB(
    facultyId,
    req.body,
  );
  res.status(201).json({
    success: true,
    message: 'Academic Faculty update Successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
