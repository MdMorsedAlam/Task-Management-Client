import { motion } from "framer-motion";
import { useState } from "react";
import { BsJustify } from "react-icons/bs";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth/useAuth";
import toast from "react-hot-toast";

const DashboardLayout = () => {
 const {logOut}=useAuth();
 const navigate=useNavigate()
  const variants = {
    open: { opacity: 1, x:0 },
    closed: { opacity: 0, x: "-10%" },
  };
  const [isOpen, setIsOpen] = useState(false);
  const nav=<>
  <li><NavLink to="/dashboard">Home</NavLink></li>
  <li><NavLink to="profile">Profile</NavLink></li>
  <li><NavLink to="addtask">Add Task</NavLink></li>
  <li><NavLink to="managetask">Manage Task</NavLink></li>
  </>
  const handelLogout=()=>{
   logOut()
   .then(()=>{
    toast.success("Logout Success", {
     duration: 3000, // Duration in milliseconds
     position: "top-right", // Toast position on the screen
     style: {
       backgroundColor: "blue",
       color: "white",
     },
   });
   navigate("/");
   })
  }
  return (
  <>
  <div className="grid grid-cols-4 gap-4">
  <div className="col-span-1 h-[100vh] bg-gray-600 p-10">
  <BsJustify
        className="text-5xl w-20 mx-auto text-white mb-6 cursor-pointer"
        onClick={()=>{setIsOpen(!isOpen)}}
      />
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}> 
      <div className="text-center text-white">
      <ul className="flex flex-col gap-3">
     {nav}
     </ul>
     <hr className="my-3" />
     <div className="flex flex-col items-center gap-3">
     <Link to="/">Website</Link>
     <button onClick={handelLogout}>Log Out</button>
     </div>
      </div>
    </motion.nav>
  </div>
  <div className="col-span-3">
   <Outlet/>
  </div>
  </div>
  </>
  );
};

export default DashboardLayout;
