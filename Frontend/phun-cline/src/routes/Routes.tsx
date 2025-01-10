import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
// import Contact from "../pages/Contact";
import Login from "../pages/Login";
// import About from "../pages/About";
import { routesGenarat } from "../utils/routesGenarat";
import { AdminPaths } from "../routes/Admin.routes";
import { FacultyPaths } from "./Faculty.routes";
import { StudentyPaths } from "./Student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    //   {
    //     path: "contact",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenarat(AdminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenarat(FacultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenarat(StudentyPaths),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
