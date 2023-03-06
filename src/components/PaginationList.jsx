import PropTypes from "prop-types";
// react-bootstrap
import { Pagination } from "react-bootstrap";

// ----------------------------------------------------------------------

const PaginationList = ({
  pages,
  currentPage,
  setCurrentPage,
  goToNextPage,
  goToPrevPage,
  goToFirstPage,
  goToLastPage,
}) => {
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  return (
    <Pagination className="justify-content-center">
      <Pagination.First disabled={currentPage === 1} onClick={goToFirstPage} />
      <Pagination.Prev disabled={currentPage === 1} onClick={goToPrevPage} />
      {pageNumbers.map((pgNumber) => (
        <Pagination.Item
          key={pgNumber}
          active={currentPage === pgNumber}
          onClick={() => setCurrentPage(pgNumber)}
        >
          {pgNumber}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === pages}
        onClick={goToNextPage}
      />
      <Pagination.Last
        disabled={currentPage === pages}
        onClick={goToLastPage}
      />
    </Pagination>
  );
};

export default PaginationList;

// ----------------------------------------------------------------------

PaginationList.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired,
  goToFirstPage: PropTypes.func.isRequired,
  goToLastPage: PropTypes.func.isRequired,
};
