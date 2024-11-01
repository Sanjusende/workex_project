import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

const Filter = () => {
  // Sample data for search suggestions
  const jobItems = [
    'Hire Staff',
    'Manage Staff',
    'Career TV',
    'Find Jobs',
    'Pricing',
    'Sign In as a Candidate',
    'User Profile',
    'Job Listings',
  ];

  const locationItems = [
    'New York',
    'India',
    'Bhopal',
    'Nagpur',
    'Andhra Pradesh',
    'West Bengal',
    'Austin',
    'Miami',
  ];

  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [filteredJobItems, setFilteredJobItems] = useState([]);
  const [filteredLocationItems, setFilteredLocationItems] = useState([]);

  const handleJobSearchChange = (event) => {
    const value = event.target.value;
    setJobSearchTerm(value);

    // Filter items based on job search term
    if (value) {
      const filtered = jobItems.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJobItems(filtered);
    } else {
      setFilteredJobItems([]);
    }
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocationTerm(value);
    
    if (value) {
      const filtered = locationItems.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocationItems(filtered);
    } else {
      setFilteredLocationItems([]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault(); 
    console.log('Searching for:', jobSearchTerm, 'in', locationTerm);
    setFilteredJobItems([]); 
    setFilteredLocationItems([]); 
  };

  return (
    <div className="min-h-[80vh] mt-0  flex flex-col bg-[#071424]  items-center justify-center">
      <div className="container mx-auto lg:w-screen px-4 lg:flex justify-between items-start">
        {/* Search Section */}
        <div className="bg-white  rounded-lg shadow-lg p-6 w-full max-w-xl lg:max-w-4xl lg:mt-0 mt-4 lg:mr-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            4,50,000+ Vacancies. Find Better, Find Faster
          </h1>
          <form className="flex flex-col lg:flex-row items-center" onSubmit={handleSearch}>
            {/* Job Search Input */}
            <div className="relative flex-grow mb-4 lg:mb-0 lg:mr-0 w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={jobSearchTerm}
                onChange={handleJobSearchChange}
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md text-base lg:text-lg focus:outline-none focus:border-blue-500"
                placeholder="Search for Jobs..."
                required
              />
              {filteredJobItems.length > 0 && (
                <ul className="absolute z-10 bg-white border mt-12 w-full border-gray-300 rounded-lg shadow-lg">
                  {filteredJobItems.map((item, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        setJobSearchTerm(item);
                        setFilteredJobItems([]);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Location Input */}
            <div className="relative w-full lg:w-auto mb-4 lg:mb-0 ">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={locationTerm}
                onChange={handleLocationChange}
                className="w-full py-3 pl-10 pr-4 border border-gray-300 lg:rounded-e-lg text-base lg:text-lg focus:outline-none focus:border-blue-500"
                placeholder="Location"
                required
              />
              {filteredLocationItems.length > 0 && (
                <ul className="absolute z-10 bg-white border mt-12 w-full border-gray-300 rounded-lg shadow-lg">
                  {filteredLocationItems.map((item, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        setLocationTerm(item);
                        setFilteredLocationItems([]);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full lg:w-auto py-3 px-6 text-lg font-bold text-white bg-blue-600 rounded-md lg:rounded-e-lg hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </form>
          <footer className="mt-8 lg:mt-8">
            <p className="text-gray-500 text-lg">
            Trending Searches: Jobs in Delhi, Jobs in Rohtak, Jobs in <br /> Bangalore, Jobs in Kolkata, Jobs in Mumbai
            </p>
          </footer>
        </div>

        {/* Promotional Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl lg:max-w-sm flex flex-col justify-between mt-4 lg:mt-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Hire the Best Talent
          </h1>
          <p className="text-base lg:text-xl text-gray-600 mt-4">
            Access over 50 Lakh candidates and post your job listings in minutes.
          </p>
          <a
            href="#"
            className="mt-6 py-3 px-8 text-lg lg:text-xl font-semibold text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
          >
            Post a Job Now
          </a>
        </div>
      </div>
     
    </div>


  );
};

export default Filter;
