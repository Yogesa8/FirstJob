import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

const WorkingSection = () => {
     const [ref, isVisible] = useScrollReveal();

     return (
          // FIX: Standardized padding to py-20 sm:py-24
          <section ref={ref} className="py-20 sm:py-24 bg-gray-50">
               <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                         className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                              }`}
                    >
                         <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                              Create Your Dream With Us
                         </h2>
                         <p className="mt-4 max-w-lg text-lg text-gray-600">
                              Start your professional journey and shape your future with us.
                         </p>
                    </div>

                    <div className="relative mt-16">
                         <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                              <img className="w-full opacity-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                         </div>

                         <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
                              {[
                                   { step: 1, title: "Choose Your Career Path", desc: "Explore jobs based on your interests, skills, and career goals." },
                                   { step: 2, title: "Create Your Resume", desc: "Bind your dream into your Resume.", hasButton: true },
                                   { step: 3, title: "Apply & Grow Your Career", desc: "Apply to top companies, attend interviews, and grow your professional journey." }
                              ].map((item, index) => (
                                   <div
                                        key={index}
                                        className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                   >
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                             <span className="text-xl font-semibold text-gray-700">{item.step}</span>
                                        </div>
                                        <h3 className="mt-8 text-xl font-semibold text-gray-900">{item.title}</h3>
                                        <p className="mt-4 text-base text-gray-600">{item.desc}</p>
                                        {item.hasButton && (
                                             <Link to="/resume" className="inline-block mt-6 px-6 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-700 transition-colors">
                                                  Get Your Resume
                                             </Link>
                                        )}
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default WorkingSection;