import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import AllIssues from "../Pages/AllIssues";
import AddIssues from "../Pages/AddIssues";
import MyIssues from "../Pages/MyIssues";
import MyContribution from "../Pages/MyContribution";
import IssueDetails from "../Pages/IssueDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "/allIssues",
        element: <AllIssues></AllIssues>,
      },
      {
        path: "/addIssues",
        element: (
          <PrivateRoute>
            <AddIssues></AddIssues>
          </PrivateRoute>
        ),
      },
      {
        path: "/issueDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/issues/${params.id}`),
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myIssues",
        element: (
          <PrivateRoute>
            <MyIssues></MyIssues>
          </PrivateRoute>
        ),
      },
      {
        path: "/myContribution",
        element: (
          <PrivateRoute>
            <MyContribution></MyContribution>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
