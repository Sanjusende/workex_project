import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { IoLogoAndroid } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";



const Hero2 = () => {
  return (
    <>
<div className=" lg:pl-28 flex flex-col md:flex-row max-w-screen bg-[#071424]  mx-auto p-8  rounded-lg">
      {/* Left Content */}
      {/* d */}
      <div className="left text-white">
        <h1 className='text-4xl'>Smart Attendance <br />
        & Automatic Payroll!</h1>
    
        <p className='text-2xl mt-10'>Attendance and payroll software that's simple to use,
reduces team costs & keeps you compliant!
</p>
<p className='text-xl font-bold mt-6'>*Get it FREE for 2 Months</p>
<button className='font-bold mt-4 flex gap-3 justify-center text-2xl items-center px-10 py-4 text-white bg-blue-600'>Watch the Video <CiPlay1 />
</button>
<div className='flex gap-3 text-xl text-white mt-4 items-center'>Awailable On <IoLogoAndroid /><FaDesktop />

</div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2  shadow-lg shadow-slate-100 mt-5  rounded-lg lg:w-96 bg-white py-4 px-10">
        <p className="text-4xl font-bold text-gray-600">
        Enter your details
        </p>
        <p className="mt-4 text-xl text-gray-500">
        Get accurate Staff Attendance & Salary Calculation        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Enter Your NUmber"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            placeholder="Your Email Id"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="tel"
            placeholder="Enter Your Full Name"
            className="w-full text-xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <button className="w-full bg-blue-500 hover:bg-green-600 text-white p-3 rounded text-2xl font-semibold">
            Get Started For Free!
          </button>
        </div>

     
      </div>
    </div>
    </>
  )
}

export default Hero2