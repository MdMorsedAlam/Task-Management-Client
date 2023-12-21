import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>this is main layout</h1>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
