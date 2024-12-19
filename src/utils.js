export const getIngredientsWithMeasurements = (cocktail) =>
    Object.keys(cocktail)
      .filter((key) => key.startsWith("strIngredient") && cocktail[key])
      .map((ingredientKey) => {
        const index = ingredientKey.replace("strIngredient", "");
        const measurementKey = `strMeasure${index}`;
        return {
          ingredient: cocktail[ingredientKey],
          measurement: cocktail[measurementKey] || "",
        };
      });
  