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
import DHome from "../Pages/DHome";
import DashLayout from "../Layout/DashLayout";
import Profile from "../Pages/Profile";

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
        path: "/issueDetails/:id",
        loader: ({ params }) =>
          fetch(`https://green-spot-api-server.vercel.app/issues/${params.id}`),
        element: <IssueDetails></IssueDetails>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashLayout></DashLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DHome,
      },
      {
        path: "myIssues",
        element: <MyIssues></MyIssues>,
      },
      {
        path: "addIssues",
        element: <AddIssues></AddIssues>,
      },
      {
        path: "myContribution",
        element: <MyContribution></MyContribution>,
      },
      {
        path: "profile/:email",
        element: <Profile></Profile>,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

export default router;
