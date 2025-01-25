import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, handleGoogleLogin, updateUser, setUser } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [role, setRole] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const role = form.role.value;
    const user = { name, email, photo, role, password, confirm };

    console.log(user);

    if (password.length < 6) {
      setErr("Passward must contain atleast 6 character.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr("Passward must contain atleast one lowercase latter. ");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr("Passward must contain atleast one uppercase latter. ");
      return;
    }
    if (password !== confirm) {
      setErr("Passward didn't match");
      return;
    }

    if (!role) {
      setErr("please select a valid role.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUser({ displayName: name, photoURL: photo })
          .then((res) => {
            const userInfo = {
              name: name,
              email: user.email,
              photo: photo,
              role: role,
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              if(res.data.insertedId){
                navigate("/");
                toast.success("Welcome ! Your Sign up successfull ", {
                  position: "top-center",
                  autoClose: 3000,
                });
              }
            })
          })
          .catch((error) => {
            setErr(error.code);
          });
      })
      .catch((error) => {
        setErr(error.code);
      });
  };

  const handleLoginWithGoogle = () => {
    handleGoogleLogin().then((res) => {
      const user = res.user;
      setUser(user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        photo: res.user?.photoURL,
        role: "Student",
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        navigate("/");
        toast.success("Welcome ! SignIn with Google successfull ", {
          position: "top-center",
          autoClose: 3000,
        });
      })
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-16">
      <div className="hero min-h-screen">
        <div className="card bg-base-200 shadow w-full max-w-lg shrink-0 rounded-none p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Register your account</h1>
          </div>
          <form onSubmit={handleRegister} className="sm:card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn rounded-none  btn-xs bg-base-200 absolute right-3 top-12"
              >
                {showPass ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </button>
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered rounded-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn rounded-none  btn-xs bg-base-200 absolute right-3 top-12"
              >
                {showPass ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </button>
            </div>
            <div>
                <h2 className="ml-1 my-2 text-sm">Role </h2>
            <select
              name="role"
              className="select select-bordered rounded-none w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
            </select>

                </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          {err && <p className="text-red-500 text-center">{err}</p>}

          <p className="text-center font-semibold py-3">
            Allready Have an Account?
            <Link to="/login" className="text-red-500 ml-3 font-bold">
              Login
            </Link>
          </p>
          <div
            onClick={handleLoginWithGoogle}
            className="flex justify-center items-center gap-4 border rounded-none py-3 font-bold w-full sm:w-10/12 mx-auto hover:text-white hover:bg-neutral hover:cursor-pointer"
          >
            <FcGoogle />
            <button> Sign in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
