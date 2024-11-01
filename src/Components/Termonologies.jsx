import React from "react";
import { FaStar, FaBell, FaGooglePlay } from "react-icons/fa"; // Import necessary icons

const Testimonials = () => {
  const reviews = [
    {
      text: `“We have used Workex for all of our significant hires over the past year. They have consistently been a pleasure to work with – knowledgeable in their field, responsive to both us and applicants, and thoughtful in their advice as we work through the process. A very good leadership team managing relationships at all levels.”`,
      name: "Ronald Vargeese",
      title: "Director HR - Delhivery",
      rating: 5,
    },
    {
      text: `“Workex has made payroll processing so simple for us. With an ever-increasing team, this process was taking more and more time and we even contemplated having a dedicated team for this. But Workex has made it easier and faster. Moreover, hiring in remote areas is an added advantage with Workex. We are grateful to have Workex as a partner.”`,
      name: "Siddharth Dialani",
      title: "Founder and Director - BharatAgri App",
      rating: 5,
    },
    {
      text: `“We will definitely hand over all our future demands to Workex to fulfil as they are quality driven and Workex is aligned with us to provide the same by leveraging AI and bots.”`,
      name: "Kishore Kumar",
      title: "HR Lead - Meesho",
      rating: 5,
    },
    {
      text: `“Workex manages our workforce with ease and the experience is quite enjoyable! Managing people with compliance is so incredibly important to the success of my team. So grateful to have Workex as a partner.”`,
      name: "Alok Jain",
      title: "VP HR - Biomech Healthcare",
      rating: 5,
    },
  ];

  return (
    <div className="p-6 lg:flex lg:space-x-8">
      {/* Left side - Testimonials Section */}
      <div className="flex-1 lg:w-2/3">
        <h1 className="text-3xl font-bold text-center mb-6">
          With Workex, you’re always in great hands!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          See why over 5000+ Indian businesses choose the ‘Workex Advantage’ for
          their business.
        </p>

        {/* Testimonials Section - Grid for 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto"
            >
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{review.text}"</p>
              <p className="font-bold text-gray-800">{review.name}</p>
              <p className="text-gray-500">{review.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - More from Workex */}
      <div className="flex-shrink lg:w-96 mt-10 shadow-lg lg:mt-0">
        <h2 className="text-2xl font-bold mb-6 text-center lg:flex justify-center items-center lg:text-left">More from Workex</h2>

        {/* Download App Section */}
        <div className="bg-blue-50 p-6 shadow-xl rounded-lg  mb-6 text-center lg:text-left">
          <p className="text-xl font-semibold mb-2">Download our free mobile app</p>
          <p className="text-gray-600 mb-4">
            Hire and Manage Staff better or Find Jobs faster.
          </p>
<div className="flex flex-col">
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-2 rounded w-full lg:w-auto mb-4"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded mb-4 w-full lg:w-auto">
            Get download link
          </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <FaGooglePlay className="text-gray-500 text-3xl mr-2" />
            <span className="text-gray-600">Available on Google Play</span>
          </div>
        </div>

        {/* Job Alert Section */}
        <div className="bg-yellow-50   flex items-center justify-center flex-col p-6 rounded-lg shadow-xl text-center lg:text-left">
          <FaBell className="text-yellow-500 text-4xl mb-4 mx-auto lg:mx-0" />
          <p className="text-xl font-semibold mb-2">Create Job Alert</p>
          <p className="text-gray-600 mb-4">
            If you are interested in a particular job, sign up with Workex Job Alerts Now.
          </p>
          <button className="bg-pink-500 text-white px-6 text-xl py-4 rounded w-full   lg:w-64">
            Create Now
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default Testimonials;
