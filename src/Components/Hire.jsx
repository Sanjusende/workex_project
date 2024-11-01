import React from 'react';
import Slider from 'react-slick';
import group7 from '../assets/Group7.svg'; 
import group8 from '../assets/Group8.svg'; 
import group9 from '../assets/Group9.svg'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hire = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <>
      <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          {/* Title */}
          <h2 class="text-5xl  text-gray-700 font-bold text-center mb-8">
            Hiring Staff with Workex
          </h2>

          {/* Subtitle */}
          <p class="text-2xl text-center mb-12">
            Workex’s industry-leading hiring services right at your fingertips.
          </p>

          {/* Flex container */}
          <div className='flex justify-between items-center'>
            
            {/* Content blocks */}
            <div class="grid grid-cols-1 md:grid-cols-1 gap-8">

              {/* First content block */}
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div className='flex items-start'>
                  <h1 className='text-7xl font-extrabold text-gray-700 mr-6'>01</h1> 
                  <div>
                    <h3 class="text-4xl font-semibold mb-4">AI-Screened Candidates</h3>
                    <p class="text-gray-700 text-2xl">
                      Our cutting edge AI technology will recommend you only the best candidates for your hiring.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second content block */}
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div className='flex items-start'>
                  <h1 className='text-7xl font-extrabold text-gray-700 mr-6'>02</h1>
                  <div>
                    <h3 class="text-4xl font-semibold mb-4">
                      Get your Interviews scheduled in minutes!
                    </h3>
                    <p class="text-gray-700 text-2xl">
                      Shortlist candidates of your choice and schedule interviews with them in minutes!
                    </p>
                  </div>
                </div>
              </div>

              {/* Third content block */}
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div className='flex items-start'>
                  <h1 className='text-7xl font-extrabold text-gray-700 mr-6'>03</h1>
                  <div>
                    <h3 class="text-4xl font-semibold mb-4">
                      Hire the most qualified talents in the industry!
                    </h3>
                    <p class="text-gray-700 text-2xl">
                      Top-ranked candidates from across India at your fingertips!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Slider */}
            <div className='w-1/2'>
              <Slider {...settings}>
                <div>
                  <img src={group7} alt="Group 7" className="w-full h-auto rounded-lg" />
                </div>
                <div>
                  <img src={group8} alt="Group 8" className="w-full h-auto rounded-lg" />
                </div>
                <div>
                  <img src={group9} alt="Group 9" className="w-full h-auto rounded-lg" />
                </div>
              </Slider>
            </div>
          </div>

          {/* Call-to-action button */}
          <div class="  mt-12">
            <button class="bg-blue-600 text-lg text-white px-20 py-5 rounded hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
