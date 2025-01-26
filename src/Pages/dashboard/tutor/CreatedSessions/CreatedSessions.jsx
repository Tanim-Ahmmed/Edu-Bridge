import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CreatedSessions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: mySessions = [], refetch } = useQuery({
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

      <div className="grid grid-cols-1 m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mySessions.map((session) => (
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

              <div className="w-full flex justify-between py-3 border-b-2">
                <p className="font-bold">
                  {session.classStartDate.split("T")[0]}
                </p>
                <p className="font-bold">
                  {session.classEndDate.split("T")[0]}
                </p>
              </div>
              <p className="text-base-900 font-bold ">
                Status :
                <span
                  className={`py-1 px-5 border rounded-3xl font-bold ${
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
              </p>

              <div className="card-actions mt-4 ">
                {
                    session?.status === "rejected" ? <button
                    onClick={() => requestToApprove(session._id)}
                     className="btn btn-neutral rounded-3xl px-6 py-2 text-white bg-neutral hover:bg-neutral-dark">
                      Request to Approve
                    </button> : session?.status === "approved" ? 
                        <p className="text-green-400 font-bold">your study session is approved</p> : <p className="text-yellow-400 font-bold">Your study session request has been pending</p>
                   
                }
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatedSessions;
