import { Link } from "react-router-dom";
import img from "../assets/logo/bannerImg.jpg" 
import useAuth from "../hooks/useAuth";
const Banner = () => {
  const {user} = useAuth();
  return (
    <div
      className="hero min-h-96 w-full "
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center md:py-32">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">Connect, Collaborate, Excel!</h1>
          <p className="mb-5">
          Join our platform to streamline study sessions, share resources, and manage educational activities effortlessly.
          </p>
           {
            user?.email ? "" : <Link to="/login" className="btn btn-primary">Get Started Now</Link>
           }
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
