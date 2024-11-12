import React from 'react';

interface ShoppingListProps {
  ingredients: Set<string>;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ ingredients }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {[...ingredients].map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={() => window.print()}>Print Shopping List</button>
    </div>
  );
};

export default ShoppingList;