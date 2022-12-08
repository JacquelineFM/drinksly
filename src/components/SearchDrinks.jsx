//
import DrinksForm from "./DrinksForm";

// ----------------------------------------------------------------------

const SearchDrinks = () => {
  return (
    <div className="container justify-content-center">
      <div className="mx-auto py-4">
        <h2 className="fs-2 lh-base fw-bolder text-center">
          <span className="d-block">Recipes for drinks</span>
          <span className="d-block text-secondary">
            Choose a drink to prepare
          </span>
        </h2>
        <DrinksForm />
      </div>
    </div>
  );
};

export default SearchDrinks;
