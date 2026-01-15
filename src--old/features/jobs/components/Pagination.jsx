export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Generate page numbers (simple logic: 1, 2, ..., current)
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (
        (i === currentPage - 2 && i > 1) || 
        (i === currentPage + 2 && i < totalPages)
      ) {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={index} className="px-2 text-gray-400">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              currentPage === page
                ? 'bg-orange-600 text-white shadow-md shadow-blue-200'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {page}
          </button>
        )
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`p-2 rounded-lg border ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
      >
        Next
      </button>
    </div>
  );
}