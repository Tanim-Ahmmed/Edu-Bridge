import useSession from "../hooks/useSession";
import img from "../assets/logo/logo.png"
import { Link } from "react-router-dom";
const Sessions = () => {
  const [session] = useSession();
  console.log({ session });
  return (
    <div>
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold py-2">Study Session</h1>
        <p>
          Our study sessions are designed to help you master your subjects
          through collaboration and expert guidance.
        </p>
      </div>
      <div className="grid grid-cols-1 m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {session.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
      
            <figure className="px-5 pt-5">
              <img
                src={img}
                alt="Volunteer posts"
                className="rounded-xl object-cover w-full aspect-[3/2]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.sessionTitle}</h2>
              <p className="text-base-900">
                Tutor: 
                <span className="bg-green-200 py-1 px-5 border border-green-600 rounded-3xl font-bold">
                 
                  {item.tutorName }
                </span>
              </p>
              <div className="w-full flex justify-between py-3 border-b-2">
                <p className="font-bold"> {item.classEndDate}</p>
                <p className="font-bold"> {item.classStartTime   }</p>
              </div>

              <div className="card-actions mt-4 ">
                <Link
                  to={`/`}
                  className="btn btn-neutral rounded-3xl px-6 py-2 text-white bg-neutral hover:bg-neutral-dark"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
