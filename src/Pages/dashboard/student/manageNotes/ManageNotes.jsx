import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";


const ManageNotes = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data : notes =[]} = useQuery({
        queryKey:['notes'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/notes/email/${user.email}`)
            return res?.data;
        }
    })

    return (
        <div className="text-center p-10 ">
            <h1 className="text-2xl font-bold py-10 ">Manage Your Notes</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
             notes.map((note, i )=> ( <div
                key={note._id}
                className="bg-green-200 border border-green-500 rounded-xl py-10 px-4"
            >
                <h3 className="text-lg font-medium">{i + 1}.</h3>
                <h1 className="text-xl font-semibold">{note.title}</h1>
                <p className="text-gray-700">{note.description}</p>
            </div>))
            }
           </div>
        </div>
    );
};

export default ManageNotes;