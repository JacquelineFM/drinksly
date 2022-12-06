// react-bootstrap
import { Container } from "react-bootstrap";
// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Container className="my-5"></Container>
    </>
  );
};

export default App;
