import { Link, NavLink } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
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
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <header className="px-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <div className="flex">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            Logo
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">{nav}</ul>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
              className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
            >
              Log in
            </Link>
          </div>
        )}

        <button
          onClick={() => setShowToggle(!showToggle)}
          className="text-2xl lg:hidden"
        >
          <BsJustify />
        </button>
        <div
          className={`items-stretch ${
            showToggle ? "flex" : "hidden"
          } flex-col rounded-lg absolute right-0 top-16 bg-slate-400 p-3`}
        >
          <ul className="flex flex-col gap-3">{nav}</ul>
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
