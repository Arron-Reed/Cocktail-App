import React from "react";
import "./ShoppingList.css";

interface ShoppingListProps {
  ingredients: Set<string>;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ ingredients }) => {
  const ingredientArray = Array.from(ingredients);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul className="printable-list">
        {ingredientArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {ingredientArray.length > 0 && (
        <button onClick={handlePrint}>Print Shopping List</button>
      )}
    </div>
  );
};

export default ShoppingList;
