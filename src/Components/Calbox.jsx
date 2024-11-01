import React from 'react';

const Calbox = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Grab your next hire today!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Post your first job for FREE & connect with the relevant candidates in minutes!
        </p>
        <a
          href="#post-job" // Update the link to your job posting page
          className="inline-block bg-blue-600 text-xl text-white py-6 px-20 rounded shadow-lg hover:bg-blue-700 transition duration-200 mb-4"
        >
          Post a Job now
        </a>
        <p className="text-xl text-gray-600 mb-4">Have a question? We are here to help</p>
        <p className="text-xl text-blue-600">Call our Support +91-9555852852 or <a href="#contact-us" className="underline">Contact Us</a></p>
      </div>
    </section>
  );
};

export default Calbox;
