import React, { useState } from 'react';
import { CompanySidebar } from './CompanySidebar';
import { 
  Send, 
  X, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Calendar,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Plus
} from 'lucide-react';

const PostJob = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen bg-[#F8FAFC]">
        <CompanySidebar />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl shadow-primary/10 border border-slate-100 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-success/10 text-success rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">Job Published!</h2>
            <p className="text-slate-500 font-medium mb-10">Your job listing is now live and visible to thousands of potential candidates.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn btn-primary btn-block rounded-2xl h-14 normal-case font-bold text-lg"
            >
              Post Another Job
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <CompanySidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              <span>Company</span>
              <ChevronRight size={10} />
              <span className="text-primary">Create Listing</span>
            </nav>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">Post a New Position</h1>
            <p className="text-slate-500 font-medium mt-1">Fill in the details below to find your next great hire.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info Section */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Briefcase size={18} />
                  </div>
                  Core Details
                </h2>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Job Title</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Senior Frontend Developer" 
                    className="input bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 font-medium"
                    required
                  />
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Job Description</span>
                  </label>
                  <textarea 
                    className="textarea bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl min-h-[200px] p-5 font-medium leading-relaxed" 
                    placeholder="Describe the role, responsibilities, and what makes your company special..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Logistics Section */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  Logistics & Compensation
                </h2>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Location</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="City, State or Remote" className="input bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 pl-12 font-medium w-full" />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Salary Range</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="e.g. $100k - $120k" className="input bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 pl-12 font-medium w-full" />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Job Type</span>
                  </label>
                  <select className="select bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 font-bold text-slate-700">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                    <option>Freelance</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Work Mode</span>
                  </label>
                  <select className="select bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 font-bold text-slate-700">
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Experience Required</span>
                  </label>
                  <select className="select bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 font-bold text-slate-700">
                    <option>Entry Level</option>
                    <option>Intermediate (1-3 yrs)</option>
                    <option>Senior (5+ yrs)</option>
                    <option>Lead / Management</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-slate-600">Application Deadline</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="date" className="input bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 pl-12 font-bold text-slate-700 w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                    <Plus size={18} />
                  </div>
                  Required Skills
                </h2>
              </div>
              <div className="p-8">
                <div className="form-control mb-6">
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill(e)}
                      placeholder="Add a skill (e.g. React, Node.js, AWS)" 
                      className="input flex-1 bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 rounded-2xl h-14 font-medium"
                    />
                    <button 
                      type="button"
                      onClick={addSkill}
                      className="btn btn-secondary h-14 w-14 rounded-2xl p-0"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills.length === 0 && (
                    <div className="w-full py-8 text-center border-2 border-dashed border-slate-100 rounded-[2rem]">
                      <p className="text-sm font-bold text-slate-300 uppercase tracking-widest">No skills added yet</p>
                    </div>
                  )}
                  {skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary/5 text-primary rounded-xl font-bold text-sm border border-primary/10 animate-in zoom-in"
                    >
                      {skill}
                      <button 
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-error transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4 pb-12">
              <button type="button" className="btn btn-ghost text-slate-400 font-bold normal-case px-8 rounded-2xl">
                Discard Draft
              </button>
              <button type="submit" className="btn btn-primary min-w-[200px] h-14 rounded-2xl shadow-xl shadow-primary/20 normal-case font-black text-lg gap-3">
                <Send size={20} />
                Publish Listing
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
