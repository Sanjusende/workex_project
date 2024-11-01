import React, { useState } from "react";
import fold_2 from "../../assets/fold_2.png"; // Replace with your actual image path

const DownloadAppSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (phoneNumber) {
      
      setMessage(`Download link sent to ${phoneNumber}!`);
      setPhoneNumber(""); // Clear input field after submission
    } else {
      setMessage("Please enter a valid phone number.");
    }
  };

  return (
    <div className=" mx-20 py-10 ">
      <div className="max-w-screen bg-white mx-10 rounded-lg shadow-lg border-2   flex items-center justify-center text-center px-10">
        <div  className="w-[50%]">
        <h1 className="text-3xl font-bold mb-6">
          Get the best learning recommendations directly on your Phone!
        </h1>
        <p className="text-lg mb-4">
          Enter your Mobile Number to get Started!
        </p>
        
        <form onSubmit={handleSubmit} className="flex justify-center items-center mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-400 p-2 rounded-l-md w-1/3"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Get App Download Link
          </button>
        </form>
        
        {message && (
          <p className="text-green-600 font-semibold">{message}</p>
        )}
</div>
        {/* Image Section */}
        <div className=" w-[50%]">
          <img
            src={fold_2} // Use your actual image path
            alt="Download App"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
