import React from "react";
import fold_1 from '../../assets/fold_1.png'

const CareerTV = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-6xl bg-gray-100 rounded  shadow-xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Transform your Skill-set with Career TV!
            </h1>
            <p className="text-xl mb-6">
              Access the expertise of our network and learn from over 10,000 topics to become industry-ready!
            </p>
            <button className="bg-blue-500 text-xl text-white font-bold py-5 px-20 rounded shadow hover:bg-blue-600 transition duration-300">
              Sign in
            </button>
          </div>

          {/* Optional Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={fold_1}
              alt="Career TV"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CareerTV;
