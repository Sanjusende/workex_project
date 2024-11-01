import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import circular_tick from '../../assets/circular_tick.svg'; 
import big1 from '../../assets/big1.png'; 
import big2 from '../../assets/big2.png'; 
import big3 from '../../assets/big3.png'; 
import big4 from '../../assets/big4.png'; 

const BigComponents = () => {
  return (
    <div className="bg-[#37486E] py-16 px-8 md:px-20 space-y-16">
      {/* Staff Management Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-bold text-green-400">Track your staff: Anywhere & Anytime</h2>
          <p className="text-4xl font-bold text-white">Manage Staff Attendance Digitally</p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Verified Attendance</span>
                <p className="text-white">Enable Face & Location verification for accurate online attendance</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Shift Management</span> 
                <p className="text-white">Create & schedule multiple shifts without hassle</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
              <span className="text-xl font-bold text-green-400">Leave Management  </span>
                <p className='text-white'> Approve & Reject Staff Leaves directly from the app</p>
                </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Sign up now</button>
            <a href="#" className="text-blue-500 flex items-center gap-3 font-bold">
              Know more <MdOutlineKeyboardArrowRight />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={big1} alt="Manage Staff" className="w-full max-w-md" />
        </div>
      </div>

      {/* Payroll Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-end">
          <img src={big2} alt="Payroll Management" className="w-full max-w-md" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Calculate your payroll: Accurate & Fast</h2>
          <p className="text-lg text-gray-300">Automated Payroll Calculation</p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
              <span className="text-xl font-bold text-green-400">Automatic Salary Calculation</span>
              <p className='text-white'>Add CTCs once and get auto-calculated salaries of your Staff</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
              <span className="text-xl font-bold text-green-400">Finance Management  </span>
                <p className='text-white'> Keep track of staff's advances, overtime, deductions & allowances</p>
                </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
              <span className="text-xl font-bold text-green-400">Stay Compliant   </span> 
             <p className='text-white'>  Easy Deductions and Challan Generation as per State</p>
             </div>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Sign up now</button>
            <a href="#" className="text-blue-500 flex items-center gap-3 font-bold">
              Know more <MdOutlineKeyboardArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Organization Tree Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Organization Tree: Centralized & Transparent</h2>
          <p className="text-lg text-gray-300">Structure Your Team Digitally</p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
              <span className='text-xl font-bold text-green-400'>Locations </span>
              <p className="text-white"> Add & manage your multiple offices from one platform</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Departments </span>
              <p className="text-white"> Create departments for your company & assign them to your staff</p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Managers </span>
              <p className="text-white"> Specify your team manager & assign them to each staff</p>
              </div>
            </li>
          </ul>
          <div className="mt-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Sign up now</button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={big3} alt="Organization Tree" className="w-full max-w-md" />
        </div>
      </div>

      {/* Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-end">
          <img src={big4} alt="Reports" className="w-full max-w-md" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Reports: Detailed & Real-Time</h2>
          <p className="text-lg text-gray-300">Smart Report Generation</p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              
              <div>
                <span className='text-xl font-bold text-green-400'>Payslip Report </span>
              <p className="text-white"> Generate a professional report with your brand name & logo</p>
            </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Performance Report  </span>
              <p className="text-white">Track your staff’s monthly performance</p>
            </div>
            </li>
            <li className="flex items-center">
              <img src={circular_tick} alt="green tick" className="w-8 h-8 mr-2" />
              <div>
                <span className='text-xl font-bold text-green-400'>Payroll Report </span>
              <p className="text-white">- Get personalized payroll reports for your company</p>
            </div>
            </li>
          </ul>
          <div className="mt-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigComponents;
