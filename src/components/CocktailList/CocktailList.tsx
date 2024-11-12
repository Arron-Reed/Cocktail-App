import React from "react";
import { Cocktail } from "../../services/cocktailApiService";
import CocktailCard from "../CocktailCard/CocktailCard";

interface CocktailListProps {
  cocktails: Cocktail[];
  onAddToShoppingList: (ingredients: string[]) => void;
}

const CocktailList: React.FC<CocktailListProps> = ({
  cocktails,
  onAddToShoppingList,
}) => {
  if (cocktails.length === 0) {
    return <p>No cocktails found. Try searching for something else!</p>;
  }

  return (
    <div className="cocktail-list">
      {cocktails.length}

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