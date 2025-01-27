import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BookedSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: booked = [] } = useQuery({
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
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pl-6 ">
        {booked.map((session) => (
          <div key={session._id} className="bg-base-200 p-6">
            <img src={session.image} alt="" className="w-full" />
            <h3 className=" text-sm pt-4 font-bold text-gray-800">
              Tutor email:
              <span className="bg-green-100 text-green-800 py-1 px-4 border border-green-600 rounded-full">
                {session.tutorEmail}
              </span>
            </h3>
            <p className="py-4 font-semibold text-xl">{session.title}</p>
            <Link to={`/dashboard/session-details/${session.sessionId}`}>
              <button className="btn btn-neutral rounded-3xl">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedSession;
