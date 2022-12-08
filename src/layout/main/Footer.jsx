// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <Container id="footer" className="px-4 py-4 bg-primary text-white" fluid>
      <div className="container">
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={7}>
            <p className="text-center text-md-start my-auto">
              © 2021 Created by{" "}
              <a
                className="text-white fw-bold text-decoration-none"
                href="https://github.com/JacquelineFM"
              >
                JacquelineFM
              </a>
            </p>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <Row className="text-center align-items-center">
              <Col xs={12} md={1} className="my-1">
                <span className="d-none d-sm-block"></span>
              </Col>
              <Col xs={12} md={3}>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </Col>
              <Col xs={12} md={1} className="my-1">
                <span className="d-none d-sm-block">|</span>
              </Col>
              <Col xs={12} md={3}>
                <a href="#features" className="text-white text-decoration-none">
                  Features
                </a>
              </Col>
              <Col xs={12} md={1} className="my-1">
                <span className="d-none d-sm-block">|</span>
              </Col>
              <Col xs={12} md={3}>
                <a href="#recipes" className="text-white text-decoration-none">
                  Recipes
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
