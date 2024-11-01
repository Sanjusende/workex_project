import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

// Placeholder data for different job categories
const jobCategories = [
  "Telecalling - Voice Process",
  "Sales Manager - Management",
  "Retail - Field Sales",
  "Online - Digital Marketing",
  "Inside Sales",
  "Marketing",
  "Enterprise Sales",
  "Delivery Executives - Courier",
];

const specializations = [
  "Inside Sales",
  "Marketing",
  "Enterprise Sales",
  "Delivery Executives - Courier",
];

const skills = [
  "Accounting",
  "Front Office - Reception",
  "Data Entry",
  "Driver",
];

const cities = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Bangalore",
];

const experiencedJobs = [
  "Senior Developer",
  "Project Manager",
  "Data Analyst",
];

const fresherJobs = [
  "Junior Developer",
  "Intern - Marketing",
  "Support Executive",
];

const educationJobs = [
  "Backend Development",
  "Frontend Development",
  "Data Science",
];

// Main Job Portal Page Component
const JobPortalPage = () => {
  const [activeSection, setActiveSection] = useState("Top Categories");

  const sections = [
    { title: "Top Categories", content: jobCategories },
    { title: "Top Specialization", content: specializations },
    { title: "Jobs by Skill", content: skills },
    { title: "Jobs by City", content: cities },
    { title: "Jobs for Experienced", content: experiencedJobs },
    { title: "Jobs for Freshers", content: fresherJobs },
    { title: "Jobs by Education", content: educationJobs },
  ];

  const toggleSection = (sectionTitle) => {
    setActiveSection(sectionTitle === activeSection ? "" : sectionTitle);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100">
      {/* Section 1: Header */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Get Hired in 24 Hours!</h1>
        <p className="text-gray-600 mt-2">Be among the first to apply for these trending jobs!</p>
      </section>

      {/* Section Tabs */}
      <div className="flex flex-wrap justify-center mb-6">
        {sections.map((section) => (
          <button
            key={section.title}
            onClick={() => toggleSection(section.title)}
            className={`text-lg font-bold px-4 py-2 mx-2 my-1 hover:bg-blue-100 rounded-lg transition 
              ${activeSection === section.title ? "bg-blue-500 text-white" : "text-gray-700"}
            `}
          >
            {section.title}
            {activeSection === section.title ? <FaAngleDown className="inline ml-2" /> : <FaAngleRight className="inline ml-2" />}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        {sections.map((section) => (
          <div key={section.title} className={`${activeSection === section.title ? "block" : "hidden"}`}>
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.content.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortalPage;
