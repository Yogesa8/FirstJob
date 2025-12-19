import React from "react";
import { categories } from "../../data/categories"

const JobCategories = () => {
  return (
    <section className="py-4 bg-gray-50 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Find Opportunities That Match Your Career with AI (AI Powered Job Matching Engine)</h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">Discover opportunities across industries, roles, and work preferences tailored for your career growth.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <item.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;