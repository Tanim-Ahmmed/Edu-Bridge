import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../Pages/shared/Loading";


const AdminRoute = ({children}) => {
    const {user, loading } = useAuth();
    const [isAdmin, isAdminLoading]= useAdmin();
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children;
    }
    return  <Navigate to="/login" state={location?.pathname}> </Navigate>
};

export default AdminRoute;