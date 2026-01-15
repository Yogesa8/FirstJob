import { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Laptop,
  Download,
  HelpCircle,
  Star,
  CirclePlus,
} from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useResume } from "../../context/ResumeContext";

import PersonalForm from "./forms/PersonalForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";

import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";

import ResumePDF from "./pdf/ResumePDF";
import OtherForm from "./forms/OtherForm";

const Builder = () => {
  const { resumeData, selectedTemplate } = useResume();
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Laptop },
    { id: "other", label: "Other", icon: CirclePlus },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ================= LEFT PANEL ================= */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Edit Resume</h1>

          {/* Tabs */}
          <div className="flex bg-gray-100 p-1.5 rounded-xl mb-8 overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center w-3xl gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition-all
                  ${
                    activeTab === id
                      ? "bg-white shadow text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          {/* Form Container */}
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold capitalize">
                {activeTab} Information
              </h2>
              <HelpCircle size={18} className="text-gray-400" />
            </div>

            {activeTab === "personal" && <PersonalForm />}
            {activeTab === "experience" && <ExperienceForm />}
            {activeTab === "education" && <EducationForm />}
            {activeTab === "skills" && <SkillsForm />}
            {activeTab === "other" && <OtherForm />}
          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="bg-white rounded-3xl shadow-sm border p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Live Preview</h1>

            <PDFDownloadLink
              document={
                <ResumePDF
                  data={resumeData}
                  selectedTemplate={selectedTemplate}
                />
              }
              fileName={`${resumeData.personal?.fullName || "Resume"}.pdf`}
            >
              {({ loading }) => (
                <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold" disabled>
                  <Download size={18} />
                  {loading ? "Generating..." : "Download PDF"}
                </button>
              )}
            </PDFDownloadLink>
          </div>

          {/* Preview Canvas */}
          <div className="flex-1 bg-gray-50 rounded-2xl border border-dashed p-6 flex justify-center items-start overflow-auto">
            <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] mx-auto" style={{ transformOrigin: "top center" }}>
              {selectedTemplate === "template1" && (
                <Template1 data={resumeData} />
              )}
              {selectedTemplate === "template2" && (
                <Template2 data={resumeData} />
              )}
              {selectedTemplate === "template3" && (
                <Template3 data={resumeData} />
              )}
              {selectedTemplate === "template4" && (
                <Template4 data={resumeData} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Builder;
