import React from "react";

// Import images from the assets folder
import sales from "../assets/Sales.svg";
import marketing from "../assets/MARKETING_CONTENT.svg";
import itiWorker from "../assets/ITI_WORKER.svg";
import itSoftware from "../assets/IT_Softwere.svg";
import hr from "../assets/HR.svg";
import hospitality from "../assets/Hospitality.svg";
import engineering from "../assets/ENGINEERING.svg";
import education from "../assets/Education.svg";
import downloadImage from "../assets/download.jpg";
import deliveryDriver from "../assets/Delivery_Driver.svg";
import bpo from "../assets/BPO.svg";
import accounts from "../assets/Accounts.svg";

const JobCategories = () => {
  // Categories array to map over, with distinct images and labels
  const categories = [
    { image: sales, label: "Sales & Operations" },
    { image: marketing, label: "Marketing & Content" },
    { image: itiWorker, label: "ITI Worker" },
    { image: itSoftware, label: "IT Software" },
    { image: hr, label: "HR" },
    { image: hospitality, label: "Hospitality" },
    { image: engineering, label: "Engineering" },
    { image: education, label: "Education" },
    { image: downloadImage, label: "Download" },
    { image: deliveryDriver, label: "Delivery Driver" },
    { image: bpo, label: "BPO" },
    { image: accounts, label: "Accounts" },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Job Categories</h2>
        <h1 className="text-3xl font-bold text-center mb-8">Check out the most trending job categories now!</h1>

        {/* Grid for categories */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-20 h-20 object-cover transform transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">{category.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
