import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const headerFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {headerFooter || <Navbar />}

      <Outlet />
    </div>
  );
};

export default MainLayout;
