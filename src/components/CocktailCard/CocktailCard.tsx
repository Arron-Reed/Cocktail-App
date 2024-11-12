import React from "react";
import { Cocktail } from "../../services/cocktailApiService";

interface CocktailCardProps {
  cocktail: Cocktail;
  
}

const CocktailCard: React.FC<CocktailCardProps> = ({
  cocktail,
 
}) => {
  const ingredients = Object.keys(cocktail)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && cocktail[key as keyof Cocktail]
    )
    .map((key) => cocktail[key as keyof Cocktail] as string);

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <p>{ingredients}</p>
    </div>
  );
};

export default CocktailCard;
