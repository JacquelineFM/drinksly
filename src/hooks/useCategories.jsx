import { useContext } from "react";
// context
import CategoriesContext from "../context/CategoriesProvider";

// ----------------------------------------------------------------------

const useCategories = () => useContext(CategoriesContext);

export default useCategories;
