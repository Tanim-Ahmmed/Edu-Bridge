import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs"; 
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";


const Login = () => {

    const { handleGoogleLogin, userLogin, setUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state || '/';
    
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then(res => {
            const user = res.user;
            setUser(user);
            navigate(from);
            toast.success("Welcome ! Your Login successfull ", {
                position: "top-center",
                autoClose: 3000,
              });
        })
        .catch(error =>{
            toast.error('login failed! please try again. ', {
                position: "top-center",
                autoClose: 3000,
              });
              setErr(error.code)
        })
    }

    const handleLoginWithGoogle = () =>{
        handleGoogleLogin()
      .then((res) =>{
        const user = res.user;
        setUser(user);
        navigate(from)

        toast.success("Welcome ! SignIn with Google successfull ", {
          position: "top-center",
          autoClose: 3000,
        });

      })
      .catch(error => {
        setErr(error.code)
      })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="hero min-h-screen">
          <div className="card bg-base-200 w-full max-w-lg shrink-0 rounded-none p-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold ">Login your account</h1>
            </div>
            <form onSubmit={handleLogin} className="sm:card-body">
              <div className="form-control ">
                <label className="label ">
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
  
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                  <div>
                    {err && <p className="text-red-500 text-center">{err}</p>}
                  </div>
                </label>
              </div>
              <div className="form-control my-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
            </form>
  
            <p className="text-center font-semibold pb-6">
              Don't Have an Account?
              <Link to="/register" className="text-red-500 ml-3 font-bold">
                Register
              </Link>
            </p>
  
            <div
              onClick={handleLoginWithGoogle}
              className="flex justify-center items-center gap-4 border rounded-none py-3 font-bold w-full sm:w-10/12 mx-auto hover:text-white hover:bg-neutral hover:cursor-pointer"
            >
              <FcGoogle />
              <button>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;