import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="theme-page min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;
