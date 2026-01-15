import { Search, MapPin, X } from "lucide-react";
import { useState } from "react";

export default function JobSearchBar({ setFilters }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleKeywordChange = (val) => {
    setKeyword(val);
    setFilters((prev) => ({ ...prev, keyword: val }));
  };

  const handleLocationChange = (val) => {
    setLocation(val);
    setFilters((prev) => ({ ...prev, location: val }));
  };

  const clearKeyword = () => handleKeywordChange("");
  const clearLocation = () => handleLocationChange("");

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 p-1">
      {/* Keyword Search */}
      <div className="flex-1 flex items-center gap-3 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-orange-100 transition-all group border border-transparent focus-within:border-orange-200">
        <Search className="text-gray-400 group-focus-within:text-orange-600 transition-colors" size={20} />
        <input
          type="text"
          value={keyword}
          placeholder="Job title or company"
          onChange={(e) => handleKeywordChange(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 font-medium"
        />
        {keyword && (
          <button onClick={clearKeyword} className="text-gray-300 hover:text-gray-500">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="hidden md:block w-px h-8 bg-gray-100"></div>

      {/* Location Search */}
      <div className="flex-1 flex items-center gap-3 bg-white px-4 py-3 rounded-xl focus-within:ring-2 focus-within:ring-orange-100 transition-all group border border-transparent focus-within:border-orange-200">
        <MapPin className="text-gray-400 group-focus-within:text-orange-600 transition-colors" size={20} />
        <input
          type="text"
          value={location}
          placeholder="Location or 'Remote'"
          onChange={(e) => handleLocationChange(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 font-medium"
        />
        {location && (
          <button onClick={clearLocation} className="text-gray-300 hover:text-gray-500">
            <X size={16} />
          </button>
        )}
      </div>

      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 shadow-lg shadow-orange-200 transition-all active:scale-95 flex items-center justify-center gap-2">
        <Search size={18} />
        <span>Search</span>
      </button>
    </div>
  );
}