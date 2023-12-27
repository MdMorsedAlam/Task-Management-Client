import { BiSolidEditLocation } from "react-icons/bi";
import { BsEnvelope, BsPhone } from "react-icons/bs";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Let's Connect</h1>
          <p className="pt-2 pb-4">Connect To Grow Your Easy Life</p>
          <div className="space-y-4">
            <p className="flex gap-3 items-center">
             <BsPhone className="text-2xl"/>
              <span>+880 1632060868</span>
            </p>
            <p className="flex gap-3 items-center">
              <BsEnvelope className="text-2xl"/>
              <span>mdmorsedalam324@gmail.com</span>
            </p>
            <p className="flex gap-3 items-center">
             <BiSolidEditLocation className="text-2xl"/>
              <span>Gazipur,Dhaka,Bangladesh</span>
            </p>
          </div>
        </div>
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full Name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-xl p-2 bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email</span>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="block w-full rounded-md shadow-xl p-2  bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md shadow-xl p-2 bg-gray-800"
              placeholder="White Your Message"
            ></textarea>
          </label>
          <button
              type="submit"
              className="btn text-white bg-gradient-to-r from-yellow-500 to-emerald-500 font-semibold hover:bg-gradient-to-l transition-all duration-700 hover:text-2xl text-xl border-none"
            >
              Send
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
