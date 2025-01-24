import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-64 min-h-screen bg-green-200 ">
                 <ul className="menu p-4 space-y-4">
                 <li> <NavLink to="/dashboard/booked-session"> View Booked Session</NavLink> </li>
                 <li> <NavLink to="/dashboard/create-note"> Create Note</NavLink> </li>
                 <li> <NavLink to="/dashboard/manage-notes"> Manage Personal Notes</NavLink> </li>
                 <li> <NavLink to="/dashboard/all-study-materials"> View All Study Materials</NavLink> </li>
                 </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;