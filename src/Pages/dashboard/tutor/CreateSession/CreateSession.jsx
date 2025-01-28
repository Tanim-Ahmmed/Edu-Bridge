import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CreateSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { displayName, email } = user;

  const [registrationStartDate, setRegistrationStartDate] = useState(new Date());
  const [registrationEndDate, setRegistrationEndDate] = useState(new Date());
  const [classStartDate, setClassStartDate] = useState(new Date());
  const [classEndDate, setClassEndDate] = useState(new Date());
  const [duration, setDuration] = useState("");

  const calculateDuration = (start, end) => {
    const diff = Math.abs(end - start);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return `${days} days`;
  };

  const handleClassDateChange = (start, end) => {
    if (start && end) {
      setDuration(calculateDuration(start, end));
    }
  };

  const handleAddSession = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const description = form.description.value;
    const fee = form.fee.value;

    const sessionData = {
      status: "pending",
      name: displayName,
      email,
      title,
      image,
      description,
      registrationStartDate,
      registrationEndDate,
      classStartDate,
      classEndDate,
      duration,
      fee,
    };

    axiosSecure.post("/sessions", sessionData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Your Session has been Requested",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">Add New Study Sessions</h1>
      <p className="text-center px-6 pb-8">Schedule new study sessions with ease. Set topics, time, and participants to create a collaborative and engaging learning environment.</p>
      <div className="min-h-screen flex justify-center items-center sm:w-11/12 mx-auto">
        <div className="hero bg-base-100 min-h-screen">
          <div
            className="card w-full shrink-0 rounded-none p-10 md:max-w-[800px]
             bg-base-200 shadow-lg"
          >
            <div className="text-center">
            </div>
            <form onSubmit={handleAddSession} className="card-body">
              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={displayName}
                    className="input input-bordered input-warning rounded-none w-full border-2"
                    readOnly
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                    readOnly
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Session title"
                    className="input input-bordered input-warning rounded-none w-full border-2"
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Session Image</span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Session Image URL"
                    className="input input-bordered rounded-none w-full input-warning border-2"
                    required
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Session Description"
                    className="textarea textarea-bordered textarea-warning rounded-none w-full border-2 md:h-36"
                    required
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Registration Start Date</span>
                  </label>
                  <DatePicker
                    selected={registrationStartDate}
                    onChange={(date) => setRegistrationStartDate(date)}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Registration End Date</span>
                  </label>
                  <DatePicker
                    selected={registrationEndDate}
                    onChange={(date) => setRegistrationEndDate(date)}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Class Start Date</span>
                  </label>
                  <DatePicker
                    selected={classStartDate}
                    onChange={(date) => {
                      setClassStartDate(date);
                      handleClassDateChange(date, classEndDate);
                    }}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Class End Date</span>
                  </label>
                  <DatePicker
                    selected={classEndDate}
                    onChange={(date) => {
                      setClassEndDate(date);
                      handleClassDateChange(classStartDate, date);
                    }}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                  />
                </div>
              </div>

              <div className="md:flex md:space-x-2 w-full">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Session Duration</span>
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={duration}
                    className="input input-bordered input-warning rounded-none w-full border-2"
                    readOnly
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Registration Fee</span>
                  </label>
                  <input
                    type="number"
                    name="fee"
                    value={0}
                    placeholder="Registration Fee"
                    className="input input-bordered rounded-none w-full input-warning border-2"
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning hover:border-orange-400 rounded-none">
                  Add Session
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSession;
