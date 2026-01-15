import { ArrowUpDown } from "lucide-react";

export default function SortDropdown({ onSortChange }) {
  return (
    <div className="relative inline-flex items-center bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="pl-3 text-gray-400">
            <ArrowUpDown size={18} />
        </div>
        <select 
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-transparent border-none text-gray-700 py-2.5 pr-10 pl-2 font-medium focus:ring-0 cursor-pointer outline-none"
        >
            <option value="latest">Latest Postings</option>
            <option value="oldest">Oldest Postings</option>
            <option value="salary_high">Salary: High to Low</option>
            <option value="salary_low">Salary: Low to High</option>
        </select>
    </div>
  );
}