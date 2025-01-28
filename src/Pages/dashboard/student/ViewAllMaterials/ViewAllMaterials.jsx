import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const ViewAllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: bookedSessions = [] } = useQuery({
    queryKey: ["bookedSessions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookedSessions/email/${user?.email}`);
      return res?.data;
    },
  });
  const [sessionMaterials, setSessionMaterials] = useState([]);

  const handleOpenModal = async (e, id) => {
    e.preventDefault();
    console.log(id)
    const res = await axiosSecure.get(`/materials/sessionId/${id}`);
    setSessionMaterials(res.data);
    const modal = document.getElementById("view_material");
    if (modal) modal.showModal();
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold py-10 ">View All Materials</h1>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pl-6">
        {bookedSessions?.map((session) => (
          <div key={session._id} className="w-full m-3">
            <img src={session.image} alt="" className="w-full" />
            <p className="py-2 font-semibold">{session.title}</p>
            <p className="pb-4 font-semibold">
              Tutor email: {session.tutorEmail}
            </p>
            <div className="">
              <div className="divider"></div>

              <div className="flex justify-between">
                <Link href="#">
                  <button
                    className="text-lg btn rounded-3xl shadow-xl btn-neutral pr-6"
                    onClick={(e) => handleOpenModal(e, session.sessionId)}
                  >
                    View Materials
                  </button>
                </Link>

                <dialog
                  id="view_material"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div>
                    <h1 className="text-xl font-bold py-10 ">View Materials</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sessionMaterials.map((material) => (
                                   <div key={material._id}>
                                  <div
                                    className="relative group sm:w-64 sm:h-64 overflow-hidden m-5 rounded-3xl shadow-lg"
                                  >
                                    <img
                                      src={material.image}
                                      alt={material.title}
                                      className="w-full h-full object-cover rounded-3xl"
                                    />
                      
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 p-6 rounded-3xl">
                                      <h2 className="text-white text-lg font-semibold mb-4">
                                        {material.title}
                                      </h2>
                                      <Link
                                      to={material.materialURL}
                                      target="_blank"
                                      className="btn btn-primary text-white rounded-3xl hover:bg-blue-700">
                                        View Material <FaArrowRight className="ml-2 inline" />
                                      </Link>
                                    </div>
                                   </div>
                                  </div>
                                ))}
                              </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllMaterials;
