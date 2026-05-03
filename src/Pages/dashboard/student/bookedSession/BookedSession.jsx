import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../../../../component/CardSkeleton";

const BookedSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: booked = [], isLoading } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedSessions/email/${user?.email}`);
      return res?.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">
        Booked Session
      </h1>
      <p className="theme-muted text-center px-6 pb-8">View all your scheduled study sessions in one place. Manage appointments, track progress, and stay on top of your learning goals.</p>
      <div className="grid grid-cols-1 gap-6 pl-6 md:grid-cols-2 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} variant="session" />
          ))}

        {booked.map((session) => (
          <article key={session._id} className="theme-card-pro overflow-hidden">
            <img src={session.image} alt={session.title} className="theme-card-image" />
            <div className="space-y-5 p-5">
              <div className="space-y-2">
                <p className="theme-kicker">Booked Session</p>
                <h3 className="text-xl font-bold text-base-content">{session.title}</h3>
                <p className="theme-muted text-sm">Tutor email</p>
                <span className="theme-badge-primary">
                {session.tutorEmail}
                </span>
              </div>
              <Link to={`/dashboard/session-details/${session.sessionId}`}>
                <button className="theme-btn-primary w-full rounded-full">Read More</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BookedSession;
