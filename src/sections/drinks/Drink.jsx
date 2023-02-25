import PropTypes from "prop-types";
// react-bootstrap
import { Col, Card, Button } from "react-bootstrap";
// hooks
import useDrinks from "../../hooks/useDrinks";

// ----------------------------------------------------------------------

const Drink = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  const { handleModalClick, handleDrinkIdClick } = useDrinks();

  const handleClick = () => {
    handleModalClick();
    handleDrinkIdClick(idDrink);
  };

  return (
    <Col md={6} lg={3}>
      <Card border="light" bg="light" className="rounded-4 shadow-sm p-2">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Image of ${strDrink}`}
          className="rounded-4"
        />
        <Card.Body>
          <Card.Subtitle className="text-truncate mt-1">
            {strDrink}
          </Card.Subtitle>
          <Button
            variant="primary"
            className="w-100 mt-3"
            onClick={handleClick}
          >
            See recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;

// ----------------------------------------------------------------------

Drink.propTypes = {
  drink: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};
