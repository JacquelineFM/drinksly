// react-bootstrap
import { Container } from "react-bootstrap";
// context
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
// layout
import Header from "./layout/main/Header";
import Footer from "./layout/main/Footer";
import Hero from "./layout/drinks/Hero";
import Features from "./layout/drinks/Features";
// sections
import SearchDrinks from "./sections/drinks/SearchDrinks";
import ListDrinks from "./sections/drinks/ListDrinks";
import ModalDrink from "./sections/drinks/ModalDrink";

// ----------------------------------------------------------------------

const App = () => {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <Header />
        <Hero />
        <Features />
        <Container id="recipes" className="my-8">
          <SearchDrinks />
          <ListDrinks />
          <ModalDrink />
        </Container>
        <Footer />
      </DrinksProvider>
    </CategoriesProvider>
  );
};

export default App;
