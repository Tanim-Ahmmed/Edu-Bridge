import useSession from "../hooks/useSession";
import { Link } from "react-router-dom";
const Sessions = () => {
  const [sessions] = useSession();
  const approvedSessions = sessions.filter((session) => session.status === "approved");
   
  return (
    <div>
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold py-2">Study Session</h1>
        <p>
          Our study sessions are designed to help you master your subjects
          through collaboration and expert guidance.
        </p>
      </div>
      <div className="grid grid-cols-1 m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {approvedSessions.map((session) =>{ 
              const now = new Date();
              const isOngoing =
                now >= new Date(session.registrationStartDate) &&
                now <= new Date(session.registrationEndDate);
          return  (
          <div key={session._id} className="card bg-base-100 shadow-xl">
      
            <figure className="px-5 pt-5">
              <img
                src={session.image}
                alt="Volunteer posts"
                className="rounded-xl object-cover w-full aspect-[3/2]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{session.title}</h2>
              <p className="text-base-900">
                Tutor: 
                <span className="font-bold ml-2">
                  { session.name }
                </span>
              </p>
             
              <div className="w-full flex justify-between py-3 border-b-2">
                <p className="font-bold"> {session.registrationStartDate.split("T")[0]}</p>
                <p className="font-bold"> {session.registrationEndDate.split("T")[0]}</p>
              </div>

              <div className="card-actions mt-4 ">
                <button className={`btn ${
                      isOngoing
                        ? "bg-green-300 border border-green-700 hover:bg-green-400"
                        : "bg-red-400 border border-red-700 hover:bg-red-600"
                    }`}> 
                   {isOngoing ? "Ongoing" : "Closed"}
                   </button>
                <Link
                  to={`/session-details/${session._id}`}
                  className="btn btn-neutral rounded-3xl px-6 py-2 text-white bg-neutral hover:bg-neutral-dark"
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Sessions;
