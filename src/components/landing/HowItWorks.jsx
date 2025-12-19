import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="py-4 bg-gray-50 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Create Your Dream With Us</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Start your professional journey and shape your future with us.</p>
        </div>
        
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
          </div>
          
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Choose Your Career Path</h3>
              <p className="mt-4 text-base text-gray-600">Explore jobs based on your interests, skills, and career goals.</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create Your Resume</h3>
              <p className="mt-4 text-base text-gray-600">Bind your dream into your Resume.</p>
              <Link to={'/resume'} className="mt-4 btn btn-success btn-sm sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Get Your Resume</Link>
            </div>
            
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Apply & Grow Your Career</h3>
              <p className="mt-4 text-base text-gray-600">Apply to top companies, attend interviews, and grow your professional journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;