// react-bootstrap
import { Container } from "react-bootstrap";
// layout
import Header from "./layout/main/Header";
import Footer from "./layout/main/Footer";
import Hero from "./layout/drinks/Hero";
import Features from "./layout/drinks/Features";
// sections
import SearchDrinks from "./sections/drinks/SearchDrinks";

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
