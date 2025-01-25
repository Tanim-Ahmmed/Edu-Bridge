import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Pages/shared/Loading";
import useTutor from "../hooks/useTutor";


const TutorRoute = ({children}) => {
    const {user, loading } = useAuth();
    const [isTutor, isTutorLoading]= useTutor();
    if(loading || isTutorLoading){
        return <Loading></Loading>
    }
    if(user && isTutor){
        return children;
    }
    return  <Navigate to="/login" state={location?.pathname}> </Navigate>
};

export default TutorRoute;