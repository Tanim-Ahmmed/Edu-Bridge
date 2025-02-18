import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo/eb.webp";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/sessions">Sessions</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed text-green-500 top-0 left-0 right-0  bg-base-200   z-50 shadow-lg">
    <div className="navbar max-w-7xl mx-auto  ">
      <div className="navbar-start ">
      <div className="dropdown">
       
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {
                    links
                }
              </ul>
              </div>
        <Link to="/" className="btn btn-ghost hidden sm:flex text-xl font-bold">
          <img src={logo} alt="" className="w-10 rounded" />
          EduBridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                links
              }
            </ul>
          </div>
      <div className="navbar-end gap-4">

        <div>
          {user && user?.email ? (
            <div>
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
          ) : (
            ""
          )}
        </div>

        <div>
          {user && user?.email ? (
            <div className="space-x-2">
              <Link
                to="/dashboard"
                className="py-2 px-4 link-hover bg-green-200 rounded-3xl  font-bold hover:border-2"
              >
               Dashboard
              </Link>

              <Link
                to="/"
                onClick={logOut}
                className="py-2 px-4 link-hover bg-green-200 rounded-3xl text-red-500 font-bold hover:border-2"
              >
                LogOut
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="py-2 px-4 link-hover bg-green-200 text-green-600 font-bold hover:border-2 rounded-3xl"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 link-hover bg-green-200 text-green-600 font-bold hover:border-2 rounded-3xl"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
