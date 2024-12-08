import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./admin.service";

const getSingleAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminServices.getSingleAdminFromDB(id);
  
    res.status(200).json({
      success: true,
      message: 'Admin is retrieved succesfully',
      data: result,
    });
  });
  
  const getAllAdmins = catchAsync(async (req, res) => {
    const result = await AdminServices.getAllAdminsFromDB(req.query);
  
    res.status(200).json({
      success: true,
      message: 'Admins are retrieved succesfully',
      data: result,
    });
  });
  
  const updateAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { admin } = req.body;
    const result = await AdminServices.updateAdminIntoDB(id, admin);
  
    res.status(200).json({
      success: true,
      message: 'Admin is updated succesfully',
      data: result,
    });
  });
  
  const deleteAdmin = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await AdminServices.deleteAdminFromDB(id);
  
    res.status(200).json({
      success: true,
      message: 'Admin is deleted succesfully',
      data: result,
    });
  });
  
  export const AdminControllers = {
    getAllAdmins,
    getSingleAdmin,
    deleteAdmin,
    updateAdmin,
  };