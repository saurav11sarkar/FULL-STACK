import App from "@/App";
import TaskPage from "@/pages/TaskPage";
// import Tasks from "@/pages/tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <TaskPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default routes;
