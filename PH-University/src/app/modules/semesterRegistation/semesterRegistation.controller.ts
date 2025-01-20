import catchAsync from '../../utils/catchAsync';
import { SemesterRegistationServices } from './semesterRegistation.service';

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistationServices.createSemesterRegistrationIntoDB(
      req.body,
    );
  res.status(201).json({
    success: true,
    message: 'Semester registration is create successfully',
    date: result,
  });
});

const getAllSemesterRegistrations = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistationServices.getAllSemesterRegistrationsDB(req.query);

  res.status(200).json({
    success: true,
    message: 'Semester Regisration is retrieved successfully',
    mata: result.meta,
    data: result.result,
  });
});

const getSingleSemesterRegistrations = catchAsync(async(req,res)=>{
  const {id} = req.params;
  const result = await SemesterRegistationServices.getSingleSemesterRegistrationsDB(id);

  res.status(200).json({
    success: true,
    message: 'Semester Regisration is retrieved successfully',
    date: result,
  })

});

const updatedSemeterRegistion = catchAsync(async(req,res)=>{
  const {id} = req.params;
  const result = await SemesterRegistationServices.updatedSemeterRegistionIntoDB(id,req.body);
  res.status(200).json({
    success:true,
    message:"Semester Regisration is updated successfully",
    data:result
  })
})

export const SemesterRegistationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistrations,
  updatedSemeterRegistion
};
