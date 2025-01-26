import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSession = () => {
    const axiosPublic = useAxiosPublic();
    const {data : session =[], refetch } = useQuery({
        queryKey:['session'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/sessions')
            return res.data;
        }
    })

    return [session, refetch]
};

export default useSession;