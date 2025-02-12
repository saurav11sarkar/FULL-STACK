import AcademicDeperment from "../pages/admin/academicManesment/AcademicDeperment";
import AcademicFaculty from "../pages/admin/academicManesment/AcademicFaculty";
import AcamedicSemester from "../pages/admin/academicManesment/AcamedicSemester";
import CreateAcademicDeperment from "../pages/admin/academicManesment/CreateAcademicDeperment";
import CreateAcademicFaculty from "../pages/admin/academicManesment/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManesment/CreateAcademicSemester";
import AdminDashbord from "../pages/admin/AdminDashbord";
import Course from "../pages/admin/courseManesment/Course";
import CreateCourse from "../pages/admin/courseManesment/CreateCourse";
import OfferCourse from "../pages/admin/courseManesment/OfferCourse";
import RegisterSemester from "../pages/admin/courseManesment/RegisterSemester";
import SemesterRegation from "../pages/admin/courseManesment/SemesterRegation";
import CreateAdmin from "../pages/admin/userManagment/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagment/CreateFaculty";
import CreateStudent from "../pages/admin/userManagment/CreateStudent";
import StudentData from "../pages/admin/userManagment/StudentData";
import StudentDetlies from "../pages/admin/userManagment/StudentDetlies";

export const AdminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashbord />,
  },
  {
    name: "Academic Menasment",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcamedicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Deperment",
        path: "create-academic-depetment",
        element: <CreateAcademicDeperment />,
      },
      {
        name: "Academic Deperment",
        path: "academic-deperment",
        element: <AcademicDeperment />,
      },
    ],
  },
  {
    name: "Users Manesment",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetlies />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },

      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegation />,
      },
      {
        name: "Registration Semester",
        path: "registration-semester",
        element: <RegisterSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Course",
        path: "course",
        element: <Course />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
    ],
  },
];
