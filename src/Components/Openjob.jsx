import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import sm from "../assets/sm.png"; // Import the images from the assets folder
import sms from "../assets/sms.png";
import air from "../assets/air.png";

const OpenJob = () => {
  const jobs = [
    {
      title: "Sales Manager",
      company: "Aniric Digital",
      location: "Indore, Madhya Pradesh",
      salary: "8,000 - 10,000",
      category: "Sales & Business Development",
      posted: "2 days ago",
      image: sm, // Reference to imported image
    },
    {
      title: "Sales Manager",
      company: "Akash Associates",
      location: "Gwalior, Madhya Pradesh",
      salary: "25,000 - 45,000",
      category: "Sales & Business Development",
      posted: "6 days ago",
      image: sms, // Reference to imported image
    },
    {
      title: "Customer Support Executive",
      company: "Magnum Group",
      location: "Bhopal, Madhya Pradesh",
      salary: "10,000 - 15,000",
      category: "BPO & Telecaller",
      posted: "16 days ago",
      image: air, // Reference to imported image
    },
    {
      title: "HR Recruiter / HR Executive",
      company: "Addhuri Events Opc Private Limited",
      location: "Bhopal, Madhya Pradesh",
      salary: "15,000 - 25,000",
      category: "HR & Office, Admin",
      posted: "16 days ago",
      image: sm, // Reference to imported image
    },
  ];

  return (
    <div className="p-6">
      {/* Title and Description Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Open Job Positions</h1>
        <p className="text-gray-600 mt-2">
          Explore our latest job openings and find the position that matches your skills. Apply now to take the next step in your career!
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-gray-500 text-sm flex"
          >
            {/* Left-side Image */}
            <img
              src={job.image}
              alt={job.title}
              className="w-20 h-20 object-cover rounded-full mr-4"
            />

            {/* Right-side Job Details */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{job.title}</h2>
              <div className="flex items-center mb-2">
                <FaBuilding className="text-gray-500 mr-2" />
                <p className="text-gray-600">{job.company}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <p className="text-gray-600">{job.location}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaMoneyBillWave className="text-gray-500 mr-2" />
                <p className="text-gray-600">Monthly Salary: {job.salary}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <p className="text-gray-600">Posted: {job.posted}</p>
              </div>
              <button className="text-white px-4 py-2 bg-green-500 font-semibold hover:underline mt-4 flex items-center">
                <FaPhoneAlt className="mr-2" /> Contact HR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenJob;
