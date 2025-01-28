
import { FaArrowRight } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllMaterials = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allMaterials = [], refetch  } = useQuery({
      queryKey: ["allMaterials"],
      queryFn: async () => {
        const res = await axiosSecure.get('/materials');
        return res?.data;
      },
    });

    const handleDeleteMaterials = (id) =>{
          Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) =>{
                      if (result.isConfirmed){
                       axiosSecure.delete(`/materials/${id}`)
                       .then((res) => {
                            if (res.data.deletedCount > 0) {
                              refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your Material has been deleted.",
                                icon: "success",
                              });
                            }
                          });
                      }
                    });
    }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">
        All Materials
      </h1>
      <p className="text-center px-6 pb-8">Access a library of shared resources. Download notes, assignments, and presentations to support your learning journey.</p>
      <div className=" mx-10 p-5 rounded-3xl text-center flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMaterials.map((material) => (
             <div key={material._id} className="shadow-inner p-2">
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
             <button
                onClick={() => handleDeleteMaterials(material._id)}
                className="text-lg btn btn-neutral text-red-400 rounded-3xl shadow-xl"
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMaterials;
