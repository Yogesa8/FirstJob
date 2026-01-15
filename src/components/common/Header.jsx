import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firstJobInd from "../../assets/favicon.png";
import Sidebar from "./Sidebar";

const Header = () => {
     const navigate = useNavigate();
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [userEmail, setUserEmail] = useState("");

     useEffect(() => {
          const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
          const email = localStorage.getItem('userEmail');
          setIsLoggedIn(loggedIn);
          setUserEmail(email || "");
     }, []);

     const handleLogout = () => {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userEmail');
          setIsLoggedIn(false);
          navigate('/login', { replace: true });
     };

     return (
          <div className="relative bg-gray-50">
               <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                    <img
                         className="w-auto h-full"
                         src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                         alt=""
                    />
               </div>

               <header className="relative py-4 md:py-6">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                         <div className="flex items-center justify-between">
                              <div className="shrink-0">
                                   <Link to="/" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                        <img className="w-auto h-8" src={firstJobInd} alt="" />
                                   </Link>
                              </div>

                              <div className="flex lg:hidden">
                                   <div className="drawer drawer-end">
                                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                                        <div className="drawer-content">
                                             <label htmlFor="my-drawer-1" className="text-gray-900 cursor-pointer" aria-label="Open menu">
                                                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                                  </svg>
                                             </label>
                                        </div>
                                        
                                        <Sidebar />
                                   </div>
                              </div>

                              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
                                   <div className="flex items-center space-x-6">
                                        <Link to="/blogs" className="rounded-xl px-5 py-2 border border-transparent text-base font-medium text-gray-900 transition-all duration-200 hover:text-gray-600 hover:border-orange-500">Blogs</Link>
                                        <Link to="/jobs" className="rounded-xl px-5 py-2 border border-transparent text-base font-medium text-gray-900 transition-all duration-200 hover:text-gray-600 hover:border-orange-500">Job</Link>
                                        <Link to="/services" className="rounded-xl px-5 py-2 border border-transparent text-base font-medium text-gray-900 transition-all duration-200 hover:text-gray-600 hover:border-orange-500">Services</Link>
                                   </div>
                                   <div className="w-px h-5 bg-gray-300"></div>
                                   
                                   {isLoggedIn ? (
                                        <div className="flex items-center space-x-4">
                                             <span className="text-sm font-medium text-gray-600">{userEmail}</span>
                                             <button 
                                                  onClick={handleLogout} 
                                                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-50 transition"
                                             > 
                                                  Logout 
                                             </button>
                                        </div>
                                   ) : (
                                        <>
                                             <Link to="/login" className="rounded-xl px-5 py-2 border border-transparent text-base font-medium text-gray-900 transition-all duration-200  hover:text-gray-600 hover:border-orange-500">Login</Link>
                                             <Link to="/signup" className="px-5 py-2 text-base font-semibold text-gray-900 bg-transparent border border-gray-900 rounded-xl transition-all duration-200 hover:bg-orange-500/10 hover:border-orange-500 hover:text-black" role="button">Create free account</Link>
                                        </>
                                   )}
                              </div>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;