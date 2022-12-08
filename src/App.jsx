// react-bootstrap
import { Container } from "react-bootstrap";
// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SearchDrinks from "./components/SearchDrinks";
import Footer from "./components/Footer";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Container id="recipes" className="my-8">
        <SearchDrinks />
      </Container>
      <Footer />
    </>
  );
};

export default App;
