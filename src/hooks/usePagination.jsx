import { useState, useEffect } from "react";

// ----------------------------------------------------------------------

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  const currentItems = items.slice(startIndex, endIndex);

  const goToNextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

  const goToPrevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const goToPage = (pageNumber) =>
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));

  const goToFirstPage = () => setCurrentPage(1);

  const goToLastPage = () => setCurrentPage(totalPages);

  return {
    currentPage,
    currentItems,
    goToNextPage,
    goToPrevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
    totalPages,
  };
};

export default usePagination;
