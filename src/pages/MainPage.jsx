import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader/Loader";
import { Home, Building2, CheckCircle, Settings, FileText, Code2, BarChart3, GraduationCap, Award, Users, TrendingUp } from "lucide-react";

// Import components
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/sections/HeroSection";
import OpportunitySection from "../components/sections/OpportunitySection";
import CompanyMarquee from "../components/sections/CompanyMarquee";
import WorkingSection from "../components/sections/WorkingSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";
import ContactSection from "../components/sections/ContactSection";

import motilal from "../assets/logoslider/motilal.png";
import bmw from "../assets/logoslider/bmw.png";

const MainPage = () => {
     const [currentTestimonial, setCurrentTestimonial] = useState(0);
     const [activeFaq, setActiveFaq] = useState(null);
     const [showInitialLoader, setShowInitialLoader] = useState(false);

     const handleCall = () => {
          window.location.href = "tel:+919211526625";
     };

     const categories = [
          { title: "Remote", icon: Home },
          { title: "MNC", icon: Building2 },
          { title: "Project Management", icon: CheckCircle },
          { title: "Engineering", icon: Settings },
          { title: "Internship", icon: FileText },
          { title: "Software & IT", icon: Code2 },
          { title: "Data Science", icon: BarChart3 },
          { title: "Fresher", icon: GraduationCap },
          { title: "Fortune 500", icon: Award },
          { title: "HR", icon: Users },
          { title: "Marketing", icon: TrendingUp },
     ];

     const services = [
          {
               icon: FileText,
               title: "Job Matching",
               description: "AI-powered job matching engine that connects freshers with the right opportunities based on skills and preferences.",
               color: "blue",
               link: "/job-matching"
          },
          {
               icon: FileText,
               title: "Resume Builder",
               description: "Professional, ATS-optimized resume templates designed to help you stand out to recruiters.",
               color: "green",
               link: "/resume"
          },
          {
               icon: FileText,
               title: "Career Guidance",
               description: "Personalized career counseling and guidance to help you make informed decisions about your professional journey.",
               color: "purple",
               link: "/career-guidance"
          },
          {
               icon: FileText,
               title: "Interview Prep",
               description: "Mock interviews, tips, and resources to help you ace your interviews and land your dream job.",
               color: "yellow",
               link: "/Interview-prep"
          },
          {
               icon: FileText,
               title: "Company Insights",
               description: "Detailed company profiles, culture insights, and employee reviews to help you choose the right employer.",
               color: "red",
               link: "/company-insights"
          },
          {
               icon: FileText,
               title: "Verified Opportunities",
               description: "All job postings are verified to ensure legitimacy and protect job seekers from fraudulent listings.",
               color: "indigo",
               link: "/ver-opportunities"
          }
     ];

     const faqs = [
          {
               question: "How do I create an account on FirstJobInd World?",
               answer: "You can sign up using your email address or Google account. Once registered, complete your profile to start applying for jobs.",
          },
          {
               question: "Is this platform suitable for freshers?",
               answer: "Yes, FirstJobInd World is specially designed for freshers and early-career professionals with entry-level jobs and internships.",
          },
          {
               question: "How does job matching work?",
               answer: "Jobs are recommended based on your skills, education, and preferences to help you find the most relevant opportunities faster.",
          },
          {
               question: "Can I apply for internships and full-time jobs?",
               answer: "Absolutely. You can apply for internships, full-time, remote, and hybrid roles depending on your interest.",
          },
          {
               question: "Are the companies on this platform verified?",
               answer: "Yes, all companies go through a verification process to ensure a safe and trustworthy job application experience.",
          },
          {
               question: "How can I contact support if I face an issue?",
               answer: "You can reach our support team through the Contact Us page or email us directly for quick assistance.",
          },
     ];

     const testimonials = [
          {
               name: "Divyanshi",
               role: "Fresher",
               text: "FirstJob is a simple and useful platform for freshers looking for entry-level jobs. The website is easy to use and helps beginners explore opportunities without confusion.",
               avatar: "https://ui-avatars.com/api/?name=Divyanshi&background=6366f1&color=fff&size=200",
          },
          {
               name: "Sahil",
               role: "Job Seeker",
               text: "If you are tired of 'free' resume builders that charge you Rs. 100 at the final download screen, FirstJob World is a breath of fresh air. It prioritizes function and hireability over flashy aesthetics, ensuring your resume actually reaches a human recruiter's desk.",
               avatar: "https://ui-avatars.com/api/?name=Sahil&background=0ea5e9&color=fff&size=200",
          },
          {
               name: "Ritika",
               role: "Recent Graduate",
               text: "If you are tired of 'free' resume builders that charge you Rs. 100 at the final download screen, FirstJob World is a breath of fresh air. It prioritizes function and hireability over flashy aesthetics, ensuring your resume actually reaches a human recruiter's desk.",
               avatar: "https://ui-avatars.com/api/?name=Ritika&background=8b5cf6&color=fff&size=200",
          }
     ];

     const cardsData = [
          {
               image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
               name: 'Briar Martin',
               handle: '@neilstellar',
          },
          {
               image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
               name: 'Avery Johnson',
               handle: '@averywrites',
          },
          {
               image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
               name: 'Jordan Lee',
               handle: '@jordantalks',
          },
          {
               image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
               name: 'Avery Johnson',
               handle: '@averywrites',
          },
     ];

     const logos = [
          bmw, motilal
     ];

     const words = [
          { text: "Growing", color: "bg-green-400 text-green-950" },
          { text: "Achieving", color: "bg-yellow-400 text-yellow-950" },
          { text: "Progressing", color: "bg-blue-400 text-blue-950" },
          { text: "Winning Big", color: "bg-red-400 text-red-950" },
          { text: "Your Success", color: "bg-black text-white" },
          { text: "Succeeding", color: "bg-purple-400 text-purple-950" }
     ];

     useEffect(() => {
          const timer = setInterval(() => {
               setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
          }, 5000);
          return () => clearInterval(timer);
     }, [testimonials.length]);

     useEffect(() => {
          // Show loader only on the first visit to MainPage during this session
          const visited = sessionStorage.getItem('mainPageVisited');
          if (!visited) {
               setShowInitialLoader(true);
               // mark visited so subsequent navigations don't show the loader
               sessionStorage.setItem('mainPageVisited', 'true');
               const t = setTimeout(() => setShowInitialLoader(false), 2200);
               return () => clearTimeout(t);
          }
     }, []);

     if (showInitialLoader) return <Loader />;

     return (
          <div className="bg-gray-50">
               <Header />
               <HeroSection words={words} />
               <OpportunitySection categories={categories} />
               <CompanyMarquee logos={logos} />
               <WorkingSection />
               <ServicesSection services={services} />
               <TestimonialsSection cardsData={cardsData} />
               <FaqSection faqs={faqs} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
               <ContactSection handleCall={handleCall} />
               <Footer handleCall={handleCall} />
          </div>
     )
}

export default MainPage;