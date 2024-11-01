import React from "react";
import blog1 from "../assets/blog1.webp"; // Import the image correctly
import blog2 from "../assets/blog2.webp";  // Add more images from your assets folder
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";

const Blog = () => {
  const blogs = [
    {
      title: "TOP 5 Job challenges faced by Freshers in the corporate World.",
      description: "The challenges, freshers face in the corporate world and solutions to be followed to have a pleasant atmosphere.",
      imageUrl: blog1, // No need for {}
    },
    {
      title: "Tips for bouncing back from a layoff into a new career.",
      description: "Every learning has a fall, Here are some tips for bouncing back from a layoff into a new career.",
      imageUrl: blog2, // Use the correct image path
    },
    {
      title: "Tips to overcome Work related stress, depression and burnout.",
      description: "Major cause for Stress and Burnout in the workplace is Work overload. Here are some tips to overcome that.",
      imageUrl: blog3, // Use the correct image path
    },
    {
      title: "The million dollar question: Should you work for a startup or an MNC?",
      description: "Well, let’s break it down first to actually understand the benefits of working in a startup or an MNC.",
      imageUrl: blog4, // Use the correct image path
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Workex Blog</h1>
        <p className="text-gray-600 mt-2">
          Find Articles, Guides & Video Resources to maximise efficient Job Search, Hiring & complete Workforce Management.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:shadow-lg hover:scale-105"
          >
            {/* Blog Image */}
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>

            {/* Read More Button */}
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
