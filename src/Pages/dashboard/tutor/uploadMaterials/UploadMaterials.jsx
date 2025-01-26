import { Link } from "react-router-dom";
import useSession from "../../../../hooks/useSession";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const UploadMaterials = () => {
  const [sessions, refetch] = useSession();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const approvedSessions = sessions.filter(
    (session) => session.status === "approved"
  );

  const handleOpenModal = (e, id) => {
    e.preventDefault();
    const modal = document.getElementById("upload_materials");
    if (modal) {
      modal.setAttribute("material-id", id);
      modal.showModal();
    }
  };

  const handleUploadMaterials = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const materialURL = e.target.url.value;
    const modal = document.getElementById("upload_materials");
    if (modal) {
      const materialId = modal.getAttribute("material-id");
      const materialInfo = {
        SessionId: materialId,
        email: user?.email,
        title: title,
        image: image,
        materialURL: materialURL,
      };
      axiosSecure.post("/materials", materialInfo).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Material uploaded successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

      modal.close();
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">
        Upload New Materials
      </h1>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {approvedSessions?.map((session) => (
          <div key={session._id} className="w-full m-3">
            <img src={session.image} alt="" className="w-full" />
            <p className="py-4 font-semibold">{session.title}</p>
            <div className="">
              <div className="divider"></div>

              <div>
                <Link href="#">
                  <button
                    className="text-lg btn rounded-3xl shadow-xl btn-neutral pr-6"
                    onClick={(e) => handleOpenModal(e, session._id)}
                  >
                    Upload Materials
                  </button>
                </Link>

                <dialog
                  id="upload_materials"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <p className="py-4 font-bold text-xl text-center">{session.title}</p>
                    <div className="modal-action">
                      <form
                        method="dialog"
                        onSubmit={handleUploadMaterials}
                        className="w-full"
                      >
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={user?.email}
                            className="input input-bordered rounded-none w-full input-warning border-2"
                            readOnly
                          />
                        </div>
                        <div className="form-control ">
                          <label className="label">
                            <span className="label-text">Title</span>
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Material Title"
                            className="input input-bordered input-warning rounded-none w-full border-2 "
                            required
                          />
                        </div>

                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Material Image</span>
                          </label>
                          <input
                            type="url"
                            name="image"
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
                            placeholder="Material URL"
                            className="input input-bordered rounded-none w-full input-warning border-2"
                            required
                          />
                        </div>
                        <button className="btn btn-neutral mt-6 ">
                          Upload Materials
                        </button>
                      </form>
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

export default UploadMaterials;
