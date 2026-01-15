import JobCard from "./JobCard";

export default function JobList({ jobs, onJobSelect }) {
  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-gray-700">No jobs found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onSelect={onJobSelect} />
      ))}
    </div>
  );
}