import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CreateNote = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleAddNotes = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const title = form.title.value;
    const description = form.description.value;

    const newNote = {
      email,
      title,
      description,
    };

    axiosSecure.post("/notes", newNote).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your note has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center sm:w-11/12 mx-auto">
    
      <div className="hero bg-base-100 min-h-screen ">
        <div className="card w-full shrink-0 rounded-none md:max-w-[800px] bg-base-200 shadow-lg">
          <div className="text-center pt-10">
          <h1 className="text-2xl font-bold ">Create Your Notes</h1>
          <p className="text-center px-6 pb-8">Quickly jot down and organize your ideas. Create, edit, and save notes to keep track of your learning journey.</p>
          </div>
          <form onSubmit={handleAddNotes} className="card-body">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered rounded-none w-full input-warning  border-2"
                readOnly
              />
            </div>

            <div className="form-control flex-1">
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

            <div className="form-control mt-6">
              <button className="btn btn-warning hover:border-orange-400 rounded-none">
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
