import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSession = () => {
    const axiosPublic = useAxiosPublic();
    const {data : sessions =[], refetch } = useQuery({
        queryKey:['sessions'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/sessions')
            return res.data;
        }
    })

    return [sessions, refetch]
};

export default useSession;