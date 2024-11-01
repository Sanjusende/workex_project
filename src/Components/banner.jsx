import React from "react";
                 
import candidate_banner_image from "../assets/candidate_banner_image.webp"

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            The search for your next hire ends here!
          </h1>
          <p className="text-xl text-gray-500 mb-6">
            Choose from top-ranked talents for your business & connect in seconds!
          </p>
          <button className="bg-blue-500 text-xl text-white font-bold py-5 px-20 rounded shadow hover:bg-blue-600 transition duration-300">
            Try Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={candidate_banner_image} // Replace with actual image URL
            alt="Workex hiring"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
