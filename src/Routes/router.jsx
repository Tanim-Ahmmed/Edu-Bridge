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
import AdminRoute from "./AdminRoute";
import TutorRoute from "./TutorRoute";
import BookedSessionDetails from "../Pages/dashboard/BookedSessionDetails";
import AboutPage from "../Pages/about/AboutPage";
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
          path:"/session-details/:id",
          element:<PrivateRoutes><SessionDetails></SessionDetails></PrivateRoutes>,
        },
        {
          path:"/about",
          element: <AboutPage></AboutPage>,
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
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      {
        path:'',
        element:<PrivateRoutes><DashHome></DashHome></PrivateRoutes>,
      },
      //student routes
      {
        path:"booked-session",
        element:<PrivateRoutes><BookedSession></BookedSession></PrivateRoutes>,
      },
      {
        path:"session-details/:id",
        element:<PrivateRoutes><BookedSessionDetails></BookedSessionDetails></PrivateRoutes>
      },
      {
        path:"create-note",
        element:<PrivateRoutes><CreateNote></CreateNote></PrivateRoutes>,
      },
      {
        path:"manage-notes",
        element:<PrivateRoutes><ManageNotes></ManageNotes></PrivateRoutes>,
      },
      {
        path:"all-study-materials",
        element:<PrivateRoutes><ViewAllMaterials></ViewAllMaterials></PrivateRoutes>,
      },
      
      //tutor routes

      {
        path:"create-session",
        element:<TutorRoute><CreateSession></CreateSession></TutorRoute>,
      },

      {
        path:"created-sessions",
        element:<TutorRoute><CreatedSessions></CreatedSessions></TutorRoute>,
      },
       
      {
        path:"upload-materials",
        element:<TutorRoute><UploadMaterials></UploadMaterials></TutorRoute>,
      },

      {
        path:"all-uploaded-materials",
        element:<TutorRoute><AllUploadedMaterials></AllUploadedMaterials></TutorRoute>,
      },



      //admin routes
      {
        path:"all-users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },

      {
        path:"all-sessions",
        element: <AdminRoute><AllSessions></AllSessions></AdminRoute> ,
      },

      {
        path:"all-materials",
        element: <AdminRoute><AllMaterials></AllMaterials></AdminRoute>,
      },

    ]
  },
]);
