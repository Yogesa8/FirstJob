import { Filter, ChevronRight } from "lucide-react";

export default function FiltersSidebar({ setFilters, currentFilters = { jobType: [], experience: [], postedDate: [] } }) {
  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((x) => x !== value)
        : [...prev[type], value];

      return { ...prev, [type]: updated };
    });
  };

  const FilterCheckbox = ({ label, type, value }) => {
    const isChecked = (currentFilters[type] || []).includes(value);

    return (
      <label className="flex items-center gap-3 mb-2 cursor-pointer group select-none">
        <div className="relative">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isChecked}
            onChange={() => toggleFilter(type, value)}
          />
          <div className={`w-5 h-5 border-2 rounded-lg transition-all duration-300 flex items-center justify-center ${isChecked ? 'bg-orange-600 border-orange-600 scale-110 shadow-lg shadow-orange-100' : 'border-gray-200 group-hover:border-orange-300 bg-white'}`}>
            <svg className={`w-3 h-3 text-white transition-opacity duration-300 ${isChecked ? 'opacity-100' : 'opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className={`text-sm font-medium transition-colors duration-200 ${isChecked ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`}>
          {label}
        </span>
      </label>
    );
  };

  const SectionTitle = ({ children }) => (
    <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest flex items-center justify-between border-b border-gray-50 pb-2">
      {children}
      <ChevronRight size={12} className="text-gray-300" />
    </h3>
  );

  return (
    <div className="space-y-8 bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-orange-600">
        <Filter size={18} />
        <span className="font-bold tracking-tight">Filters</span>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest flex items-center justify-between border-b border-gray-50 pb-2">Job Type</h3>
        <div className="space-y-1">
          {["Full Time", "Part Time", "Internship", "Remote"].map((item) => (
            <FilterCheckbox key={item} label={item} type="jobType" value={item} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest flex items-center justify-between border-b border-gray-50 pb-2">Experience Level</h3>
        <div className="space-y-1">
          {["0-1 years", "1-3 years", "3-5 years", "5+ years"].map((item) => (
            <FilterCheckbox key={item} label={item} type="experience" value={item} />
          ))}
        </div>
      </div>

      {/* Posted Date */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest flex items-center justify-between border-b border-gray-50 pb-2">Posted Date</h3>
        <div className="space-y-1">
          {[
            { label: "Last 24 hours", key: "24h" },
            { label: "Last 7 days", key: "7d" },
            { label: "Last 30 days", key: "30d" }
          ].map((item) => (
            <FilterCheckbox key={item.key} label={item.label} type="postedDate" value={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
}