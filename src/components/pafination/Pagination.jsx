import React, { useState } from "react";
import NewsPageIcon from "../../pages/news/newsPageIcon/NewsPageIcon";

const Pagination = ({ products, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current page products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Render current products */}
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product, index) => (
          <li
            key={index}
            className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 max-w-[1200px] mx-auto"
          >
            {/* Customize this content */}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex mt-6 space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
