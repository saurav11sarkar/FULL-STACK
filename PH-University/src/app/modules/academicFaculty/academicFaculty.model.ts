import { model, Schema } from 'mongoose';
import { TAcademicfaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicfaculty>({
    name:{
        type:String,
        required:true,
        unique:true
    }
}, { timestamps: true });


const AcademicFaculty = model<TAcademicfaculty>("AcademicFaculty", academicFacultySchema);
export default AcademicFaculty;

