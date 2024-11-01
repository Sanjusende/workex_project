import React from "react";
                 
import downoload1 from "../assets/download1.jpg"

const Blackbox2 = () => {
  return (
    <div className="max-w-full lg:w-fit px-5  mt-10">
      <div className="grid grid-cols-1 py-3  text-white bg-black md:grid-cols-2 items-center gap-8">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
          <img
            src={downoload1} // Replace with actual image URL
            alt="Workex hiring"
            className="w-full lg:h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold  mb-4">
          Hire & Manage Staff comfortably across languages!
          </h1>
          <p className="text-xl text-gray-200 mb-6">
          Give your managers and employees the convenience of simplified hiring, automatic
          payroll calculation, track of attendance, leaves and overtime.
          </p>
          <button className="bg-pink-500 text-xl text-white font-bold py-5 px-20 rounded shadow hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

      
      </div>
    </div>
  );
};

export default Blackbox2;
