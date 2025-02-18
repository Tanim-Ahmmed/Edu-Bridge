import Banner from "../../component/Banner";
import Sessions from "../../component/Sessions";
import Tutors from "../../component/Tutors";

const Home = () => {
    return (
        <div className="min-h-screen mt-16">
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
            <Banner></Banner>
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Sessions></Sessions>
        <Tutors></Tutors>
        </div>
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-green-200 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="w-64 h-64 bg-green-300 rounded-full opacity-20"></div>
        </div>
      </div>
      </div>
        </div>
    );
};

export default Home;