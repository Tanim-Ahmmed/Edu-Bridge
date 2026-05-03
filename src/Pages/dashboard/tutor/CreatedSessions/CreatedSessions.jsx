import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import CardSkeleton from "../../../../component/CardSkeleton";

const CreatedSessions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: mySessions = [], refetch, isLoading } = useQuery({
    queryKey: ["mySessions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sessions/email/${user.email}`);
      return res?.data;
    },
  });

  const requestToApprove = (id) =>{
     axiosSecure.patch(`/sessions/status/${id}`, {status: "pending"})
       .then(res =>{
        if(res.data.modifiedCount > 0 ){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Request has been sent",
                showConfirmButton: false,
                timer: 1500
              });
        }
       })
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">All Created Study Sessions</h1>
       <p className="theme-muted text-center px-6 pb-8">Explore all available study sessions. Join group or individual lessons tailored to your learning needs and goals</p>
      <div className="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} variant="session" />
          ))}

        {mySessions.map((session) => (
          <article key={session._id} className="theme-card-pro group overflow-hidden">
            <figure className="theme-card-figure">
              <img
                src={session.image}
                alt={session.title}
                className="theme-card-image"
              />
            </figure>
            <div className="space-y-5 p-5">
              <div className="space-y-2">
                <p className="theme-kicker">Your Session</p>
                <h2 className="text-xl font-bold text-base-content">{session.title}</h2>
                <span
                  className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                    session.status === "pending"
                      ? "bg-yellow-200 border-yellow-400"
                      : session.status === "approved"
                      ? "bg-green-200 border-green-400"
                      : session.status === "rejected"
                      ? "bg-red-200 border-red-400"
                      : ""
                  }`}
                >
                  {session.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="theme-metric">
                  <p className="theme-metric-label">Class Starts</p>
                  <p className="theme-metric-value">{session.classStartDate.split("T")[0]}</p>
                </div>
                <div className="theme-metric">
                  <p className="theme-metric-label">Class Ends</p>
                  <p className="theme-metric-value">{session.classEndDate.split("T")[0]}</p>
                </div>
              </div>

              <div className="pt-1">
                {session?.status === "rejected" ? (
                  <button
                    onClick={() => requestToApprove(session._id)}
                    className="theme-btn-primary w-full rounded-full"
                  >
                    Request Approval Again
                  </button>
                ) : session?.status === "approved" ? (
                  <p className="rounded-2xl bg-primary/10 px-4 py-3 text-center font-semibold text-primary">
                    Your study session is approved
                  </p>
                ) : (
                  <p className="rounded-2xl bg-secondary/10 px-4 py-3 text-center font-semibold text-secondary">
                    Your study session request is pending
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CreatedSessions;
