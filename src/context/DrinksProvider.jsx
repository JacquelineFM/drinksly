import axios from "axios";
import { useState, useEffect, createContext } from "react";

// ----------------------------------------------------------------------

const DrinksContext = createContext();

// ----------------------------------------------------------------------

const DrinksProvider = ({ children }) => {
  const [drinkId, setDrinkId] = useState(null);
  const [drinks, setDrinks] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getRecipe = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);

        setRecipe(data.drinks[0]);
      } catch (error) {
        throw new Error("Error getting the recipe for the drink.");
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [drinkId]);

  const getDrinks = async (dataSearched) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${dataSearched.name}&c=${dataSearched.category}`;
      const { data } = await axios(url);

      setDrinks(data.drinks);
    } catch (error) {
      throw new Error("Error getting the drinks");
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkIdClick = (idDrink) => {
    setDrinkId(idDrink);
  };

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        recipe,
        modal,
        loading,
        getDrinks,
        handleModalClick,
        handleDrinkIdClick,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
