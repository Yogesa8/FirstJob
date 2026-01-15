import { Bookmark, MapPin, Briefcase, DollarSign, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function JobCard({ job, onSelect }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white p-6 rounded shadow-sm hover:shadow-xl hover:shadow-orange-100/50 border border-gray-100 transition-all duration-500 flex flex-col gap-6 group relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-orange-50 rounded-full blur-2xl group-hover:bg-orange-100 transition-colors duration-500"></div>

      {/* Header Section */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex gap-4 items-center">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-orange-100 transition-colors duration-500 p-2">
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>
          </div>

          <div className="cursor-pointer" onClick={() => onSelect(job)}>
            <h2 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
              {job.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-600 font-semibold text-sm">{job.company}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-gray-400 text-xs flex items-center gap-1 w-auto">
                <Clock size={12} /> {job.jobType}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`p-2.5 rounded-xl transition-all duration-300 ${isBookmarked ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
        >
          <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} strokeWidth={2} />
        </button>
      </div>

      {/* Description Preview (Optional/Added) */}
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
        We are looking for a talented {job.title} to join our growing team. You will work on high-impact projects and collaborate with world-class engineers.
      </p>

      {/* Meta Information Grid */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        <div className="flex items-center gap-2.5 text-sm text-gray-600 bg-gray-50/50 p-2.5 rounded-2xl border border-gray-50 group-hover:border-orange-50 transition-colors">
          <MapPin size={16} className="text-orange-400" />
          <span className="font-medium truncate">{job.location}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-gray-600 bg-gray-50/50 p-2.5 rounded-2xl border border-gray-50 group-hover:border-orange-50 transition-colors">
          <Briefcase size={16} className="text-orange-400" />
          <span className="font-medium truncate">{job.experience}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-gray-600 bg-gray-50/50 p-2.5 rounded-2xl border border-gray-50 group-hover:border-orange-50 transition-colors col-span-2">
          <DollarSign size={16} className="text-orange-400" />
          <span className="font-bold text-gray-900">{job.salary}</span>
          <span className="text-gray-400 font-normal">/ annum</span>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-2">
        {job.skills.slice(0, 4).map((skill, i) => (
          <span
            key={i}
            className="text-[11px] font-bold uppercase tracking-wider bg-orange-50/50 text-orange-700 px-3 py-1.5 rounded-full border border-orange-100/50 group-hover:bg-orange-100 transition-colors"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="text-[11px] font-bold text-gray-400 px-2 py-1.5">+{job.skills.length - 4}</span>
        )}
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(job)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded text-white font-bold shadow-xl shadow-gray-200 hover:shadow-orange-200 transition-all duration-300 active:scale-95"
        >
          Apply Now
          <ArrowUpRight size={18} />
        </button>
        {/* <button 
          onClick={() => onSelect(job)}
          className="p-3.5 w-auto bg-white border border-gray-200 hover:border-orange-200 text-gray-600 rounded hover:text-orange-600 transition-all duration-300"
        >
          Details
        </button> */}
      </div>
    </div>
  );
}