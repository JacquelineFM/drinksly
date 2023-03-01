import PropTypes from "prop-types";
// react-bootstrap
import { Col, Image } from "react-bootstrap";

// ----------------------------------------------------------------------

const DrinkImage = ({ strDrink, strDrinkThumb }) => {
  const defaultImage = "/default-image.png";
  const imageSource = strDrinkThumb || defaultImage;
  const altText = `Image of ${strDrink || "the drink"}`;

  return (
    <Col xs={12} lg={4}>
      <Image src={imageSource} alt={altText} className="px-0 rounded-4" fluid />
    </Col>
  );
};

export default DrinkImage;

// ----------------------------------------------------------------------

DrinkImage.propTypes = {
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
};
