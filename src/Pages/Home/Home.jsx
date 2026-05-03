import { Link } from "react-router-dom";
import Banner from "../../component/Banner";
import Sessions from "../../component/Sessions";
import Tutors from "../../component/Tutors";

const Home = () => {
    return (
        <div className="theme-page min-h-screen mt-20">
            <div className="theme-hero min-h-screen">
            <Banner></Banner>
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24">
        <Sessions></Sessions>
        <div className="pt-10 pb-20">
        <Link
          to="/sessions"
          className="theme-btn-primary rounded-full px-8 py-3 font-semibold shadow-lg"
        >
          View All Sessions
        </Link>
    
        </div>
       
        <Tutors></Tutors>
        </div>
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-primary/15 opacity-70"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="h-64 w-64 rounded-full bg-secondary/15 opacity-70"></div>
        </div>
      </div>
      </div>
        </div>
    );
};

export default Home;
