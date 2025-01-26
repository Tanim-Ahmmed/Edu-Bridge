import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const SessionsCard = ({sessions, refetch}) => {
    const axiosSecure = useAxiosSecure();

    const requestToReject = (id) =>{
        axiosSecure.patch(`/sessions/status/${id}`, {status: "rejected"})
          .then(res =>{
           if(res.data.modifiedCount > 0 ){
               refetch();
               Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "Session has been rejected",
                   showConfirmButton: false,
                   timer: 1500
                 });
           }
          })
     }
    return (
        <div className="sm:w-11/12 mx-auto flex flex-col justify-center">
   
        <div className="w-full sm:p-10 ">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th className="hidden sm:table-cell">Title</th>
                  <th className="hidden md:table-cell">Tutor email</th>
                  <th>Status</th>
                  {sessions.some(session => session.status !== "rejected") && <th>Action</th>}
                </tr>
              </thead>

              {sessions.map((session) => (
                <tbody key={session._id}>
                  <tr>
                  <th>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={session.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </th>
                    <td className="hidden sm:table-cell">{session.title}</td>
                    <td className="hidden md:table-cell">{session.email}</td>
                    <td > <div 
                     className={`py-1 px-5 border rounded-3xl font-bold ${
                        session.status === "pending"
                          ? "bg-yellow-200 border-yellow-400"
                          : session.status === "approved"
                          ? "bg-green-200 border-green-400"
                          : session.status === "rejected"
                          ? "bg-red-200 border-red-400"
                          : ""
                      }`}>
                      {session.status}
                      </div></td>
                      <td>
                      {session.status !== "rejected" && (
                        <>
                          <Link>
                            <button className="text-lg text-orange-400 pr-6">
                              <FaRegEdit />
                            </button>
                          </Link>
                          <button
                            onClick={() => requestToReject(session._id)}
                            className="text-lg text-red-600"
                          >
                            <MdDeleteForever />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
    </div>
          
    );
};

export default SessionsCard;