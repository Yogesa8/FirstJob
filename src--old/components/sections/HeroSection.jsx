import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchStats } from '../../store/statsSlice'

const HeroSection = ({words}) => {
     

     const [currentWord, setCurrentWord] = useState(0);

     const dispatch = useDispatch();
     const { visitors, downloads, status } = useSelector((state) => state.stats);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentWord((prev) => (prev + 1) % words.length);
          }, 2500);
          return () => clearInterval(interval);
     }, [words.length]);

     // Fetch stats on mount
     useEffect(() => {
          dispatch(fetchStats());
     }, [dispatch]);

     const visitorsDisplay = status === 'loading' ? 'Loading…' : (visitors != null ? `${Number(visitors).toLocaleString()} visitors` : '12,000+ visitors');
     const downloadsDisplay = status === 'loading' ? 'Loading…' : (downloads != null ? `${Number(downloads).toLocaleString()}+` : '3,400+');

     return (
          // FIX: Standardized padding to py-20 sm:py-24
          <section className="relative py-20 sm:py-24 bg-gray-50">
               <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                         <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                                   <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                        Stop searching. Start{" "}
                                        <span className="inline-block relative h-[1.2em] w-auto min-w-50 align-bottom">
                                             {words.map((word, index) => (
                                                  <span
                                                       key={index}
                                                       className={`absolute left-0 top-0 px-4 py-1 rounded-2xl inline-block whitespace-nowrap transition-all duration-500 ${word.color} ${index === currentWord
                                                            ? 'opacity-100 translate-y-0'
                                                            : 'opacity-0 translate-y-4'
                                                            }`}
                                                  >
                                                       {word.text}
                                                  </span>
                                             ))}
                                        </span>
                                   </h1>

                                   <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                                        <div className="flex justify-center shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                             <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="" />
                                             <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="" />
                                             <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="" />
                                        </div>
                                        {/* Dynamic stats from Redux */}
                                        <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                                             Helping <span className="font-bold">{visitorsDisplay}</span> build careers. <span className="font-bold">{downloadsDisplay}</span> resumes downloaded
                                        </p>
                                   </div>
                              </div>

                              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                                   <Link to="/jobs" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-900 border border-transparent rounded-xl transition-all duration-300 hover:bg-gray-700" role="button">
                                        Apply Here
                                   </Link>
                                   <Link to="/resume" className="inline-flex items-center justify-center px-4 py-4 mt-4 text-lg font-bold sm:mt-0 rounded-xl transition-all duration-300 hover:bg-gray-100 text-black" role="button">
                                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        Get Your Resume
                                   </Link>
                              </div>
                         </div>

                         <div className="xl:col-span-3">
                              <img className="w-full mx-auto" src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png" alt="" />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;