import React, { useState } from 'react';
import { frequentFql } from './data';
// ❌ Remove this line
// import Accordion from './Accordion';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center w-full px-6  bg-gray-100 h-screen flex-col items-center mt-20">

        <h1 className=' font-bold text-2xl mb-2'> GENERAL FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-gray-600 text-base mb-4 ">This where the all the answers to your questions Are</p>
      <div className="w-full max-w-3xl">
        {frequentFql.map((accordion, index) => (
          <div key={index} className="mb-4 border rounded border-orange-600 shadow-sm bg-white">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center p-4 bg-blue-100 cursor-pointer"
            >
              <h1 className="font-bold text-lg text-gray-900">{accordion.title}</h1>
              <span className="text-2xl font-bold text-orange-700">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>

            {activeIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50 text-base ">
                {accordion.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
