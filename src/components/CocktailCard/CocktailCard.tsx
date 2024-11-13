import React from "react";
import { Cocktail } from "../../services/cocktailApiService";
import "./CocktailCard.css";

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToShoppingList: (ingredients: string[]) => void;
}

const CocktailCard: React.FC<CocktailCardProps> = ({
  cocktail,
  onAddToShoppingList,
}) => {
  const ingredients = Object.keys(cocktail)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && cocktail[key as keyof Cocktail]
    )
    .map((key) => cocktail[key as keyof Cocktail] as string);

  return (
    <div className="cocktail-card">
      <div className="image">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="content">
        <h3>{cocktail.strDrink}</h3>
        <p>{cocktail.strInstructions}</p>
        <button onClick={() => onAddToShoppingList(ingredients)}>
          Add to Shopping List
        </button>
      </div>
    </div>
  );
};

export default CocktailCard;
