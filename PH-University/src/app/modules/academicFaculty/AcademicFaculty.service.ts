import { TAcademicfaculty } from "./academicFaculty.interface";
import AcademicFaculty from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async(payload:TAcademicfaculty)=>{
  const result = await AcademicFaculty.create(payload);
  return result;  
}

const getAllAcademicFacultyfromDB = async () =>{
    const result = await AcademicFaculty.find();
    return result;
}

const getSingleAcademicFacultyFromDB = async (id:string) =>{
    const result = await AcademicFaculty.findById(id);
    return result;
}

const updateAcademicFacultyFromDB = async(id:string,payload:TAcademicfaculty) =>{
    const result = await AcademicFaculty.findByIdAndUpdate(id,payload,{new:true});
    return result;
}



export const AcademicFacultyService = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyfromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyFromDB,
}