import React from "react";
import swiggy from "../assets/swiggy.png"; 
import ola from "../assets/ola.png";
import nobroker from "../assets/nobroker.png";
import homelane from "../assets/homelane.png";
import bharatpe from "../assets/bharatpe.png";
import zomato from "../assets/zomato.png";

const HiringPartners = () => {
  const partners = [
    {
      imageUrl: swiggy, 
    },
    {
      imageUrl: ola, 
    },
    {
      imageUrl: nobroker, 
    },
    {
      imageUrl: homelane, 
    },
    
    {
      imageUrl: bharatpe, 
    },
    
    {
      imageUrl: zomato, 
    },
  ]

  return (
    <div className="p-8 mt-9 bg-gray-100">
      <header className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Our Staff Hiring & Management Partners
        </h1>
        <p className="text-gray-600 mt-2">
          Taking Workex to the next level, one hire at a time.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white px-6 rounded-lg shadow-md text-center transition duration-300 transform hover:shadow-lg hover:scale-105"
          >
            <img
              src={partner.imageUrl}
              alt={partner.title}
              className="w-full h-40 object-contain rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{partner.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringPartners;
