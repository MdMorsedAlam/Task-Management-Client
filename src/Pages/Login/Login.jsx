/* eslint-disable react/no-unescaped-entities */
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth/useAuth";
import {
  BsEyeFill,
  BsEyeSlashFill,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { googleLogin, userLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handelGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login successfully!", {
          duration: 3000, // Duration in milliseconds
          position: "top-right", // Toast position on the screen
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        navigate("/");
      })
      .catch();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then(() => {
        toast.success("Login Success", {
          duration: 3000, // Duration in milliseconds
          position: "top-right", // Toast position on the screen
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        navigate("/");
      })
      .catch();
  };

  const handelFacebookLogin = () => {
    toast.error("I Am Working On It", {
      duration: 3000, // Duration in milliseconds
      position: "top-right", // Toast position on the screen
      style: {
        backgroundColor: "red",
        color: "white",
      },
    });
  };
  const handelGithubLogin = () => {
    toast.error("I Am Working On It", {
      duration: 3000, // Duration in milliseconds
      position: "top-right", // Toast position on the screen
      style: {
        backgroundColor: "red",
        color: "white",
      },
    });
  };


  

  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
      <Helmet>
        <title>Login | Task Management</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block font-semibold text-lg text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="w-full px-4 text-lg py-3 rounded-md text-black"
          />
          {errors.email && <p className="text-red-500">Email Is Not Valid</p>}
        </div>
        <div className="space-y-1 relative text-sm">
          <label className="block text-lg font-semibold text-gray-400">Password</label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full px-4 text-lg py-3 rounded-md text-black"
          />
          {showPassword ? (
            <BsEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-2xl text-black right-2 top-10"
            />
          ) : (
            <BsEyeSlashFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-black text-2xl right-2 top-10"
            />
          )}
          {errors.password && (
            <p className="text-red-500">Password Is Not Match</p>
          )}
          <div className="flex justify-end text-xs text-gray-400">
            <Link to="#" className="text-sm">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-gradient-to-r from-yellow-400 hover:text-white transition-all duration-1000 to-emerald-500 text-black font-semibold hover:bg-gradient-to-l text-xl ">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-lg text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelGoogleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <BsGoogle className="text-2xl hover:animate-ping transition-all duration-500" />
        </button>
        <button
          onClick={handelFacebookLogin}
          aria-label="Log in with Twitter"
          className="p-3 rounded-sm"
        >
          <BsFacebook className="text-2xl hover:animate-ping transition-all duration-500" />
        </button>
        <button onClick={handelGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <BsGithub className="text-2xl hover:animate-ping transition-all duration-500" />
        </button>
      </div>
      <p className="text-md text-center sm:px-6 text-gray-400">
        Create A New account ?
        <Link className="italic text-sky-500" to="/register">
          {" "}
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
