import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSemesterNameCodeMaper, TMonth } from "./academicSemester.interface";

export const Months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const AcademicSemestername: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const TcademicSemestercode: TAcademicSemesterCode[] = ['01', '02', '03'];
export const academicSemesterNameCodeMaper: TAcademicSemesterNameCodeMaper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
