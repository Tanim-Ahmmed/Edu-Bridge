import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUploadedMaterials = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: materials = [], refetch  } = useQuery({
      queryKey: ["materials"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/materials/email/${user.email}`);
        return res?.data;
      },
    });


    const handleOpenModal = (e, id) => {
        e.preventDefault();
        const modal = document.getElementById("update_material");
        if (modal) {
          modal.setAttribute("materials-id", id);
          modal.showModal();
        }
      };

      const handleUpdateMaterials = (e) =>{
          e.preventDefault();
            const image = e.target.image.value;
            const materialURL = e.target.url.value;
            const modal = document.getElementById("update_material");
            if (modal) {
              const materialId = modal.getAttribute("materials-id");
               axiosSecure
               .patch(`/materials/${materialId}`, { image:image, materialURL:materialURL})
               .then((res) => {
                 if (res.data.modifiedCount > 0) {
                   refetch();
                   Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Your note updated successfully",
                     showConfirmButton: false,
                     timer: 1500,
                   });
                 }
               });
        
              modal.close();
            }
      }

      const handleDeleteMaterial = (id) => {
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
      
        };

    return (
        <div>
           <h1 className="text-3xl font-semibold text-center py-6 pt-10">All Uploaded Materials</h1>
           <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pl-6">
        {materials?.map((material) => (
          <div key={material._id} className="w-full m-3">
            <img src={material.image} alt="" className="w-full" />
            <p className="py-4 font-semibold">{material.title}</p>
            <div className="">
              <div className="divider"></div>

              <div className="flex justify-between">
                <Link href="#">
                  <button
                    className="text-lg btn rounded-3xl shadow-xl btn-neutral pr-6"
                    onClick={(e) => handleOpenModal(e, material._id)}
                  >
                    Update
                  </button>
                  </Link>

                   <dialog
                  id="update_material"
                  className="modal modal-bottom sm:modal-middle"
                      >
                  <div className="modal-box">
                    <p className="py-4 font-bold text-xl text-center bg-green-400 border border-t-black border-l-black border-r-black rounded-t-3xl">{material.title}</p>
                    <p className="py-2 bg-gray-300 font-bold text-lg text-center rounded-b-3xl">{material.email}</p>
                    <div className="modal-action">
                      <form
                        method="dialog"
                        onSubmit={handleUpdateMaterials}
                        className="w-full"
                      >
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Material Image</span>
                          </label>
                          <input
                            type="url"
                            name="image"
                            defaultValue={material.image}
                            placeholder="Session Image URL"
                            className="input input-bordered rounded-none w-full input-warning border-2"
                            required
                          />
                        </div>

                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Material Link</span>
                          </label>
                          <input
                            type="url"
                            name="url"
                            defaultValue={material.materialURL}
                            placeholder="Material URL"
                            className="input input-bordered rounded-none w-full input-warning border-2"
                            required
                          />
                        </div>
                        <button className="btn btn-neutral mt-6 ">
                          Update
                        </button>
                      </form>

                    </div>
                  </div>
                </dialog>
                 
              <button
                onClick={() => handleDeleteMaterial(material._id)}
                className="text-lg btn btn-neutral text-red-400 rounded-3xl shadow-xl"
              >
                delete
              </button>
              </div>
             
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default AllUploadedMaterials;