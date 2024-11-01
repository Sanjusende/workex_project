import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">
        {/* Job Seeker Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Job Seeker</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Search Job</a></li>
            <li><a href="#" className="hover:text-white">Career Advice</a></li>
            <li><a href="#" className="hover:text-white">Jobs for Freshers</a></li>
            <li><a href="#" className="hover:text-white">Jobs for Experienced</a></li>
            <li><a href="#" className="hover:text-white">Job by Location</a></li>
          </ul>
        </div>

        {/* Jobs by Location Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Jobs by Location</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Jobs in Bangalore</a></li>
            <li><a href="#" className="hover:text-white">Jobs in Mumbai</a></li>
            <li><a href="#" className="hover:text-white">Jobs in Delhi</a></li>
            <li><a href="#" className="hover:text-white">Jobs in Kolkata</a></li>
            <li><a href="#" className="hover:text-white">Jobs in Chennai</a></li>
          </ul>
        </div>

        {/* Jobs by Category Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Jobs by Category</h3>
          <ul>
            <li><a href="#" className="hover:text-white">BPO Jobs</a></li>
            <li><a href="#" className="hover:text-white">Sales Jobs</a></li>
            <li><a href="#" className="hover:text-white">HR & Admin Jobs</a></li>
            <li><a href="#" className="hover:text-white">Healthcare Jobs</a></li>
            <li><a href="#" className="hover:text-white">IT and Software</a></li>
          </ul>
        </div>

        {/* Jobs by Skills Section */}
        <div>
          <h3 className="text-white  text-xl font-bold mb-4">Jobs by Skills</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Field Sales Jobs</a></li>
            <li><a href="#" className="hover:text-white">Inside Sales Jobs</a></li>
            <li><a href="#" className="hover:text-white">Customer Support Jobs</a></li>
            <li><a href="#" className="hover:text-white">Delivery Jobs</a></li>
            <li><a href="#" className="hover:text-white">Digital Marketing Jobs</a></li>
          </ul>
        </div>

        {/* For Businesses Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">For Businesses</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Post a Job</a></li>
            <li><a href="#" className="hover:text-white">Hire Candidates</a></li>
            <li><a href="#" className="hover:text-white">Staff Management</a></li>
            <li><a href="#" className="hover:text-white">Payroll Software</a></li>
            <li><a href="#" className="hover:text-white">Hiring Plans</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="col-span-full text-center md:text-left">
          <h3 className="text-white font-bold mb-4">Follow Us On</h3>
          <div className="flex justify-center md:justify-start space-x-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" bg-green-800 p-2 rounded-3xl hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="  bg-blue-400 text-white p-2 rounded-3xl  hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="  bg-blue-800 p-2 rounded-3xl hover:text-white">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="   bg-red-800 p-2 rounded-3xl :text-white">
              <FaYoutube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className= "  bg-red-400 text-white p-2 rounded-3xl hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center flex-col justify-center items-center font-bold text-xl flex  mt-10">
        <p className="  text-gray-500">
          Copyright Workex Solutions & Services Pvt. Ltd. 2019-2020
        </p>
        <p className=" text-gray-500">
          <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
