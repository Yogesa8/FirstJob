import { useState } from "react";
import { X } from "lucide-react";
import FiltersSidebar from "./FiltersSidebar";

export function MobileFilterDrawer({ setFilters, currentFilters }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-orange-600 text-white px-6 py-3 rounded-full shadow-xl z-40 flex items-center gap-2 hover:bg-orange-700 transition-transform active:scale-95 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        Filters
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm transition-opacity">
          <div className="absolute bottom-0 w-full bg-white rounded-t-2xl h-[80vh] overflow-auto slide-up shadow-2xl">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
              <h2 className="text-lg font-bold text-gray-800">Filter Jobs</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <FiltersSidebar setFilters={setFilters} currentFilters={currentFilters} />
              <button
                onClick={() => setOpen(false)}
                className="w-full mt-4 bg-orange-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-orange-200"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}