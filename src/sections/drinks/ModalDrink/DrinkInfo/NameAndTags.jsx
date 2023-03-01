import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const NameAndTags = ({ strDrink, tags }) => {
  return (
    <div>
      {strDrink && <h3 className="fw-bold m-0">{strDrink}</h3>}
      {Boolean(tags.length) && <div className="mt-1">{tags}</div>}
    </div>
  );
};

export default NameAndTags;

// ----------------------------------------------------------------------

NameAndTags.propTypes = {
  strDrink: PropTypes.string.isRequired,
  tags: PropTypes.array,
};
