import React from "react";
import mumbai from "../assets/Mumbai.png";
import delhi from "../assets/Delhi.png";
import kolkata from "../assets/Kolkata.png";
import chennai from "../assets/chennai.png";
import bangalore from "../assets/Bangalore.png";
import hyderabad from "../assets/Hyderabad.png";
import jaipur from "../assets/Jaipur.png";
import ahmedabad from "../assets/ahmedabad.png";

const PopularCities = () => {
  const cities = [
    { name: "Mumbai", image: mumbai },
    { name: "Delhi", image: delhi },
    { name: "Kolkata", image: kolkata },
    { name: "Chennai", image: chennai },
    { name: "Bangalore", image: bangalore },
    { name: "Hyderabad", image: hyderabad },
    { name: "Jaipur", image: jaipur },
    { name: "Ahmedabad", image: ahmedabad },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Jobs in Popular Cities
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Find Jobs in major Cities of India. Select your preferred location to
        find your dream job.
      </p>
      
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-8">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-blue-100 transition duration-300"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-32 object-cover mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-gray-500 text-sm flex"
            />
            <h3 className="text-lg font-semibold mb-2">{city.name}</h3>
            <p className="text-gray-500">{city.name}</p> {/* Duplicate city name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
