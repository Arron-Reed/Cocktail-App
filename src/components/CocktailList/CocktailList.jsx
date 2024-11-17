import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./CocktailList.css"


const CocktailList = ({
  cocktails,
  onAddToShoppingList,
}) => {
  
  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard
          key={cocktail.idDrink}
          cocktail={cocktail}
          onAddToShoppingList={onAddToShoppingList}
        />
      ))}
    </div>
  );
};

export default CocktailList;
