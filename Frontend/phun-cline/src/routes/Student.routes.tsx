import OfferCourse from "../pages/student/OfferCourse";
import StudentDashbord from "../pages/student/StudentDashbord";


export const StudentyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashbord />,
    },
    {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
    },
];