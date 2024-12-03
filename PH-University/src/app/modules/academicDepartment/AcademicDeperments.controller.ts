import catchAsync from '../../utils/catchAsync';
import { AcademicDepermentsService } from './AcademicDepartment.service';

const createAcademicDeperments = catchAsync(async (req, res) => {
  const result = await AcademicDepermentsService.createAcademicDepermentsIntoDB(
    req.body,
  );
  res.status(201).json({
    success: true,
    message: 'Academic Deperments create successfully',
    data: result,
  });
});

const getAllAcademicDeperments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepermentsService.getAllAcademicDepermentsFromDB();
  res.status(200).json({
    success: true,
    message: 'All Academic Deperments is hare',
    data: result,
  });
});

const getSingleAcademicDeperments = catchAsync(async (req, res) => {
  const depermentId = req.params.depermentId;
  const result =
    await AcademicDepermentsService.getSingleAcademicDepermentsFromDB(depermentId);
  res.status(200).json({
    success: true,
    message: 'This Academic Deperments hare',
    data: result,
  });
});

const updateAcademicDeperments = catchAsync(async (req, res) => {
  const depermentId = req.params.depermentId;
  const result = await AcademicDepermentsService.updateAcademicDepermentsFromDB(
    depermentId,
    req.body,
  );
  res.status(201).json({
    success: true,
    message: 'Academic Deperments Update successfully',
    data: result,
  });
});

export const AcademicDepermentsController = {
  createAcademicDeperments,
  getAllAcademicDeperments,
  getSingleAcademicDeperments,
  updateAcademicDeperments,
};
