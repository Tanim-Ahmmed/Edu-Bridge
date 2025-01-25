import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  const isTutor = true;
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-64 min-h-screen bg-green-200 ">
        <ul className="menu p-4 space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/all-users">View All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-sessions">
                  View All Study Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-materials">
                  View All Materials
                </NavLink>
              </li>
            </>
          ) : isTutor ? (
            <>
              <li>
                <NavLink to="/dashboard/create-session">
                Create Study Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/created-sessions">All Created Study Sessions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/upload-materials">
                Upload Materials 
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-uploaded-materials">
                View All Materials
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/booked-session">
                  View Booked Session
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/create-note"> Create Note</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-notes">
                  Manage Personal Notes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-study-materials">
                  View All Study Materials
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/"> Home</NavLink>
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
