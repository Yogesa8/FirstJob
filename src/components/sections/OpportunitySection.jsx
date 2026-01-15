// import React from "react";
// import { Home, Building2, CheckCircle, Settings, FileText, Code2, BarChart3, GraduationCap, Award, Users, TrendingUp } from "lucide-react";
// import useScrollReveal from "../../hooks/useScrollReveal";

// const OpportunitySection = ({ categories }) => {
//      const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

//      return (
//           <section
//                ref={ref}
//                className="py-16 bg-[#f9fafb] sm:py-20 lg:py-24 overflow-hidden"
//           >
//                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                     {/* Heading + description (LEFT aligned) */}
//                     <div
//                          className={`max-w-3xl transition-all duration-1000 ${isVisible
//                                    ? 'opacity-100 translate-y-0'
//                                    : 'opacity-0 translate-y-12'
//                               }`}
//                     >
//                          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//                               AI Powered Job Matching Engine
//                          </h2>
//                          <p className="mt-4 text-lg text-gray-600">
//                               Discover opportunities across industries, roles, and work preferences tailored for your career growth.
//                          </p>
//                     </div>

//                     {/* Categories grid */}
//                     <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
//                          {categories.map((item, index) => {
//                               const isLeft = index % 2 === 0;

//                               return (
//                                    <div
//                                         key={index}
//                                         className={`flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm cursor-pointer
//               transition-all duration-700 hover:shadow-md hover:border-gray-300
//               ${isVisible
//                                                   ? 'opacity-100 translate-x-0'
//                                                   : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'
//                                                   }`
//                                              }
//             `}
//                                         style={{ transitionDelay: `${index * 60}ms` }}
//                                    >
//                                         <div className="flex items-center gap-4">
//                                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
//                                                   <item.icon className="h-5 w-5 text-gray-700" />
//                                              </div>
//                                              <span className="font-medium text-gray-900">
//                                                   {item.title}
//                                              </span>
//                                         </div>
//                                         <span className="text-gray-400 text-xl">›</span>
//                                    </div>
//                               );
//                          })}
//                     </div>
//                </div>
//           </section>

//      );
// };

// export default OpportunitySection;


import React from "react";
import { Home, Building2, CheckCircle, Settings, FileText, Code2, BarChart3, GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const OpportunitySection = ({ categories }) => {
     const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

     return (
          // FIX: Standardized padding to py-20 sm:py-24
          <section
               ref={ref}
               className="py-20 sm:py-24 bg-[#f9fafb] overflow-hidden"
          >
               <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {/* Heading + description (LEFT aligned) */}
                    <div
                         className={`max-w-3xl transition-all duration-1000 ${isVisible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-12'
                              }`}
                    >
                         <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                              AI Powered Job Matching Engine
                         </h2>
                         <p className="mt-4 text-lg text-gray-600">
                              Discover opportunities across industries, roles, and work preferences tailored for your career growth.
                         </p>
                    </div>

                    {/* Categories grid */}
                    <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
                         {categories.map((item, index) => {
                              const isLeft = index % 2 === 0;

                              return (
                                   <div
                                        key={index}
                                        className={`flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm cursor-pointer
              transition-all duration-700 hover:shadow-md hover:border-gray-300
              ${isVisible
                                                  ? 'opacity-100 translate-x-0'
                                                  : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'
                                                  }`
                                             }
            `}
                                        style={{ transitionDelay: `${index * 60}ms` }}
                                   >
                                        <div className="flex items-center gap-4">
                                             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                                  <item.icon className="h-5 w-5 text-gray-700" />
                                             </div>
                                             <span className="font-medium text-gray-900">
                                                  {item.title}
                                             </span>
                                        </div>
                                        <span className="text-gray-400 text-xl">›</span>
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </section>

     );
};

export default OpportunitySection;