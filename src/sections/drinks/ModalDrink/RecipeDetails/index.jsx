import PropTypes from "prop-types";
// react-bootstrap
import { Row, Col } from "react-bootstrap";
//
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

// ----------------------------------------------------------------------

const RecipeDetails = ({ ingredients, strInstructions }) => (
  <Row className="mt-4">
    {Boolean(ingredients.length) && (
      <Col xs={12} md={12} lg={strInstructions ? 6 : 12}>
        <Ingredients ingredients={ingredients} />
      </Col>
    )}
    {strInstructions && (
      <Col xs={12} md={12} lg={ingredients.length ? 6 : 12}>
        <Instructions strInstructions={strInstructions} />
      </Col>
    )}
  </Row>
);

export default RecipeDetails;

// ----------------------------------------------------------------------

RecipeDetails.propTypes = {
  ingredients: PropTypes.array,
  strInstructions: PropTypes.string,
};
