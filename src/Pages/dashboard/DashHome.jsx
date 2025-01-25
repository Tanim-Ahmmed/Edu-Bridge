import { Link } from "react-router-dom";

const DashHome = () => {
  return (
    <div>
      <div className="text-center py-6 space-y-4  mx-4">
        <h1 className="text-gray-900 font-bold text-xl">Welcome to Your Dashboard</h1>
        <p>
          The <strong>Collaborative Study Platform</strong> is designed to
          enhance collaboration among students, tutors, and administrators.
          Streamline study session scheduling, share resources, and manage users
          effectively—all in one place. Whether you're here to join a session,
          share materials, or manage your educational activities, we aim to
          support your dynamic needs with a user-friendly experience.
        </p>
        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default DashHome;
