import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import play_button from "../assets/video/play_button.svg"; // Import play button image

const WorkexCareerTV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "How to gain self confidence?",
      description: "Here are some key insights on building self confidence for better communication in the workspace.",
      videoUrl: "path/to/your/video1.mp4", // Replace with your video path or URL
    },
    {
      title: "Conduct yourself like an extrovert.",
      description: "Learn from industry experts on how to be extroverted about your work, communication and knowledge.",
      videoUrl: "path/to/your/video2.mp4", // Replace with your video path or URL
    },
    {
      title: "How to become positive in life?",
      description: "Positivity boosts all aspects of our lives. Learn how to take the positive approach from experts.",
      videoUrl: "path/to/your/video3.mp4", // Replace with your video path or URL
    },
    {
      title: "Enhance your Professional English.",
      description: "Modern workspace demands proficiency in English. Learn the nuances of the language.",
      videoUrl: "path/to/your/video4.mp4", // Replace with your video path or URL
    },
  ];

  // Function to open the popup with the selected video
  const openVideoPopup = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsOpen(true);
  };

  // Function to close the popup
  const closeVideoPopup = () => {
    setIsOpen(false);
    setActiveVideo(null);
  };

  return (
    <div className="p-6 bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Workex Career TV</h1>
        <p className="text-gray-600 mt-2">
          Enhance your skills with Workex Career TV and jumpstart your career!
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:shadow-lg hover:scale-105"
          >
            {/* Image Thumbnail with hover effect */}
            <div className="relative group cursor-pointer" onClick={() => openVideoPopup(video.videoUrl)}>
              <img
                src={play_button}
                alt="Play Button"
                className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play Button overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-6xl text-white bg-black bg-opacity-50 p-4 rounded-full" />
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <p className="text-gray-600 mb-4">{video.description}</p>
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition"
              onClick={closeVideoPopup}
            >
              <FaTimes className="text-2xl" />
            </button>
            <video
              src={activeVideo}
              controls
              className="w-full h-auto rounded-lg"
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkexCareerTV;
