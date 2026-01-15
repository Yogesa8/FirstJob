import React from "react";
import { faqs } from "../../data/faqs";

const FAQSection = () => {
  return (
    <section className="py-8 bg-gray-50 sm:py-12 lg:py-18">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base text-gray-600">
            Everything you need to know about using FirstJobInd World
          </p>
        </div>
        
        {/* faq */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
            >
              {/* 👉 radio ensures only one open at a time */}
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />
              
              <div className="collapse-title font-semibold text-lg">
                {faq.question}
              </div>
              
              <div className="collapse-content text-sm text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;