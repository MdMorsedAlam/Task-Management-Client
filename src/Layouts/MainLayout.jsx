import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const headerFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {headerFooter || <Navbar />}

      <Outlet />
      {headerFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
