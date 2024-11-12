import React from "react";
import { Cocktail } from "../../services/cocktailApiService"

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToShoppingList: (ingredients: string[]) => void;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail, onAddToShoppingList }) => {
  const ingredients = Object.keys(cocktail)
    .filter(key => key.startsWith("strIngredient") && cocktail[key as keyof Cocktail])
    .map(key => cocktail[key as keyof Cocktail] as string);

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <button onClick={() => onAddToShoppingList(ingredients)}>Add to Shopping List</button>
    </div>
  );
};

export default CocktailCard;
