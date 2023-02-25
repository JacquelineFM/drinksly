// ----------------------------------------------------------------------

const MAX_INGREDIENTS = 15;

export const getIngredientsList = (recipe) => {
  const ingredients = Array.from({ length: MAX_INGREDIENTS }, (_, i) => i + 1)
    .filter((i) => recipe[`strIngredient${i}`])
    .map((idx) => (
      <>
        <strong>{recipe[`strMeasure${idx}`]}</strong>
        {recipe[`strIngredient${idx}`]}
      </>
    ));

  return ingredients;
};
