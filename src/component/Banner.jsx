import { Link } from "react-router-dom";
import img from "../assets/logo/bannerImg.jpg" 
const Banner = () => {
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
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/sessionDetails" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
