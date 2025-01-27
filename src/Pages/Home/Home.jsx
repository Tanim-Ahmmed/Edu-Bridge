import Banner from "../../component/Banner";
import Sessions from "../../component/Sessions";
import Tutors from "../../component/Tutors";

const Home = () => {
    return (
        <div className="min-h-screen mt-16">
            <Banner></Banner>
            <Sessions></Sessions>
            <Tutors></Tutors>
        </div>
    );
};

export default Home;