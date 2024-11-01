import React from "react";
import download from "../assets/download.jpg"

const Manage = () => {
  return (
    <div className="lg:min-h-96 py-6 lg:ml-32 lg:-mt-32 lg:max-w-screen-xl lg:rounded-lg flex justify-center items-center sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl lg:rounded-lg bg-white px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-12">
          {/* Image on the left */}
          <div className="md:w-1/2 lg:w-1/3">
            <img src={download} alt="Staff Management" className="w-full lg:w-auto h-auto" />
          </div>

          {/* Text on the right */}
          <div className="mt-6 text-center md:w-1/2 md:mt-0 md:text-left md:px-8 lg:w-2/3">
            <h1 className="text-3xl font-bold text-black mb-4">
              Manage & Pay your Staff with ease & confidence!
            </h1>
            <p className="text-gray-800 mb-6">
              Empower your business with End-to-End Workforce Management
            </p>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
              Get Started Now!
            </button>
          </div>
        </div>

        {/* Feature Boxes Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 shadow-gray-500">
          {/* Box 1 */}
          <div className="bg-white p-6 shadow-lg shadow-gray-500 rounded-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Hire from 50 Lakh+ candidates!
            </h2>
            <p className="text-gray-600 mb-4">
              Access a large pool of qualified candidates ready to work for your business.
            </p>
            <button className="text-blue-500 font-semibold hover:underline flex items-center">
              POST A JOB
              <span className="ml-2">➡️</span>
            </button>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-gray-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Simplified Payroll Management
            </h2>
            <p className="text-gray-600 mb-4">
              Automate payroll processes and ensure timely payments with ease.
            </p>
            <button className="text-blue-500 font-semibold hover:underline flex items-center">
              POST A JOB
              <span className="ml-2">➡️</span>
            </button>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-gray-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Real-time Attendance Tracking
            </h2>
            <p className="text-gray-600 mb-4">
              Monitor staff attendance in real-time to ensure productivity and efficiency.
            </p>
            <button className="text-blue-500 font-semibold hover:underline flex items-center">
              POST A JOB
              <span className="ml-2">➡️</span>
            </button>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-gray-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Manage Leaves & Benefits
            </h2>
            <p className="text-gray-600 mb-4">
              Easily manage employee leaves, benefits, and other perks with our tool.
            </p>
            <button className="text-blue-500 font-semibold hover:underline flex items-center">
              POST A JOB
              <span className="ml-2">➡️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
