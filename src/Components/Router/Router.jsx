import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
