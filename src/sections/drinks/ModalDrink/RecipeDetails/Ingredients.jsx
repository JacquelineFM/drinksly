import PropTypes from "prop-types";
// react-bootstrap
import { ListGroup, Accordion } from "react-bootstrap";

// ----------------------------------------------------------------------

const Ingredients = ({ ingredients }) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="fw-bolder">
          <p className="fw-bolder m-0">Ingredients</p>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {ingredients.map((ingredient, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between px-0 bg-light"
              >
                {ingredient}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Ingredients;

// ----------------------------------------------------------------------

Ingredients.propTypes = {
  strInstructions: PropTypes.array,
};
