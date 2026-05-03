const CardSkeleton = ({ variant = "session" }) => {
  const isTutor = variant === "tutor";

  return (
    <div className="theme-card-pro overflow-hidden">
      <div className="skeleton h-48 w-full rounded-none"></div>
      <div className="space-y-4 p-5">
        {isTutor ? (
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="w-full space-y-2">
              <div className="skeleton h-4 w-2/3"></div>
              <div className="skeleton h-3 w-1/2"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="w-full space-y-2">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
              <div className="skeleton h-8 w-20 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                <div className="skeleton mb-2 h-3 w-16"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="rounded-2xl border border-base-300 bg-base-200 p-3">
                <div className="skeleton mb-2 h-3 w-16"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          </>
        )}
        <div className="skeleton h-11 w-full rounded-full"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
