// react-bootstrap
import { Container } from "react-bootstrap";
// components
import Header from "./components/Header";
import Hero from "./components/Hero";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container className="my-5"></Container>
    </>
  );
};

export default App;
