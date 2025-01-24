import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import SessionDetails from "../Pages/sessionDetails/SessionDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/sessionDetails",
          element:<PrivateRoutes><SessionDetails></SessionDetails></PrivateRoutes>,
        },
        {
           path:"/login",
           element:<Login></Login>
        },
        {
           path:"/register",
           element:<Register></Register>
        },
    ]
  },
]);
