import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/AcademicSemester";


const AcamedicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined);
    console.log(data);
    return (
        <div>
            <h2>Acamedic Semester</h2>
        </div>
    );
};

export default AcamedicSemester;