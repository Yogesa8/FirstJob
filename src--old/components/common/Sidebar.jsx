import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
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
          <div className="drawer-side z-50">
               <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
               <div className="w-72 bg-white h-full shadow-lg p-4">
                    <div className="flex justify-end">
                         <label htmlFor="my-drawer-1" className="btn btn-ghost text-xl">✕</label>
                    </div>

                    <ul className="menu space-y-2 mt-2">
                         <li><Link to="/blogs" className="text-base font-medium">Blogs</Link></li>
                         <li><Link to="/jobs" className="text-base font-medium">Jobs</Link></li>
                         <li><Link to="/services" className="text-base font-medium">Services</Link></li>
                         <li><Link to="/about" className="text-base font-medium">About</Link></li>
                         <li><Link to="/contact" className="text-base font-medium">Contact</Link></li>

                         {isLoggedIn ? (
                              <>
                                   <li className="px-4 py-2 text-sm font-medium text-gray-600 truncate">{userEmail}</li>
                                   <li>
                                        <button 
                                             onClick={handleLogout} 
                                             className="mb-2 btn border-orange-500 border w-full text-gray-700"
                                        >
                                             Logout
                                        </button>
                                   </li>
                              </>
                         ) : (
                              <>
                                   <li><Link to="/login" className="mb-2 btn border-orange-500 border w-full">Login</Link></li>
                                   <li><Link to="/signup" className="btn border-orange-500 border w-full">Sign Up</Link></li>
                              </>
                         )}
                    </ul>
               </div>
          </div>
     )
}

export default Sidebar