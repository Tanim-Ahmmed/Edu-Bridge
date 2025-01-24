import Banner from "../../component/Banner";
import Sessions from "../../component/Sessions";

const Home = () => {
    return (
        <div className="min-h-screen mt-16">
            <Banner></Banner>
            <Sessions></Sessions>
        </div>
    );
};

export default Home;