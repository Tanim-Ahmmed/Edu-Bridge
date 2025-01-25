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
import Dashboard from "../layout/Dashboard";
import DashHome from "../Pages/dashboard/DashHome";
import BookedSession from "../Pages/dashboard/student/bookedSession/BookedSession";
import CreateNote from "../Pages/dashboard/student/CreateNote/CreateNote";
import ManageNotes from "../Pages/dashboard/student/manageNotes/ManageNotes";
import ViewAllMaterials from "../Pages/dashboard/student/ViewAllMaterials/ViewAllMaterials";
import AllUsers from "../Pages/dashboard/Admin/AllUsers/AllUsers";
import AllMaterials from "../Pages/dashboard/Admin/AllMaterials/AllMaterials";
import AllSessions from "../Pages/dashboard/Admin/AllSessions/AllSessions";
import CreateSession from "../Pages/dashboard/tutor/CreateSession/CreateSession";
import CreatedSessions from "../Pages/dashboard/tutor/CreatedSessions/CreatedSessions";
import AllUploadedMaterials from "../Pages/dashboard/tutor/UploadedMaterials/AllUploadedMaterials";
import UploadMaterials from "../Pages/dashboard/tutor/uploadMaterials/UploadMaterials";
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
           element:<Login></Login>,
        },
        {
           path:"/register",
           element:<Register></Register>,
        },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'',
        element:<DashHome></DashHome>,
      },
      //student routes
      {
        path:"booked-session",
        element:<BookedSession></BookedSession>,
      },
      {
        path:"create-note",
        element:<CreateNote></CreateNote>,
      },
      {
        path:"manage-notes",
        element:<ManageNotes></ManageNotes>,
      },
      {
        path:"all-study-materials",
        element:<ViewAllMaterials></ViewAllMaterials>,
      },
      
      //tutor routes

      {
        path:"create-session",
        element:<CreateSession></CreateSession>,
      },

      {
        path:"created-sessions",
        element:<CreatedSessions></CreatedSessions>,
      },
       
      {
        path:"upload-materials",
        element:<UploadMaterials></UploadMaterials>,
      },

      {
        path:"all-uploaded-materials",
        element:<AllUploadedMaterials></AllUploadedMaterials>,
      },



      //admin routes
      {
        path:"all-users",
        element: <AllUsers></AllUsers>,
      },

      {
        path:"all-sessions",
        element:<AllSessions></AllSessions> ,
      },

      {
        path:"all-materials",
        element: <AllMaterials></AllMaterials>,
      },

    ]
  },
]);
