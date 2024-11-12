import React from "react";
import { Cocktail } from "../../services/cocktailApiService";
import CocktailCard from "../CocktailCard/CocktailCard";

interface CocktailListProps {
  cocktails: Cocktail[];
  
}

const CocktailList: React.FC<CocktailListProps> = ({
  cocktails,
  
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
         
        />
      ))}
    </div>
  );
};

export default CocktailList;
