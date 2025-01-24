import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSession = () => {
    const axiosSecure = useAxiosSecure();
    const {data : session =[]} = useQuery({
        queryKey:['session'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/sessions')
            return res.data;
        }
    })

    return [session]
};

export default useSession;