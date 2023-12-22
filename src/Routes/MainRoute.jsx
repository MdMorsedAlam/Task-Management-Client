import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import PrivateRoute from "./PrivateRoute";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"addtask",
        element:<AddTask/>
      },
      
    ]
  }
]);
const MainRoute = ({ children }) => {
  return <RouterProvider router={myRouter}>{children}</RouterProvider>;
};
MainRoute.propTypes = {
  children: PropTypes.node,
};
export default MainRoute;
