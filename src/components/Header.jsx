// react-bootstrap
import { Navbar, Container, Image, Nav, Stack, Button } from "react-bootstrap";
import { Linkedin, EnvelopeFill, Github } from "react-bootstrap-icons";

// ----------------------------------------------------------------------

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image alt="Drinksly" src="logo.svg" width="150" height="80" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav me-auto" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Stack
                gap={3}
                direction="horizontal"
                className="justify-content-end"
              >
                <Button
                  variant="primary"
                  className="rounded-0"
                  href="https://www.linkedin.com/in/jacqueline-flores-méndez-7521ab177/"
                  target="_blank"
                >
                  <Linkedin />
                </Button>
                <Button
                  variant="primary"
                  className="rounded-0"
                  href="mailto:jfloresm.dev@gmail.com"
                >
                  <EnvelopeFill />
                </Button>
                <Button
                  variant="primary"
                  className="rounded-0"
                  href="https://github.com/JacquelineFM"
                  target="_blank"
                >
                  <Github />
                </Button>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
