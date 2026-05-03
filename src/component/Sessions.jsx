import useSession from "../hooks/useSession";
import { Link } from "react-router-dom";
import CardSkeleton from "./CardSkeleton";

const Sessions = () => {
  const [sessions, , isLoading] = useSession();
  const approvedSessions = sessions.filter((session) => session.status === "approved");
   
  return (
    <div>
      <div className="text-center py-6">
        <h1 className="theme-section-title py-2">All Study Session</h1>
        <p className="theme-muted">
          Our study sessions are designed to help you master your subjects
          through collaboration and expert guidance.
        </p>
      </div>
      <div className="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} variant="session" />
          ))}

        {approvedSessions.map((session) =>{ 
              const now = new Date();
              const isOngoing =
                now >= new Date(session.registrationStartDate) &&
                now <= new Date(session.registrationEndDate);
          return  (
          <article key={session._id} className="theme-card-pro group overflow-hidden">
            <figure className="theme-card-figure">
              <img
                src={session.image}
                alt={session.title}
                className="theme-card-image"
              />
              <div className="absolute left-5 top-5">
                <span
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                    isOngoing
                      ? "bg-secondary text-secondary-content"
                      : "bg-accent text-accent-content"
                  }`}
                >
                  {isOngoing ? "Open Now" : "Closed"}
                </span>
              </div>
            </figure>
            <div className="space-y-5 p-5">
              <div className="space-y-2">
                <p className="theme-kicker">Study Session</p>
                <h2 className="text-xl font-bold leading-tight text-base-content">
                  {session.title}
                </h2>
                <p className="theme-muted">
                  Mentor: <span className="font-semibold text-base-content">{session.name}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="theme-metric">
                  <p className="theme-metric-label">Starts</p>
                  <p className="theme-metric-value">{session.registrationStartDate.split("T")[0]}</p>
                </div>
                <div className="theme-metric">
                  <p className="theme-metric-label">Ends</p>
                  <p className="theme-metric-value">{session.registrationEndDate.split("T")[0]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="theme-badge-primary">Collaborative</span>
                <span className="theme-muted text-sm">
                  {isOngoing ? "Registration in progress" : "Registration closed"}
                </span>
              </div>

              <div className="pt-1">
                <Link
                  to={`/session-details/${session._id}`}
                  className="theme-btn-primary w-full rounded-full"
                >
                  Explore Session
                </Link>
              </div>
            </div>
          </article>
        )})}
      </div>
    </div>
  );
};

export default Sessions;
