import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTutor from "../hooks/useTutor";
import { FaStickyNote, FaUsers } from "react-icons/fa";
import { SiSessionize } from "react-icons/si";
import { GiExplosiveMaterials } from "react-icons/gi";
import { IoCreate } from "react-icons/io5";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { LuBookmarkCheck, LuBookOpenCheck } from "react-icons/lu";
import { IoIosCreate, IoIosHome } from "react-icons/io";
import logo from "../assets/logo/eb.webp";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isTutor] = useTutor();
  return (
    <div className="sm:flex max-w-7xl mx-auto ">
      <div className="sm:w-64 sm:min-h-screen bg-base-200 pt-6">
        <div className="flex justify-between items-center p-3">
          <Link to="/" className="btn btn-ghost text-xl font-bold ">
            <img src={logo} alt="" className="w-10 rounded" />
            EduBridge
          </Link>
          <div
            className="tooltip tooltip-bottom hover:cursor-pointer"
            data-tip={user?.displayName}
          >
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <ul className="menu p-4 space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers /> View All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-sessions">
                  <SiSessionize /> View All Study Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-materials">
                  <GiExplosiveMaterials /> View All Materials
                </NavLink>
              </li>
            </>
          ) : isTutor ? (
            <>
              <li>
                <NavLink to="/dashboard/create-session">
                  <IoCreate /> Create Study Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/created-sessions">
                  {" "}
                  <SiSessionize /> View All Study Sessions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/upload-materials">
                  <RiContactsBookUploadFill /> Upload Materials
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-uploaded-materials">
                  <GiExplosiveMaterials /> View All Materials
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/booked-session">
                  <LuBookmarkCheck /> View Booked Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/create-note">
                  <IoIosCreate /> Create Note
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-notes">
                  <FaStickyNote /> Manage Personal Notes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-study-materials">
                  <LuBookOpenCheck /> View All Study Materials
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
            
              <IoIosHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
