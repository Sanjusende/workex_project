import React from 'react';
import nine from './assets/nine.png';

const Hirebox = () => {
  return (
    <section className="flex flex-col md:flex-row lg:px-28  py-16">
      <div className="container mx-auto text-center md:text-left md:w-auto">
        <h2 className="text-4xl font-bold text-gray-600 mb-4">
          Welcome to the Future of Attendance & Payroll Management
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience how we transform Staff Attendance & Payroll for business with a touch of a button.
        </p>
        <a 
          href="#get-started" 
          className="inline-block bg-blue-600 text-lg text-white py-5 px-20 rounded  shadow-lg hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img src={nine} alt="Attendance and Payroll Management" className="max-w-96 h-auto" />
      </div>
    </section>
  );
};

export default Hirebox;
