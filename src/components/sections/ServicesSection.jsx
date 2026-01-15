import React from "react";
import { Briefcase, FileText, Target, Zap, Users, Shield, ArrowRight } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const ServicesSection = ({ services }) => {
     const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

     const colorMap = {
          blue: "from-blue-500 to-blue-600",
          green: "from-green-500 to-green-600",
          purple: "from-purple-500 to-purple-600",
          yellow: "from-yellow-500 to-yellow-600",
          red: "from-red-500 to-red-600",
          indigo: "from-indigo-500 to-indigo-600"
     };

     return (
          // FIX: Reduced large lg:py-32 down to standard py-20 sm:py-24
          <section ref={ref} className="py-20 sm:py-24 bg-[#f9fafb] overflow-hidden">
               <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div
                         className={`max-w-2xl mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                              }`}
                    >
                         <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                              Our Services
                         </h2>
                         <p className="mt-4 text-xl text-gray-600">
                              Comprehensive solutions designed to kickstart your career journey
                         </p>
                    </div>


                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                         {services.map((service, index) => (
                              <Link to={service.link}
                                   key={index}
                                   className={`group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-1000 hover:shadow-2xl hover:border-transparent ${isVisible
                                        ? 'opacity-100 translate-y-0 rotate-0'
                                        : 'opacity-0 translate-y-20 rotate-3'
                                        }`}
                                   style={{
                                        transitionDelay: `${index * 150}ms`,
                                        transformOrigin: 'bottom center'
                                   }}
                              >
                                   {/* Gradient background on hover */}
                                   <div className={`absolute inset-0 bg-linear-to-br ${colorMap[service.color]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                                   {/* Floating gradient orb */}
                                   <div className={`absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br ${colorMap[service.color]} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150`}></div>

                                   <div className="relative">
                                        {/* Icon with animated background */}
                                        <div className={`inline-flex p-4 rounded-xl bg-gray-50 group-hover:bg-linear-to-br ${colorMap[service.color]} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                             <service.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-500" />
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                                             {service.title}
                                        </h3>

                                        <p className="mt-3 text-gray-600 leading-relaxed">
                                             {service.description}
                                        </p>

                                        {/* Animated arrow */}
                                        <div className="mt-6 flex items-center text-gray-400 group-hover:text-gray-900 transition-colors">
                                             <span className="text-sm font-semibold">Learn more</span>
                                             {/* <Link to={service.link}  className="text-sm font-semibold">Learn more</Link> */}
                                             <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                   </div>

                                   {/* Bottom border accent */}
                                   <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${colorMap[service.color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                              </Link>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default ServicesSection;