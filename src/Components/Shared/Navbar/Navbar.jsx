import { Link, NavLink } from "react-router-dom";
import { BsJustify, BsX } from "react-icons/bs";
import { useState } from "react";
// import useAuth from "../../../Hooks/UseAuth/useAuth";
// import toast from "react-hot-toast";
const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  // const { user, logOut } = useAuth();
  const nav = (
    <>
      <li className="flex">
        <NavLink
          to="/"
          className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
          About
        </NavLink>
      </li>
      <li className="flex">
        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
          Contact
        </NavLink>
      </li>
      <li className="flex">
        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
          Blogs
        </NavLink>
      </li>
    </>
  );

  // const handelLogout = () => {
  //   logOut()
  //     .then(() => {
  //       toast.success("LogOut successfully!", {
  //         duration: 3000, // Duration in milliseconds
  //         position: "top-right", // Toast position on the screen
  //         style: {
  //           backgroundColor: "green",
  //           color: "white",
  //         },
  //       });
  //     })
  //     .catch(() => {});
  // };
  return (
    <header className="px-4 flex justify-between items-center bg-gray-800 text-gray-100">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <Link
          to="/"
          className="flex items-center bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent uppercase font-bold text-4xl p-2"
        >
          Task Management
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">{nav}</ul>
        
      </div>
      <div>
        <button
        onClick={() => setShowToggle(!showToggle)}
        className="text-3xl lg:hidden transition-all duration-1000"
      >
        {showToggle ? <BsX /> : <BsJustify />}
      </button>
      <div
        className={`items-stretch lg:hidden ${
          showToggle ? "flex" : "hidden"
        } flex-col rounded-l-lg w-40 transition-all duration-1000 absolute right-0 top-16 bg-[#1f2937] p-3`}
      >
        <ul className="flex flex-col items-center gap-3">{nav}</ul>
       
      </div>
        </div>
    </header>
  );
};

export default Navbar;
