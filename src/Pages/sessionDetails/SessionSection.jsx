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
  console.log(user)
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
          className="hero overflow-hidden rounded-[2rem]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-neutral/75"></div>
          <div className="hero-content text-neutral-content ">
            <div className="max-w-3xl rounded-[2rem] border border-neutral-content/10 bg-neutral/35 p-8 backdrop-blur-sm">
              <h1 className=" text-3xl font-bold pt-8 text-center">{title}</h1>
              <div className="flex justify-between">
                <p className="mb-6 flex justify-start font-bold text-neutral-content">
                  Tutor: {name} <br /> Email: {email}
                </p>
                <p className="mb-6 flex justify-start font-bold text-neutral-content">
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

              <p className="rounded-2xl bg-base-100/15 p-8 font-semibold text-neutral-content">
                {description}
              </p>
              <p className="text-center text-xl mt-2">Fee :${fee}</p>

              {isOngoing ? (
                <div>
                  {fee > 0 ? (
                    <button
                      disabled={!isStudent}
                      onClick={() => handleFreeBook(id)}
                      className={`mx-auto my-8 flex items-center justify-center gap-3 rounded-3xl px-4 py-2 font-bold ${
                        !isStudent
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:brightness-110"
                      } bg-primary text-primary-content`}
                    >
                      Book Now {fee} $
                      <div className="rounded-full border border-primary-content/30 p-2 text-lg">
                        <CiBookmark />
                      </div>
                    </button>
                  ) : (
                    <button
                      disabled={!isStudent}
                      onClick={() => handleFreeBook(id)}
                      className={`mx-auto my-8 flex items-center justify-center gap-3 rounded-3xl px-4 py-2 font-bold ${
                        !isStudent
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:brightness-110"
                      } bg-primary text-primary-content`}
                    >
                      Book Now Free
                      <div className="rounded-full border border-primary-content/30 p-2 text-lg">
                        <CiBookmarkCheck />
                      </div>
                    </button>
                  )}
                </div>
              ) : (
                <button className="theme-btn-secondary mx-auto mt-6 cursor-not-allowed rounded-full opacity-90">Registration End</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionSection;
