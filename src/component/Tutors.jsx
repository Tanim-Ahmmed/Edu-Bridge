import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Tutors = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tutors = [], refetch } = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/alltuors");
      return res.data;
    },
  });
  return (
    <div className="py-20 shadow-inner  mb-10">
      <div className="text-center ">
        <h1 className="text-2xl font-bold py-2">All Turors</h1>
        <p className="p-3 text-center">
        Browse the complete list of tutors. View their expertise, ratings, and availability to find the perfect guide for your learning.
        </p>
      </div>
      <div className="grid grid-cols-1 m-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="card bg-base-200 shadow-lg hover:shadow-xl rounded-lg p-4 text-center"
          >
            <div className="avatar mx-auto mb-4 pt-6">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={tutor.image || "/placeholder-avatar.png"}
                  alt={tutor.name}
                  className="object-cover rounded-full pt-6"
                />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title text-lg font-bold text-gray-800">
                Tutor:
                <span className="bg-green-100 text-green-800 py-1 px-4 border border-green-600 rounded-full">
                  {tutor.name}
                </span>
              </h3>
              <p className="text-gray-600">{tutor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
