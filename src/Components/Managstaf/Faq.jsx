import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Up to how many staff can I manage on Workex?",
      answer: "You can manage up to 500 staff members in the basic package, while premium packages allow management of unlimited staff along with advanced features like payroll integration and compliance tracking."
    },
    {
      question: "Is Staff Management on Workex free or paid?",
      answer: "Workex offers both free and paid options. You can access core staff management features in the free version, while the paid plans offer advanced functionalities like payroll, shift management, and compliance features."
    },
    {
      question: "What core features of Staff Management do I get on Workex?",
      answer: "Core features include attendance tracking, shift management, leave management, and reporting. Paid versions also offer payroll calculation, department creation, and performance management."
    },
    {
      question: "Can I also hire on the Workex app or do I need a separate app for the same?",
      answer: "Yes, you can hire staff directly on the Workex app without needing any separate applications. Workex allows you to manage your hiring process and staff management all in one place."
    }
  ];

  return (
    <div className="bg-white text-gray-600 flex items-center justify-center flex-col py-12 px-8 md:px-20">
      <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      <p className="text-lg mb-6">Browse topics & answers below to get the help you need with your Hiring and Staff Management.</p>

      <div className="space-y-6 flex items-center justify-center flex-col w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white w-full max-w-4xl rounded-lg">
            <div 
              onClick={() => toggleAccordion(index)}
              className="flex justify-between shadow-lg border p-8 bg-white lg:h-20 items-center cursor-pointer">
              <h3 className="text-2xl font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowRight className="text-2xl" />
              )}
            </div>

            <div
              style={{
                maxHeight: activeIndex === index ? '1000px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease'
              }}
              className="transition-all duration-500 ease-in-out"
            >
              <p className="p-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
