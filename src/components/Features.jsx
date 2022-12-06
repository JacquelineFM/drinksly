// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// ----------------------------------------------------------------------

const Features = () => {
  return (
    <Container id="features" className="px-4 py-5 bg-primary text-white" fluid>
      <div className="mb-4 text-center">
        <h2 className="fs-5 fw-bold text-uppercase">Features</h2>
        <p className="mt-2 fs-2 lh-base fw-bolder">
          A better way to enjoy your drinks
        </p>
      </div>
      <div className="container">
        <Row>
          <Col xs={12} lg={4}>
            <div className="d-flex lh-base mt-4">
              <div className="d-flex align-items-center justify-content-center h-25 p-2 text-white bg-secondary rounded-2 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="img-fluid"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h5 className="fs-5 fw-bold">Best drink recipes</h5>
                <p className="mt-2 fs-6">
                  Find the best way to prepare your favorite drink with just one
                  click!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="d-flex lh-base mt-4">
              <div className="d-flex align-items-center justify-content-center h-25 p-2 text-white bg-secondary rounded-2 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="img-fluid"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h5 className="fs-5 fw-bold">Easy to consult</h5>
                <p className="mt-2 fs-6">
                  Choose the drink and type you're looking to prepare and voila,
                  you'll have a list full of options!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="d-flex lh-base mt-4">
              <div className="d-flex align-items-center justify-content-center h-25 p-2 text-white bg-secondary rounded-2 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="img-fluid"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h5 className="fs-5 fw-bold">Variety of recipes</h5>
                <p className="mt-2 fs-6">
                  Thanks to our system, we offer you multiple drink recipes for
                  any occasion.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Features;
