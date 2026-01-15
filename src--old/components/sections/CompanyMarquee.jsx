import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import bmw from "../../assets/logoslider/bmw.png";
import motilal from "../../assets/logoslider/motilal.png";
import firstJobInd from "../../assets/favicon.png";

const CompanyMarquee = () => {
     const logos = [bmw, motilal, firstJobInd,]

     const [ref, isVisible] = useScrollReveal();

     return (

          <section
               ref={ref}
               className={`py-20 sm:py-24 bg-[#f9fafb] transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
          >
               <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                    {/* Heading Section (Left Aligned) */}
                    <div className="max-w-3xl mb-12">
                         <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                              Trusted by Leading Companies
                         </h2>
                         <p className="mt-4 text-lg text-gray-600">
                              Top companies and institutions trust FirstJobInd World to discover fresh talent.
                         </p>
                    </div>

                    {/* Logos Section (Centered) */}
                    <div className="min-h-80 flex items-center justify-center">
                         <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">

                              {logos.map((logo, index) => (
                                   <div key={index} className="cursor-pointer relative p-6 sm:p-8 w-full sm:w-auto flex items-center justify-center">

                                        {/* Overshoot Lines */}
                                        {/* Top */}
                                        <div className="absolute top-0 -left-10 -right-10 h-px bg-linear-to-r from-orange-400/60 to-transparent"></div>

                                        {/* Bottom */}
                                        <div className="absolute bottom-0 -left-10 -right-10 h-px bg-linear-to-l from-orange-400/60 to-transparent"></div>

                                        {/* Left */}
                                        <div className="absolute left-0 -top-10 -bottom-10 w-px bg-linear-to-t from-orange-400/60 to-transparent"></div>

                                        {/* Right */}
                                        <div className="absolute right-0 -top-10 -bottom-10 w-px bg-linear-to-b from-orange-400/60 to-transparent"></div>

                                        {/* Logo */}
                                        <div className="relative flex items-center justify-center">
                                             <img
                                                  src={logo}
                                                  alt="Company logo"
                                                  className="h-20 opacity-80 mx-auto"
                                             />
                                        </div>

                                   </div>
                              ))}

                         </div>
                    </div>
               </div>
          </section>

     );
};

export default CompanyMarquee;