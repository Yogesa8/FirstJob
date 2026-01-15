import { useState, useEffect } from "react";
import { X, MapPin, Clock, CheckCircle2, ChevronRight, Upload, Globe, Mail, Phone, User, BriefcaseIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function JobDetailModal({ job, onClose }) {
  const [step, setStep] = useState(0); // 0: Details, 1: Basic Info, 2: Professional, 3: Success
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    portfolio: "",
    coverLetter: ""
  });

  // Reset step when job changes
  useEffect(() => {
    setStep(0);
  }, [job]);

  if (!job) return null;

  const handleNext = () => {
    setStep(step + 1)
  };
  const handleFirstSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      toast.error("Full name is required")
      return
    } else if (!formData.email.trim()) {
      toast.error("Email is required")
      return
    } else if (!formData.phone.trim()) {
      toast.error("Phone Numver is required")
      return
    }
    setStep(step + 1)
  };
  const handleBack = () => setStep(step - 1);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formData.resume) {
      toast.error("Resume is required")
      return;
    }
    setStep(3); // Go to success step
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 p-3 shrink-0">
                <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">{job.title}</h2>
                <div className="flex flex-wrap items-center gap-3 text-gray-600 font-medium">
                  <span className="text-orange-600 font-bold">{job.company}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1.5"><Clock size={16} /> {job.jobType}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-indigo-50/50 p-4 rounded border border-indigo-100/50">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Salary Range</p>
                <p className="text-lg font-bold text-indigo-900">{job.salary} <span className="text-sm font-normal text-indigo-600/70">/ year</span></p>
              </div>
              <div className="bg-emerald-50/50 p-4 rounded border border-emerald-100/50">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Experience</p>
                <p className="text-lg font-bold text-emerald-900">{job.experience}</p>
              </div>
              <div className="bg-amber-50/50 p-4 rounded border border-amber-100/50">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">Posted On</p>
                <p className="text-lg font-bold text-amber-900">{new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                About the role
                <div className="h-px flex-1 bg-gray-100 ml-2"></div>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {job.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are looking for a visionary {job.title} to help us build the future of tech. You'll be working with a diverse team of experts to solve complex problems and deliver high-quality solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:border-orange-300 hover:text-orange-600 transition-colors shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-8 border-t border-gray-100 sticky bottom-0 bg-white pb-2">
              <button
                onClick={handleNext}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold text-lg shadow-xl shadow-orange-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Apply for this position
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-widest">
                <span>Step 01</span>
                <div className="h-1 w-12 bg-orange-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-orange-600"></div>
                </div>
              </div>
              <h2 className="text-3xl font-black text-gray-900">Basic Information</h2>
              <p className="text-gray-500">Let's start with your contact details.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-bold transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleFirstSubmit}
                  className="flex-1 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold shadow-lg shadow-orange-100 transition-all"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-widest">
                <span>Step 02</span>
                <div className="h-1 w-12 bg-orange-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-orange-600"></div>
                </div>
              </div>
              <h2 className="text-3xl font-black text-gray-900">Professional Profile</h2>
              <p className="text-gray-500">Showcase your work and experience.</p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Upload Resume (PDF)</label>
                <div className="relative border-2 border-dashed border-gray-200 rounded p-8 text-center hover:border-orange-400 hover:bg-orange-50/30 transition-all cursor-pointer group">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{formData.resume ? formData.resume.name : "Click to upload resume"}</p>
                      <p className="text-sm text-gray-500">Maximum file size 5MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Portfolio Link (Optional)</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="url"
                    placeholder="https://yourportfolio.com"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Why should we hire you?</label>
                <textarea
                  placeholder="Tell us about your experience and what you bring to the table..."
                  rows={4}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-bold transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold shadow-xl shadow-orange-100 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 scale-110">
              <CheckCircle2 size={48} />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-gray-900">Application Sent!</h2>
              <p className="text-gray-500 text-lg max-w-xs mx-auto">
                Good luck, {formData.fullName.split(' ')[0]}! <br />
                {job.company} will review your profile and get back to you soon.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-4 bg-orange-500 text-white rounded font-bold hover:bg-orange-800 transition-all"
            >
              Back to Job Board
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-7xl max-h-[90vh] rounded shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 p-2 bg-white/80 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full border border-gray-100 shadow-sm transition-all active:scale-90"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 scrollbar-hide">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
