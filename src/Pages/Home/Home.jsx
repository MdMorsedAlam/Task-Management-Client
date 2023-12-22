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
              <Link to="/dashboard" className="btn text-white bg-gradient-to-r from-yellow-500 to-emerald-500 font-semibold hover:bg-gradient-to-l transition-all duration-700 hover:text-2xl text-xl border-none">
                Let’s Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* User Section */}
      <section>
      <h1 className="text-center font-bold mb-10 text-5xl">
        Who Uses Our Application
      </h1>
      <div className="grid grid-cols-3 gap-10">
      
      </div>
      </section>
    </div>
  );
};

export default Home;
