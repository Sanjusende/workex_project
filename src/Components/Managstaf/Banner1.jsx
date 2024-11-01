import React from "react";
import Artboard_new from "../../assets/Artboard_new.png"; 
import { ImPointRight  } from "react-icons/im";
const Banner1 = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Comprehensive Staff Management under a single roof!
          </h1>
       
          <p className="text-xl text-gray-500  gap-3 flex items-center mb-2">
         <ImPointRight className="text-blue-600" />
 Face & Location Verified Attendance          </p>
          <p className="text-xl text-gray-500  gap-3 flex items-center mb-2">
         <ImPointRight className="text-blue-600" />
 Shift & Leave Management          </p>
          <p className="text-xl text-gray-500  gap-3 flex items-center mb-2">
         <ImPointRight className="text-blue-600" />
 Automatic Salary Breakup Generation          </p>
          <p className="text-xl text-gray-500  gap-3 flex items-center mb-2">
         <ImPointRight className="text-blue-600" />
 Complaint Payr gap-3oll Calculation
          </p>
          <p className="text-xl text-gray-500 gap-3  flex items-center mb-2">
         <ImPointRight className="text-blue-600" />
 Salary Transfer & Instant Payslips
          </p>
          <button className="bg-blue-500 text-xl text-white font-bold py-5 px-20 rounded shadow hover:bg-blue-600 transition duration-300">
            Sign-UP Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Artboard_new} // Replace with actual image URL
            alt="Workex hiring"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
