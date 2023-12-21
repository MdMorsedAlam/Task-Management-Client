import {
  BsEyeFill,
  BsEyeSlashFill,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import profile from "../../assets/user.png";

const Register = () => {
  const { googleLogin, createUser, updateUser, logOut } = useAuth();
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
      .catch((err) => {
        console.log(err.message);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        if (res.user) {
          updateUser(data.name, profile)
            .then(() => {
              toast.success("You Have successfully Created A New Account!", {
                duration: 3000, // Duration in milliseconds
                position: "top-right", // Toast position on the screen
                style: {
                  backgroundColor: "green",
                  color: "white",
                },
              });
              logOut()
                .then(() => {
                  navigate("/login");
                })
                .catch();
            })
            .catch();
        }
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
        <title>Register | Task Management</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block font-semibold text-gray-400">Full Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          {errors.name && <p className="text-red-500">Name Is Required</p>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block font-semibold text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="w-full px-4 text-black py-3 rounded-md"
          />
          {errors.email && <p className="text-red-500">Email Is Required</p>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block font-semibold text-gray-400">Photo</label>
          <input
            type="file"
            name="photo"
            {...register("photo", { required: true })}
            className="file-input text-black file-input-bordered w-full"
          />
          {errors.photo && <p className="text-red-500">Photo Required</p>}
        </div>
        <div className="space-y-1 relative text-sm">
          <label className="block font-semibold text-gray-400">Password</label>
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          {showPassword ? (
            <BsEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-2xl text-black right-2 top-8"
            />
          ) : (
            <BsEyeSlashFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-2xl text-black right-2 top-8"
            />
          )}
          {errors.password && (
            <p className="text-red-500">Password Is Not Match</p>
          )}
        </div>
        <button className="block w-full p-3 text-center rounded-sm bg-gradient-to-r from-yellow-400 hover:text-white transition-all duration-1000 to-emerald-500 text-black font-semibold hover:bg-gradient-to-l text-xl ">
          Register
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-lg text-gray-400">Login With Social Accounts</p>
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
        <button onClick={handelFacebookLogin} aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <BsFacebook className="text-2xl hover:animate-ping transition-all duration-500" />
        </button>
        <button onClick={handelGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <BsGithub className="text-2xl hover:animate-ping transition-all duration-500" />
        </button>
      </div>
      <p className="text-md text-center sm:px-6 text-gray-400">
        You Have An Account ?
        <Link className="italic text-sky-500" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
