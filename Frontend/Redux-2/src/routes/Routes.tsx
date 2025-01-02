import App from "@/App";
import Tasks from "@/pages/tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

export default routes;
