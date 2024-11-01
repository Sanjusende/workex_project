import React from 'react'


const Blacbox = () => {
  return (
    <div className="max-w-7xl text-white mx-auto bg-gray-600 rounded p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Looking to Hire Section */}
        <div className=" text-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Looking to Hire?</h1>
          <p className="text-lg mb-6">
            Hire from over 50 Lakh talents across India and supercharge your productivity.
          </p>
          <button className="bg-white text-blue-700 font-semibold py-4 px-16  rounded shadow hover:bg-gray-100 transition duration-300">
            Post a Job Now
          </button>
        </div>

        {/* Effortless Staff Management Section */}
        <div className=" p-8 border-l-2 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            Effortless Staff Management
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            Get Verified Attendance, Automated Payroll & Error-Free Compliance for your business!
          </p>
          <button className="bg-gray-100 text-blue-500 font-semibold py-4 px-16 rounded shadow hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blacbox;
