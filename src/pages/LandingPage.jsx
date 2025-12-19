import React from "react";
// import Header from "../components/common/Header";
import HeroSection from "../components/landing/HeroSection";
import JobCategories from "../components/landing/JobCategories";
import CompanyLogos from "../components/landing/CompanyLogos";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/common/Footer";
import ContactPage from "../components/landing/ContactPage";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Main section */}
      <div className="relative bg-gray-50">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            className="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div>
        
        {/* <Header /> */}
        <HeroSection />
      </div>
      
      {/* Other sections */}
      <JobCategories />
      <CompanyLogos />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <ContactPage/>
      <Footer />
    </div>
  );
};

export default LandingPage;