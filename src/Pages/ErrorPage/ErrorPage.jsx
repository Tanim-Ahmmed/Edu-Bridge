import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated 404 Numbers */}
        <div className="relative">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-8xl font-bold text-green-600 animate-float">4</span>
            <span className="text-8xl font-bold text-green-500 animate-bounce-slow">0</span>
            <span className="text-8xl font-bold text-green-600 animate-float">4</span>
          </div>
          
          {/* Sleeping Z's Animation */}
          <div className="absolute -top-16 right-1/4 transform rotate-12">
            <span className="inline-block text-4xl text-green-400 animate-float delay-100">z</span>
            <span className="inline-block text-5xl text-green-500 animate-float delay-200">Z</span>
            <span className="inline-block text-6xl text-green-600 animate-float delay-300">Z</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Sorry, we can't find that page!
        </h1>
        <p className="text-xl text-green-600 mb-8">
          Don't worry though, everything is STILL AWESOME!
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full 
                   font-semibold shadow-lg hover:from-green-600 hover:to-green-700 
                   transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 
                   focus:ring-green-500 focus:ring-opacity-50"
        >
          BACK TO HOME PAGE
        </button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce-slow"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-slow delay-100"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce-slow delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;