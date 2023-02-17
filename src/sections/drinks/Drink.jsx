// react-bootstrap
import { Col, Card, Button } from "react-bootstrap";

// ----------------------------------------------------------------------

const Drink = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;

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
          <Button variant="primary" className="w-100 mt-3">
            Get recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
