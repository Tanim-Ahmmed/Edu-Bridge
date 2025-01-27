import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
            <h1 className="text-red-500 font-bold text-3xl">Error <br /> 404 </h1>
            <Link to="/" className="btn mt-6">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;