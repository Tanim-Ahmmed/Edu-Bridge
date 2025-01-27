import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ReviewSection = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${id}`);
      return res?.data;
    },
  });
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold py-2">Study Session Review</h1>
      <p>
        Engaging session with clear explanations, interactive activities, and
        helpful resources. Highly recommend for anyone looking to enhance their
        learning!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6 pt-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-base-200 border border-green-500 rounded-xl py-10 px-4">
            <h1 className="text-xl font-semibold  text-yellow-500">
              {review.studentName}
            </h1>
            <p>{review.studentEmail}</p>
            <p className="text-gray-700 mt-4 border ">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
