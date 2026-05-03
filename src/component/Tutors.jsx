import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import CardSkeleton from "./CardSkeleton";

const Tutors = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/alltuors");
      return res.data;
    },
  });
  return (
    <div className="py-20 shadow-inner  mb-10">
      <div className="text-center ">
        <h1 className="theme-section-title py-2">All Turors</h1>
        <p className="theme-muted p-3 text-center">
        Browse the complete list of tutors. View their expertise, ratings, and availability to find the perfect guide for your learning.
        </p>
      </div>
      <div className="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} variant="tutor" />
          ))}

        {tutors.map((tutor) => (
          <article
            key={tutor._id}
            className="theme-card-pro group p-5"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="avatar shrink-0">
                <div className="w-20 rounded-full ring ring-primary/30 ring-offset-4 ring-offset-base-100">
                <img
                  src={tutor.image || "/placeholder-avatar.png"}
                  alt={tutor.name}
                  className="object-cover"
                />
              </div>
            </div>
              <div className="min-w-0">
                <p className="theme-kicker">Verified Tutor</p>
                <h3 className="truncate text-xl font-bold text-base-content">
                  {tutor.name}
                </h3>
                <p className="theme-muted truncate">{tutor.email}</p>
              </div>
            </div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="theme-badge-primary">Mentorship</span>
              <span className="theme-badge-secondary">Live Support</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="theme-metric">
                <p className="theme-metric-label">Availability</p>
                <p className="theme-metric-value">Flexible</p>
              </div>
              <div className="theme-metric">
                <p className="theme-metric-label">Format</p>
                <p className="theme-metric-value">1:1 & Group</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
