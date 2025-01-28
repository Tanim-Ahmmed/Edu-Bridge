import useSession from "../../../../hooks/useSession";
import SessionsCard from "./SessionsCard";

const AllSessions = () => {
  const [sessions, refetch] = useSession();
  const approvedSessions = sessions.filter(
    (session) => session.status === "approved"
  );
  const pendingSessions = sessions.filter(
    (session) => session.status === "pending"
  );
  const rejectedSessions = sessions.filter(
    (session) => session.status === "rejected"
  );
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">
        All Study Sessions
      </h1>
      <p className="text-center px-6 pb-8">Explore all available study sessions. Join group or individual lessons tailored to your learning needs and goals</p>
      <div>
        <h2 className="sm:w-11/12 sm:pl-16 pt-6 text-lg font-semibold">Pending sessions: {pendingSessions.length}</h2>
        {pendingSessions.length > 0 ? (
          <SessionsCard sessions={pendingSessions} refetch={refetch}></SessionsCard>
        ) : (
            <p className="text-red-500 py-4 text-center text-lg">No Study session Pending</p>
        )}
      </div>

      <div>
      <h2 className="sm:w-11/12 sm:pl-16 pt-6 text-lg font-semibold">Approved sessions: {approvedSessions.length}</h2>
        {approvedSessions.length > 0 ? (
          <SessionsCard sessions={approvedSessions} refetch={refetch}></SessionsCard>
        ) : (
            <p className="text-red-500 py-4 text-center text-lg">No Study session Approved</p>
        )}
      </div>

      <div>
      <h2 className="sm:w-11/12 sm:pl-16 pt-6 text-lg font-semibold">Rejected sessions: {rejectedSessions.length}</h2>
        {rejectedSessions.length > 0 ? (
          <SessionsCard sessions={rejectedSessions} refetch={refetch}></SessionsCard>
        ) : (
          <p className="text-red-500 py-4 text-center text-lg">No Study session Rejected</p>
        )}
      </div>
    </div>
  );
};

export default AllSessions;
