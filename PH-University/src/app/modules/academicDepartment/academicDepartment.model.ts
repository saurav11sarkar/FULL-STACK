import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/appError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: { type: Schema.ObjectId, ref: 'AcademicFaculty' },
  },
  { timestamps: true },
);

// academicDepartmentSchema.pre('save', async function (next) {
//   const isExist = await AcademicDepartment.findOne({ name: this.name });
//   if (isExist) {
//     throw new Error('This deperement is already exist!');
//   }
//   next();
// });


academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isExist = await AcademicDepartment.findById(query);
  if (!isExist){
    throw new AppError(404,'This ID does not exist!');
  } 
  next();
});

const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);

export default AcademicDepartment;
