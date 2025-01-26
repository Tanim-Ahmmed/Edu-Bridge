import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users" );
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
   axiosSecure.patch(`/users/admin/${user._id}`)
   .then(res =>{
    if(res.data.modifiedCount > 0 ){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
   })     

  };
  return (
    <div className="text-center mt-6">
      <div>
      <h1 className="text-3xl font-semibold text-center py-6 pt-10">All Users</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                 { user.role === 'admin' ? 'Admin'  : <button 
                      onClick={() => handleMakeAdmin(user)}
                      className="text-lg text-green-400 pr-6">
                        <FaRegEdit />
                      </button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
