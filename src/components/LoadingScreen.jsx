import PropTypes from "prop-types";
// react-bootstrap
import { Spinner } from "react-bootstrap";

// ----------------------------------------------------------------------

const LoadingScreen = ({ variant, animation, className }) => {
  return (
    <Spinner
      variant={variant}
      animation={animation}
      className={`d-flex mx-auto ${className}`}
    />
  );
};

export default LoadingScreen;

// ----------------------------------------------------------------------

LoadingScreen.propTypes = {
  variant: PropTypes.string.isRequired,
  animation: PropTypes.string,
  className: PropTypes.string,
};

LoadingScreen.defaultProps = {
  variant: "primary",
  animation: "border",
  className: "",
};
