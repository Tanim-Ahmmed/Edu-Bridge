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
      <h1 className="theme-section-title py-2">Study Session Review</h1>
      <p className="theme-muted">
        Engaging session with clear explanations, interactive activities, and
        helpful resources. Highly recommend for anyone looking to enhance their
        learning!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6 pt-6">
        {reviews.map((review) => (
          <div key={review._id} className="theme-card-soft rounded-xl py-10 px-4">
            <h1 className="text-xl font-semibold text-secondary">
              {review.studentName}
            </h1>
            <p>{review.studentEmail}</p>
            <p className="theme-muted mt-4 rounded-xl border border-base-300 p-4">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
