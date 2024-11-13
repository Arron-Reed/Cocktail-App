import React from "react";
import "./ShoppingList.css";

interface ShoppingListProps {
  ingredients: Set<string>;
  onRemoveItem: (ingredient: string) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  ingredients,
  onRemoveItem,
}) => {
  const ingredientArray = Array.from(ingredients);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="shopping-list">
      <div className="title">
        <h2>Shopping List</h2>
      </div>
      <div className="ingredients-container">
        <ul>
          {ingredientArray.map((ingredient, index) => (
            <li key={index}>
              <span className="ingredient-name">{ingredient}</span>
              <button onClick={() => onRemoveItem(ingredient)} className="remove-button">
                remove
              </button>
              
            </li>
          ))}
        </ul>
        </div>
        {ingredientArray.length > 0 && (
          <button onClick={handlePrint} className="print-button">Print Shopping List</button>
        )}
      
    </div>
  );
};

export default ShoppingList;
