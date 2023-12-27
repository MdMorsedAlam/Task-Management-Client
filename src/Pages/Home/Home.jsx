import { Helmet } from "react-helmet-async";
import bg from "../../assets/usebgfortask.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Task Management</title>
      </Helmet>
      {/* Banner Section */}
      <section>
        <div
          className="hero h-[calc(100vh-64px)]"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <Link
                to="/dashboard"
                className="btn text-white bg-gradient-to-r from-yellow-500 to-emerald-500 font-semibold hover:bg-gradient-to-l transition-all duration-700 hover:text-2xl text-xl border-none"
              >
                Let’s Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* User Section */}

      <section className="p-6">
        <div className="container p-4 mx-auto text-center">
          <h1 className="text-center bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent font-bold mb-10 text-5xl">
            Our Users
          </h1>

          <div className="container flex flex-wrap justify-center mx-auto ">
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">Developers</h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">Healthcares</h1>
            </div>

            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">Bankers</h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">Corporates</h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">
                UI/UX Designers
              </h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">
                Project Managers
              </h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">
                Educators and Students
              </h1>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <h1 className=" text-3xl font-semibold">
                E-commerce Developers
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
