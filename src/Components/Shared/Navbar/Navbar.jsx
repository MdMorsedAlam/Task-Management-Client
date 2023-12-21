import { Link, NavLink } from "react-router-dom";
import { BsJustify, BsX } from "react-icons/bs";
import { useState } from "react";
import useAuth from "../../../Hooks/UseAuth/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  const { user, logOut } = useAuth();
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

  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success("LogOut successfully!", {
          duration: 3000, // Duration in milliseconds
          position: "top-right", // Toast position on the screen
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
      })
      .catch(() => {
        
      });
  };
  return (
    <header className="px-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <div className="flex gap-20">
          <Link to="/"
            className="flex items-center bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent uppercase font-bold text-4xl p-2"
          >
            Task Management
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">{nav}</ul>
        </div>
        {user ? (
          <div className="dropdown hidden lg:block dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user.photoURL} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-0 ml-0 z-[1] p-2 bg-[#1f2937] rounded-box w-52"
            >
              <li>
                <Link>Dashboard</Link>
              </li>
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                <button onClick={handelLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              to="/login"
              className="px-8 py-3 font-semibold rounded bg-gradient-to-r from-yellow-400 hover:text-white transition-all duration-1000 to-emerald-500 text-black hover:bg-gradient-to-l"
            >
              Log in
            </Link>
          </div>
        )}

        <button
          onClick={() => setShowToggle(!showToggle)}
          className="text-3xl lg:hidden transition-all duration-1000"
        >
          
          {showToggle?<BsX />:<BsJustify />}
        </button>
        <div
          className={`items-stretch lg:hidden ${
            showToggle ? "flex" : "hidden"
          } flex-col rounded-l-lg w-40 transition-all duration-1000 absolute right-0 top-16 bg-[#1f2937] p-3`}
        >
          <ul className="flex flex-col items-center gap-3">{nav}</ul>
          <hr className="my-3" />
          {user ? (
            <ul className="flex flex-col items-center gap-3">
              <li>
                <Link>Dashboard</Link>
              </li>
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                <button onClick={handelLogout}>Logout</button>
              </li>
            </ul>
          ) : (
            <Link className="text-center" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
