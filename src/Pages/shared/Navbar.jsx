import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo/eb.webp";
import { motion } from 'framer-motion';
import { AiOutlineLogout } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/sessions">Sessions</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed  text-green-500 top-0 left-0 right-0  bg-base-100 z-50 py-2 backdrop-blur-xl h-20 opacity-90">
    <div className="navbar max-w-7xl mx-auto ">
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
            <ul className="menu menu-horizontal text-base font-semibold px-1">
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
           <div className="space-x-2 flex items-center">
           {/* Dashboard Button */}
           <motion.button
             onClick={() => navigate('/dashboard')}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 
                        transition-colors duration-100"
           >
             Dashboard
           </motion.button>
         
           {/* LogOut Button */}
           <motion.button
             onClick={logOut}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="flex items-center gap-2 py-2 px-4 bg-green-200 rounded-3xl text-red-500 
                        font-bold hover:border-2 hover:border-green-400 transition-all duration-100"
           >
             LogOut <AiOutlineLogout size={20} />
           </motion.button>
         </div>
         
          ) : (
            <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 py-2 px-4 bg-green-200 text-green-600 
                         font-bold hover:border-2 hover:border-green-400 rounded-3xl transition-all duration-100"
            >
              SignIn <MdVerifiedUser size={20} />
            </motion.button>
          </div>
          
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
