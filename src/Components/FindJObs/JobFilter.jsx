import React, { useState } from 'react';
import HR from '../../assets/HR.svg'
import { IoIosCall } from "react-icons/io";


const App = () => {
  const [filters, setFilters] = useState({
    jobCategory: [],
    jobSpecialization: [],
    experience: [],
    salary: [],
    jobType: [],
    education: [],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const isChecked = prev[category].includes(value);
      if (isChecked) {
        return { ...prev, [category]: prev[category].filter((item) => item !== value) };
      } else {
        return { ...prev, [category]: [...prev[category], value] };
      }
    });
  };

  const applyFilters = () => {
    // Handle filter application logic here
    console.log(filters);
  };

  const clearFilters = () => {
    setFilters({
      jobCategory: [],
      jobSpecialization: [],
      experience: [],
      salary: [],
      jobType: [],
      education: [],
    });
  };
  const jobData = [
    {
      title: 'HR Manager',
      category: 'HR & Office, Admin',
      location: 'New Delhi',
      experience: '3 years - 5 years',
      salary: '50k - 80k',
    },
    {
      title: 'Sales Executive',
      category: 'Sales & Business Development',
      location: 'Mumbai',
      experience: '1 year - 3 years',
      salary: '30k - 50k',
    },
    {
      title: 'Telecaller',
      category: 'BPO & Telecaller',
      location: 'Bangalore',
      experience: 'Fresher',
      salary: '10k - 30k',
    },
    // Add more job data as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
   

      {/* Main Content */}
      <div className="flex flex-grow bg-gray-50">
        {/* Filter Sidebar */}
        <aside className="w-1/4 p-6 bg-white shadow-md">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          {/* Job Category */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Job Category</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobCategory', 'Sales & Business Development')}
                  className="mr-2"
                />
                Sales & Business Development
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobCategory', 'BPO & Telecaller')}
                  className="mr-2"
                />
                BPO & Telecaller
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobCategory', 'HR & Office, Admin')}
                  className="mr-2"
                />
                HR & Office, Admin
              </label>
            </div>
          </div>

          {/* Job Specialization */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Job Specialization</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobSpecialization', 'Retail - Field Sales')}
                  className="mr-2"
                />
                Retail - Field Sales
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobSpecialization', 'Telecalling - Voice Process')}
                  className="mr-2"
                />
                Telecalling - Voice Process
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobSpecialization', 'Sales Manager - Management')}
                  className="mr-2"
                />
                Sales Manager - Management
              </label>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Experience</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('experience', '1 year - 3 years')}
                  className="mr-2"
                />
                1 year - 3 years
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('experience', '3 years - 5 years')}
                  className="mr-2"
                />
                3 years - 5 years
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('experience', '5 years - 7 years')}
                  className="mr-2"
                />
                5 years - 7 years
              </label>
            </div>
          </div>

          {/* Salary */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Salary</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('salary', '10k - 30k')}
                  className="mr-2"
                />
                10k - 30k
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('salary', '30k - 50k')}
                  className="mr-2"
                />
                30k - 50k
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('salary', '50k - 80k')}
                  className="mr-2"
                />
                50k - 80k
              </label>
            </div>
          </div>

          {/* Job Type */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Job Type</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobType', 'Full Time')}
                  className="mr-2"
                />
                Full Time
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobType', 'Part Time')}
                  className="mr-2"
                />
                Part Time
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('jobType', 'Internship')}
                  className="mr-2"
                />
                Internship
              </label>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Education</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('education', 'Graduate')}
                  className="mr-2"
                />
                Graduate
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('education', '10+2 Pass')}
                  className="mr-2"
                />
                10+2 Pass
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange('education', '10th Pass')}
                  className="mr-2"
                />
                10th Pass
              </label>
            </div>
          </div>

          <button
            onClick={applyFilters}
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition"
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className="bg-gray-300 py-2 px-4 rounded w-full mt-2 hover:bg-gray-400 transition"
          >
            Clear Filters
          </button>
        </aside>

         {/* Job Listings Section */}
         <main className="w-1/2 p-6">
          <h2 className="font-bold text-lg mb-4">Job Listings</h2>

          {/* Dynamically render job cards using map */}
          {jobData.map((job, index) => (
            <div key={index} className="bg-white flex shadow-xl shadow-gray-400 flex-col justify-center items-center gap-2  rounded-lg py-3 mb-4 transform transition hover:scale-105">
              <img src={HR} alt="HR" className="w-18 h-18 mb-4" />
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className="text-gray-700 text-xl mt-2">Category: {job.category}</p>
              <p className="text-gray-700 text-xl">Location: {job.location}</p>
              <p className="text-gray-700 text-xl">Experience: {job.experience}</p>
              <p className="text-gray-700 text-xl">Salary: {job.salary}</p>
              <button className="bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition">
                <div className="flex items-center gap-2">
                  Contact HR <IoIosCall />
                </div>
              </button>
            </div>
          ))}
        </main>
         {/* Job Alert Section */}
         <aside className="w-1/4 p-6 bg-white shadow-md">
          <h2 className="font-bold text-lg mb-4">Create Job Alert</h2>
          <p className="text-gray-600 mb-4">Email me new jobs in India</p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email ID</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <button className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-blue-700 transition">
            Create Alert
          </button>
          <p className="text-gray-500 text-sm mt-4">
            By submitting this form you agree to our <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
          </p>
        </aside>
      </div>

   
    </div>
  );
};

export default App;
