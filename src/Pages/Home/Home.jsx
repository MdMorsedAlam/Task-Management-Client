import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home | Task Management</title>
      </Helmet>
      <h1 className="text-red-500">this is home</h1>
    </div>
  );
};

export default Home;
