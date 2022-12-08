// react-bootstrap
import { Container, Row, Col, Stack, Button, Image } from "react-bootstrap";

// ----------------------------------------------------------------------

const Hero = () => {
  return (
    <Container id="home" className="my-7">
      <Row className="align-items-center">
        <Col xs={12} lg={7}>
          <Stack gap={4}>
            <h1 className="display-2 fw-bolder lh-base">
              The best recipes for your favorite{" "}
              <span className="d-inline-block text-secondary py-2 px-3 border border-8 border-secondary">
                drinks
              </span>
            </h1>
            <p className="text-muted fs-4 lh-base">
              Help find the perfect recipe according to a base and a specific
              category previously selected, with the aim that the customer can
              enjoy the preparation of their favorite drink.
            </p>
            <Stack className="col-sm-12 col-md-4">
              <Button
                size="lg"
                variant="primary"
                className="py-2 px-4 rounded-9 border-0"
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Col>
        <Col xs={12} lg={5}>
          <Image alt="hero" src="hero.png" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
