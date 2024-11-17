import React from "react";
import "./CocktailCard.css";

const CocktailCard = ({
  cocktail,
  onAddToShoppingList,
}) => {
  const ingredients = Object.keys(cocktail)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && cocktail[key]
    )
    .map((key) => cocktail[key]);

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
