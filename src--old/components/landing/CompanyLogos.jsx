import React from "react";
import Marquee from "react-fast-marquee";
import { logos } from "../../data/logos";

const CompanyLogos = () => {
  return (
    <section className="py-4 bg-gray-50 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Trusted by Leading Companies</h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">Top companies and institutions trust FirstJobInd World to discover fresh talent.</p>
        </div>
        
        <div className="rounded-box max-w-7xl mx-auto px-4 py-12">
          <div className="w-full overflow-hidden">
            <Marquee speed={100} pauseOnHover={true} gradient={true} gradientColor={[0, 0, 0]} autoFill loop={0}>
              {logos.map((logo, index) => (
                <div key={index} className="mx-10 flex items-center ">
                  <img
                    src={logo}
                    alt="company logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;