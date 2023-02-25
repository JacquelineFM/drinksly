import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const TextIconLabel = ({ icon, value, className }) => {
  return (
    <div className={`text-muted d-flex align-items-center ${className}`}>
      {icon}
      {value}
    </div>
  );
};

export default TextIconLabel;

// ----------------------------------------------------------------------

TextIconLabel.propTypes = {
  icon: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
