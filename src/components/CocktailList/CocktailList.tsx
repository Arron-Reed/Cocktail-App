import React from "react";
import { Cocktail } from "../../services/cocktailApiService";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./CocktailList.css"

interface CocktailListProps {
  cocktails: Cocktail[];
  onAddToShoppingList: (ingredients: string[]) => void;
}

const CocktailList: React.FC<CocktailListProps> = ({
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
