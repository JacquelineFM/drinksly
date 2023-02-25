import PropTypes from "prop-types";
// react-bootstrap
import { Accordion } from "react-bootstrap";

// ----------------------------------------------------------------------

const Instructions = ({ strInstructions }) => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="fw-bolder">
          <p className="fw-bolder m-0">Instructions</p>
        </Accordion.Header>
        <Accordion.Body>
          <p>{strInstructions}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Instructions;

// ----------------------------------------------------------------------

Instructions.propTypes = {
  strInstructions: PropTypes.string,
};
