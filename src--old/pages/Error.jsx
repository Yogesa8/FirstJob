import React from "react";
import working from "../assets/working.png"
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-8">
          <img
            src={working}
            alt="Page Under Construction"
            className="mx-auto max-w-md"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Under Construction</h1>

        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          We're working hard to improve this page. Please check back soon!
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
            <i className="fas fa-home mr-2"></i>
            Home
          </Link>
          <Link to="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300">
            <i className="fas fa-envelope mr-2"></i>
            Contact
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Estimated completion: Coming soon</p>
        </div>
      </div>
    </div>
  );
};
export default Error;
