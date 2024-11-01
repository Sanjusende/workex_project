import React from "react";
                 
import manage_staff_better_new from "../../assets/manage_staff_better_new.png"

const Banner = () => {
  return (
    <div className="max-w-6xl h-auto bg-gray-700 text-white rounded-md mx-auto px-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold  mb-4">
          Ready to Manage your Staff better?
          </h1>
          <p className="text-xl  mb-6">
          Get Free Attendance Tracking System & Payroll Management FREE for 1st 3 months!
          </p>
          <button className="bg-blue-500 text-xl text-white font-bold py-5 px-20 rounded shadow hover:bg-blue-600 transition duration-300">
            Sign-up Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={manage_staff_better_new} // Replace with actual image URL
            alt="Workex hiring"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
