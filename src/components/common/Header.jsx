import React from "react";
import firstJobInd from "../../assets/favicon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative py-4 md:py-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link to="/" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <img className="w-auto h-12" src={firstJobInd} alt="" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <div className="drawer">
              <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
              
              <div className="drawer-content">
                <label htmlFor="my-drawer-1" className="text-gray-900 cursor-pointer">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
              </div>
              
              <div className="drawer-side">
                <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  <li>
                    <Link to="/blogs" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobs" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Services
                    </Link>
                  </li>
                  <div className="divider">OR</div>
                  <li>
                    <Link role="button" to="/login" className="mb-2 px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white" >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                      role="button"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
            <div className="flex items-center space-x-12">
              <Link to="/blogs" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Blogs
              </Link>
              
              <Link to="/jobs" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Job
              </Link>
              
              <Link to="/services" className="after:content-none text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                Services
              </Link>
            </div>
            
            <div className="w-px h-5 bg-gray-300"></div>
            <Link to="/login" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 after:content-none" >
              Login
            </Link>
            
            <Link to="/signup" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
              role="button"
            >
              Create free account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;