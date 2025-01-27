import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SessionSection = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const now = new Date();

  const { data: oneUser = [] } = useQuery({
    queryKey: ["oneUser"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/email/${user?.email}`);
      return res?.data;
    },
  });

  const { data: oneSession = [], refetch } = useQuery({
    queryKey: ["oneSession"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/sessions/${id}`);
      return res?.data;
    },
  });

  const isStudent = oneUser?.role === "student";
  const {
    _id,
    name,
    email,
    image,
    title,
    description,
    registrationStartDate,
    registrationEndDate,
    classStartDate,
    classEndDate,
    duration,
    fee,
  } = oneSession;

  const isOngoing =
    now >= new Date(registrationStartDate) &&
    now <= new Date(registrationEndDate);

  const handleFreeBook = (id) => {
    const BookedInfo = {
      sessionId: _id,
      email: user?.email,
      image: image,
      title: title,
      tutorEmail: email,
    };

    axiosSecure.post("/bookedSessions", BookedInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your note has been Booked",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div
          className="hero"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content ">
            <div className="max-w-md ">
              <h1 className=" text-3xl font-bold pt-8 text-center">{title}</h1>
              <div className="flex justify-between">
                <p className="flex justify-start font-bold text-white mb-6">
                  Tutor: {name} <br /> Email: {email}
                </p>
                <p className="flex justify-start font-bold text-white mb-6">
                  Rating: 4.7 <br /> Duration : {duration}
                </p>
              </div>

              <div className="flex justify-between pb-8">
                <div>
                  <h2 className=" font-semibold">
                    Registration Start :
                    {registrationStartDate
                      ? registrationStartDate.split("T")[0]
                      : "Date not available"}
                  </h2>
                </div>

                <div className="font-semibold ">
                  Registration End :
                  {registrationEndDate
                    ? registrationEndDate.split("T")[0]
                    : "Date not available"}
                </div>
              </div>

              <div className="flex justify-between pb-8">
                <div>
                  <h2 className="text-xl font-semibold">
                    Class Start :
                    {classStartDate
                      ? classStartDate.split("T")[0]
                      : "Date not available"}
                  </h2>
                </div>

                <div className="text-xl font-semibold ">
                  Class End :
                  {classEndDate
                    ? classEndDate.split("T")[0]
                    : "Date not available"}
                </div>
              </div>

              <p className=" hero-overlay bg-opacity-60 p-8 rounded-2xl font-semibold">
                {description}
              </p>
              <p className="text-center text-xl mt-2">Fee :${fee}</p>

              {isOngoing ? (
                <div>
                  {fee > 0 ? (
                    <button
                      disabled={!isStudent}
                      className={`py-2 my-8 bg-green-400 mx-auto ${
                        !isStudent
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-white hover:text-green-500"
                      } rounded-3xl flex gap-3 items-center text-white font-bold px-4 justify-center`}
                    >
                      Book Now {fee} $
                      <div className="text-lg border p-2 rounded-full hover:bg-white hover:text-green-600">
                        <CiBookmark />
                      </div>
                    </button>
                  ) : (
                    <button
                      disabled={!isStudent}
                      onClick={() => handleFreeBook(id)}
                      className={`py-2 my-8 bg-green-400 mx-auto ${
                        !isStudent
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-white hover:text-green-500"
                      } rounded-3xl flex gap-3 items-center text-white font-bold px-4 justify-center`}
                    >
                      Book Now Free
                      <div className="text-lg border p-2 rounded-full hover:bg-white hover:text-green-600">
                        <CiBookmarkCheck />
                      </div>
                    </button>
                  )}
                </div>
              ) : (
                <button className="flex btn  mx-auto mt-6 btn-warning cursor-not-allowed">Registration End</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionSection;
