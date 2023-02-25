import PropTypes from "prop-types";
// react-bootstrap
import { Container, Row } from "react-bootstrap";
// utils
import { getIngredientsList } from "../../../utils/ingredients";
//
import DrinkImage from "./DrinkImage";
import DrinkInfo from "./DrinkInfo";
import RecipeDetails from "./RecipeDetails";

// ----------------------------------------------------------------------

const ModalBody = ({ recipe }) => {
  const { strDrink = "", strDrinkThumb = "", strInstructions = "" } = recipe;
  const ingredientsList = getIngredientsList(recipe) ?? [];

  return (
    <Container className="p-0">
      {/* Image & Information*/}
      <Row className="g-4">
        <DrinkImage strDrink={strDrink} strDrinkThumb={strDrinkThumb} />
        <DrinkInfo recipe={recipe} />
      </Row>

      {/* Ingredients & Instructions */}
      {(strInstructions || Boolean(ingredientsList.length)) && (
        <RecipeDetails
          ingredients={ingredientsList}
          strInstructions={strInstructions}
        />
      )}
    </Container>
  );
};

export default ModalBody;

// ----------------------------------------------------------------------

ModalBody.propTypes = {
  recipe: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};
