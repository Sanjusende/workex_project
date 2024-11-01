import React from "react";
import Multiple_courses from "../../assets/Multiple_courses.svg"; 
import MARKETING_CONTENT from "../../assets/MARKETING_CONTENT.svg"; 
import Lifetime_Access from "../../assets/Lifetime_Access.svg"; 

const flex = () => {
  const features = [
    {
      title: "Multiple Courses",
      description: "Choose from over 10,000 courses!",
      image: Multiple_courses, 
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry experts!",
      image: MARKETING_CONTENT, 
    },
    {
      title: "Lifetime Access",
      description: "Learn anytime, anywhere!",
      image: Lifetime_Access, 
    },,
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-6">
          Explore Our Features
        </h1>
        <p className="text-lg mb-10">
          Discover the benefits of learning with us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default flex;
