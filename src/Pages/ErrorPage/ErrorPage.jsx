import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="theme-hero flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        {/* Animated 404 Numbers */}
        <div className="relative">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-8xl font-bold text-primary animate-float">4</span>
            <span className="text-8xl font-bold text-secondary animate-bounce-slow">0</span>
            <span className="text-8xl font-bold text-accent animate-float">4</span>
          </div>
          
          {/* Sleeping Z's Animation */}
          <div className="absolute -top-16 right-1/4 transform rotate-12">
            <span className="inline-block text-4xl text-primary animate-float delay-100">z</span>
            <span className="inline-block text-5xl text-secondary animate-float delay-200">Z</span>
            <span className="inline-block text-6xl text-accent animate-float delay-300">Z</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 text-4xl font-bold text-base-content">
          Sorry, we can't find that page!
        </h1>
        <p className="theme-muted mb-8 text-xl">
          Don't worry though, everything is STILL AWESOME!
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="theme-btn-primary rounded-full px-8 py-3 font-semibold shadow-lg"
        >
          BACK TO HOME PAGE
        </button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce-slow"></div>
          <div className="h-3 w-3 rounded-full bg-secondary animate-bounce-slow delay-100"></div>
          <div className="h-3 w-3 rounded-full bg-accent animate-bounce-slow delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
