import { useContext } from "react";
// context
import DrinksContext from "../context/DrinksProvider";

// ----------------------------------------------------------------------

const useDrinks = () => useContext(DrinksContext);

export default useDrinks;
