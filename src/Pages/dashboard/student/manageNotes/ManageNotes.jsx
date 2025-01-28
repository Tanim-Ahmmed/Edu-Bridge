import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageNotes = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notes/email/${user.email}`);
      return res?.data;
    },
  });

  const handleOpenModal = (e, id) => {
    e.preventDefault();
    const modal = document.getElementById("update_note");
    if (modal) {
      modal.setAttribute("data-note-id", id);
      modal.showModal();
    }
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const modal = document.getElementById("update_note");
    if (modal) {
      const noteId = modal.getAttribute("data-note-id");

       axiosSecure
       .patch(`/notes/${noteId}`, { title:title, description:description})
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
  };
  const handleDeleteNote = (id) => {
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
         axiosSecure.delete(`/notes/${id}`)
         .then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your note has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });

  };

  return (
    <div className="text-center p-10 ">
      <h1 className="text-2xl font-bold py-10 ">Manage Your Notes</h1>
      <p className="text-center px-6 pb-8">Review and organize your saved notes. Edit, delete, or sort them to keep your study materials structured and accessible.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-base-200 border border-green-500 rounded-xl py-10 px-4"
          >
            <h1 className="text-xl font-semibold bg-base-300 text-green-500">
              {note.title}
            </h1>
            <p className="text-gray-700 mt-4 border ">{note.description}</p>

            <div className="flex pt-10 justify-between">
              <div>
                <Link href="#">
                  <button
                    className="text-lg btn rounded-3xl shadow-xl btn-neutral pr-6"
                    onClick={(e) => handleOpenModal(e, note._id)}
                  >
                    update
                  </button>
                </Link>

                <dialog
                  id="update_note"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <p className="py-4">{note.title}</p>
                    <div className="modal-action">
                      <form
                        method="dialog"
                        onSubmit={handleUpdateNote}
                        className="w-full"
                      >
                        <div className="form-control ">
                          <label className="label">
                            <span className="label-text">Title</span>
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Note Title"
                            className="input input-bordered input-warning rounded-none w-full border-2 "
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Description</span>
                          </label>
                          <textarea
                            name="description"
                            placeholder="Note Description"
                            className="textarea textarea-bordered textarea-warning rounded-none w-full border-2 md:h-36"
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
              </div>

              <button
                onClick={() => handleDeleteNote(note._id)}
                className="text-lg btn btn-neutral text-red-400 rounded-3xl shadow-xl"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageNotes;