import FacultyDashbord from "../pages/faculty/FacultyDashbord";
import OfferCourse from "../pages/faculty/OfferCourse";

export const FacultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashbord />,
  },
  {
    name: "Offer Course",
    path: "offer-course",
    element: <OfferCourse />,
  },
];
