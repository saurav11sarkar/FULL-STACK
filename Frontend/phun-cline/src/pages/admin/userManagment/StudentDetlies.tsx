import { useParams } from "react-router-dom";

const StudentDetlies = () => {
    const {studentId} = useParams();
    
    return (
        <div>
            <h2>Student Detlies {studentId}</h2>
        </div>
    );
};

export default StudentDetlies;