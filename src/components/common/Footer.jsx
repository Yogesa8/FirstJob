import React from "react";
import firstJobInd from "../../assets/favicon.png";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
      <ul className="space-y-2 text-gray-600">
        {links.map((link) => (
          <li key={link} className="hover:text-black cursor-pointer transition">
            <Link to={`/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:+918198907329";
  };

  return (
    <footer className="bg-gray-50">
      {/* CTA CARD */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-linear-to-br from-black via-[#1a0c06] to-[#3b1d0e]">
          {/* subtle diagonal line */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(255,255,255,0.06)_49%,transparent_51%)]" />
          
          <div className="relative px-10 py-16 md:px-16 md:py-20">
            <h2 className="text-white text-3xl md:text-4xl font-semibold max-w-lg leading-tight">
              Stay ahead without
              <br />
              the noise.
            </h2>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md">
              <button onClick={handleCall} className="rounded-4xl bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FOOTER LINKS */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-gray-900 max-w-sm">
            Designed for those who build
            <br />
            the future quietly.
          </p>
        </div>
        
        <FooterColumn
          title="Platform"
          links={["How It Works", "Features", "Integrations", "Roadmap"]}
        />
        <FooterColumn
          title="Company"
          links={["About", "Careers", "Culture", "Press Kit"]}
        />
        <FooterColumn
          title="Resources"
          links={["Blog", "Docs", "Support", "API Reference"]}
        />
        <FooterColumn
          title="Legal"
          links={["Privacy Policy", "Terms of Use", "Security"]}
        />
      </div>
      
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2 font-medium">
            <img src={firstJobInd} className="h-10" alt="Website logo" />
          </div>
          <p>© 2025 FirstJobInd. All rights reserved. | Solving India's Fresher Employment Crisis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;