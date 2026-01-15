import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../../data/jobs.json";
import JobSearchBar from "./components/JobSearchBar";
import FiltersSidebar from "./components/FiltersSidebar";
import SortDropdown from "./components/SortDropdown";
import Pagination from "./components/Pagination";
import JobList from "./components/JobList";
import { MobileFilterDrawer } from "./components/MobileFilterDrawer";
import JobDetailModal from "./components/JobDetailModal";
import Recommended from "./components/Recommended";
import Header from "../../components/common/Header";

export default function JobsPage() {
  const [jobs, setJobs] = useState(jobsData.jobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    jobType: [],
    experience: [],
    postedDate: [],
    keyword: "",
    location: ""
  });

  // New States for Sorting and Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("latest");
  const itemsPerPage = 6; // Increased items per page

  const navigate = useNavigate();

  // 1. Filter Logic
  const filteredJobs = useMemo(() => {
    let result = jobsData.jobs;

    // Keyword filter
    if (filters.keyword) {
      const term = filters.keyword.toLowerCase();
      result = result.filter((job) =>
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }

    // Location filter
    if (filters.location) {
      const loc = filters.location.toLowerCase();
      result = result.filter((job) =>
        job.location.toLowerCase().includes(loc)
      );
    }

    // JobType filter (multi-select)
    if (filters.jobType.length > 0) {
      result = result.filter((job) =>
        filters.jobType.includes(job.jobType)
      );
    }

    // Experience filter (multi-select)
    if (filters.experience.length > 0) {
      result = result.filter((job) =>
        filters.experience.includes(job.experience)
      );
    }

    // Posted Date filter
    if (filters.postedDate.length > 0) {
      result = result.filter((job) => {
        const jobDate = new Date(job.postedDate);
        const now = new Date();
        const diff = (now - jobDate) / (1000 * 60 * 60 * 24);

        if (filters.postedDate.includes("24h") && diff <= 1) return true;
        if (filters.postedDate.includes("7d") && diff <= 7) return true;
        if (filters.postedDate.includes("30d") && diff <= 30) return true;
        return false;
      });
    }

    return result;
  }, [filters]);

  // 2. Sort Logic
  const sortedJobs = useMemo(() => {
    let sorted = [...filteredJobs];

    switch (sortOption) {
      case "latest":
        sorted.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
        break;
      case "salary_high":
        sorted.sort((a, b) => (b.salaryMin || 0) - (a.salaryMin || 0));
        break;
      case "salary_low":
        sorted.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredJobs, sortOption]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(sortedJobs.length / itemsPerPage);

  // Reset to page 1 if filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption]);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedJobs.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedJobs, currentPage]);

  const handleResetFilters = () => {
    setFilters({
      jobType: [],
      experience: [],
      postedDate: [],
      keyword: "",
      location: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/80 pb-20 font-sans">
      <Header />
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C1E1C1,transparent)] opacity-20"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:max-w-[70%]">
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Explore <span className="text-orange-600 font-semibold">{jobsData.jobs.length}+</span> high-impact opportunities from top-tier tech companies and innovative startups.
          </p>
          <div className="bg-white p-1 shadow-xl border border-gray-100 backdrop-blur-sm">
            <JobSearchBar setFilters={setFilters} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden w-[20%] lg:block shrink-0">
            <div className="sticky top-8 space-y-6">
              <FiltersSidebar setFilters={setFilters} currentFilters={filters} />
              <button
                onClick={handleResetFilters}
                className="w-full py-3 px-4 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-orange-600 transition-all shadow-sm"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  Open Positions
                  <span className="bg-orange-50 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-100">
                    {sortedJobs.length} Results
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-medium hidden sm:block">Sort by:</span>
                <SortDropdown onSortChange={(val) => setSortOption(val)} />
              </div>
            </div>

            {paginatedJobs.length > 0 ? (
              <JobList jobs={paginatedJobs} onJobSelect={setSelectedJob} />
            ) : (
              <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-20 text-center">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 text-gray-400 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No jobs match your criteria</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden w-[20%] lg:block shrink-0">
            <div className="sticky top-8 space-y-6">
              <Recommended />
            </div>
          </aside>
        </div>
      </div>

      {/* MOBILE FILTER BUTTON */}
      <MobileFilterDrawer setFilters={setFilters} currentFilters={filters} />

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}