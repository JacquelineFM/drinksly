import axios from "axios";
import { useState, createContext } from "react";

// ----------------------------------------------------------------------

const DrinksContext = createContext();

// ----------------------------------------------------------------------

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async (dataSearched) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${dataSearched.name}&c=${dataSearched.category}`;
      const { data } = await axios(url);

      setDrinks(data.drinks);
    } catch (error) {
      throw new Error("Error getting the drinks");
    }
  };

  return (
    <DrinksContext.Provider value={{ getDrinks, drinks }}>
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
