import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SessionsCard = ({ sessions, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const requestToReject = (id) => {
    Swal.fire({
      input: "textarea",
      inputLabel: "Rejection Reason",
      inputPlaceholder: "Type your rejection reason here...",
      inputAttributes: {
        "aria-label": "Type your rejection reason here",
      },
      showCancelButton: true,
    }).then(async ({ value: reason }) => {
      if (reason) {
        const { value: feedback } = await Swal.fire({
          input: "textarea",
          inputLabel: "Rejection Feedback",
          inputPlaceholder: "Provide additional feedback here...",
          inputAttributes: {
            "aria-label": "Provide additional feedback here",
          },
          showCancelButton: true,
        });
        if (feedback) {
          axiosSecure
            .patch(`/sessions/status/${id}`, {
              status: "rejected",
              rejectionReason: reason,
              rejectionFeedback: feedback,
            })
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Rejected!",
                  text: "The session has been rejected successfully.",
                  icon: "success",
                });
              }
            })
            .catch((error) => {
              console.error(error);
              Swal.fire({
                title: "Error!",
                text: "Something went wrong while rejecting the session.",
                icon: "error",
              });
            });
        }
      }
    });
  };

  const handleOpenModal = (e, id) => {
    e.preventDefault();
    const modal = document.getElementById("update_session");
    if (modal) {
      modal.setAttribute("data-session-id", id);
      modal.showModal();
    }
  };

  const handleUpdateSession = (e) => {
    e.preventDefault();
    const fee = e.target.fee.value;
    const modal = document.getElementById("update_session");
    if (modal) {
      const sessionId = modal.getAttribute("data-session-id");

      axiosSecure
        .patch(`/sessions/fee/${sessionId}`, { fee: fee })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Session has been Approved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });

      modal.close();
    }
  };
  return (
    <div className=" mx-auto flex flex-col justify-center">
      <div className="w-full sm:p-10 ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th className="hidden sm:table-cell">Title</th>
                <th className="hidden md:table-cell">Tutor email</th>
                <th>Status</th>
                {sessions.some((session) => session.status !== "rejected") && (
                  <th>Action</th>
                )}
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
                  <td>
                    <div
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
                    </div>
                  </td>
                  <td>
                    {session.status !== "rejected" && (
                      <>
                        <div>
                          <Link href="#">
                            <button
                              className="text-lg text-green-400 pr-6"
                              onClick={(e) => handleOpenModal(e, session._id)}
                            >
                              <FaRegEdit />
                            </button>
                          </Link>

                          <dialog
                            id="update_session"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box">
                              <img src={session.image} alt="" />
                              <p className="py-4">{session.title}</p>
                              <div className="modal-action">
                                <form
                                  method="dialog"
                                  onSubmit={handleUpdateSession}
                                  className="w-full"
                                >
                                  <div className="form-control w-full">
                                    <label className="label">
                                      <span className="label-text">
                                        Registration Fee
                                      </span>
                                    </label>
                                    <input
                                      type="number"
                                      name="fee"
                                      defaultValue={0}
                                      placeholder="Registration Fee"
                                      className="input input-bordered rounded-none w-full input-warning border-2"
                                    />
                                  </div>
                                  <button className="btn btn-neutral mt-6 ">
                                    Update
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>

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
