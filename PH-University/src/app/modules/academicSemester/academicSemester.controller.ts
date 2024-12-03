import catchAsync from '../../utils/catchAsync';
import { AcademicService } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicService.createAcademicSemesterIntoDb(req.body);
  res.status(201).json({
    success: true,
    message: 'Academic Semester create successfully',
    data: result,
  });
});

const allAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicService.allAcademicSemesters();
  res.status(200).json({
    success: true,
    message: 'All academic semester',
    data: result,
  });
});

const singleAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicService.singleAcademicSemester(id);
  res.status(200).json({
    success: true,
    message: 'This academic semester',
    date: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicService.updateAcademicSemester(id,req.body);
  res.status(201).json({
    success: true,
    message: 'Update academic semester successfully',
    date: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  allAcademicSemesters,
  singleAcademicSemester,
  updateAcademicSemester,
};
