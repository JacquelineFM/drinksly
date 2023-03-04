// react-bootstrap
import { Row } from "react-bootstrap";
// components
import PaginationList from "../../components/PaginationList";
// hooks
import useDrinks from "../../hooks/useDrinks";
import usePagination from "../../hooks/usePagination";
//
import Drink from "./Drink";

// ----------------------------------------------------------------------

const ListDrinks = () => {
  const { drinks } = useDrinks();
  const {
    currentPage,
    currentItems,
    goToNextPage,
    goToPrevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
    totalPages,
  } = usePagination(drinks, 16);

  return (
    <Row className="g-4m">
      {currentItems.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
      {Boolean(currentItems.length) && (
        <PaginationList
          pages={totalPages}
          currentPage={currentPage}
          setCurrentPage={goToPage}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
        />
      )}
    </Row>
  );
};

export default ListDrinks;
