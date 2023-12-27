import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gray-800 text-gray-400">
      <div className="container flex flex-col md:flex-row gap-6 items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
      
        
            <Link to="/"><h1 className="text-4xl font-semibold">Task Management</h1></Link>
       
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link><BsFacebook className="text-2xl hover:animate-bounce transition duration-1000"/></Link>
          </li>
          <li>
          <Link><BsGithub className="text-2xl hover:animate-bounce transition duration-1000"/></Link>
          </li>
          <li>
          <Link><BsLinkedin className="text-2xl hover:animate-bounce transition duration-1000"/></Link>
          </li>
        </ul>
      </div>
      <p className="text-center italic mt-10">Copyright © 2023 - All right reserved by Task Management LTD</p>
    </footer>
  );
};

export default Footer;
