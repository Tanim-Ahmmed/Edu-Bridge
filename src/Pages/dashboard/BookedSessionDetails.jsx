import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const BookedSessionDetails = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const { id } = useParams();
  const { data: bookedDetails = [] } = useQuery({
    queryKey: ["bookedDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sessions/${id}`);
      return res?.data;
    },
  });

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
  } = bookedDetails;


  const handleAddReview = (e) =>{
    e.preventDefault();
    const form = e.target;
    
    const reviewSessionId = _id
    const studentEmail = form.email.value;
    const studentName = form.name.value;
    const review = form.review.value;
    const rating = form.rating.value;

    const reviewInfo = {
       reviewSessionId,
       studentEmail,
       studentName,
       review,
       rating,
      };

       axiosSecure.post("/reviews", reviewInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Review has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
  }
  return (
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
            <p className="text-center text-xl mt-2">Fee :$ {fee}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center py-6">
        <h1 className="text-2xl font-bold py-2">Provide Your Review & Rating</h1>
        <p>
          Engaging session with clear explanations, interactive activities, and
          helpful resources. Highly recommend for anyone looking to enhance
          their learning!
        </p>
        </div>

        <form onSubmit={handleAddReview} className="card-body">

            
        <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Student Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                className="input input-bordered input-warning rounded-none w-full border-2 "
                readOnly
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Student Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="input input-bordered rounded-none w-full input-warning  border-2"
                readOnly
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                name="review"
                placeholder="Your Review"
                className="textarea textarea-bordered textarea-warning rounded-none w-full border-2 md:h-36"
                required
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating[1-5]</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Your Rating"
                className="input input-bordered rounded-none w-full input-warning  border-2"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning hover:border-orange-400 rounded-none">
                Add Review
              </button>
            </div>
          </form>


      </div>
    </div>
  );
};

export default BookedSessionDetails;
