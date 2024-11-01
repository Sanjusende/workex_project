import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className=" lg:pl-28 flex flex-col md:flex-row max-w-screen bg-[#071424]  mx-auto p-8  rounded-lg">
      {/* Left Content */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">
          The Best Platform to Hire the Right Candidates
        </h2>

        <ul className="space-y-4 text-2xl text-gray-100">
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Post a Job for free and find staff for your business at the lowest cost.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Connect with 5 top-ranked candidates instantly for FREE!
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Connect with over 4M+ qualified candidates on Workex.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Get guaranteed responses from our top-ranked candidates in just 24 hours.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Connect, Shortlist, Hire, or Reject Candidates easily through our all-in-one ATS for free.
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 lg:ml-40  shadow-lg shadow-slate-100  rounded-lg lg:w-96 bg-white py-4 px-10">
        <p className="text-4xl font-bold text-gray-600">
          Your next hire is right here. Get started:
        </p>
        <p className="mt-4 text-xl text-gray-500">
          Whether you want to hire one person or an entire team, we match you to the best skilled professionals across.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            placeholder="Your Email Id"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <button className="w-full bg-pink-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold">
            Post Job Now - It’s Free
          </button>
        </div>

     
      </div>
    </div>
  );
};

export default Hero;
