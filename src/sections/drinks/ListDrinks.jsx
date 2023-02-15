// react-bootstrap
import { Row } from "react-bootstrap";
// hooks
import useDrinks from "../../hooks/useDrinks";
//
import Drink from "./Drink";

// ----------------------------------------------------------------------

const ListDrinks = () => {
  const { drinks } = useDrinks();

  return (
    <Row className="g-4m">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default ListDrinks;
