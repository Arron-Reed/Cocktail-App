import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CocktailList from "./components/CocktailList/CocktailList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Toaster from "./components/Toaster/Toaster";
import { searchCocktails, Cocktail } from "./services/cocktailApiService";

const App: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState(new Set<string>());
  const [toasterMessage, setToasterMessage] = useState("");

  const handleSearch = async (query: string) => {
    setToasterMessage("Searching...");
    const results = await searchCocktails(query);
    setCocktails(results || []);
    setToasterMessage(results ? "Here are the results." : "No results found.");
  };

  const handleAddToShoppingList = (ingredients: string[]) => {
    const updatedIngredients = removeCaseInsensitiveDuplicates([
      ...Array.from(shoppingList),
      ...ingredients,
    ]);
    setShoppingList(new Set(updatedIngredients));
    setToasterMessage("Ingredients added to shopping list.");
  };

  const handleRemoveFromShoppingList = (ingredient: string) => {
    const updatedList = new Set(shoppingList);
    updatedList.delete(ingredient); // Remove the specified ingredient
    setShoppingList(updatedList); // Update the state with the modified list
    setToasterMessage(`${ingredient} removed from shopping list.`);
  };

  // Removes case-insensitive duplicate ingredients (eg Lime juice, Lime Juice)
  function removeCaseInsensitiveDuplicates(arr: string[]): string[] {
    return Array.from(
      arr
        .reduce((map, item) => {
          map.set(item.toLowerCase(), item);
          return map;
        }, new Map())
        .values()
    );
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster message={toasterMessage} />
      <CocktailList
        cocktails={cocktails}
        onAddToShoppingList={handleAddToShoppingList}
      />
      <ShoppingList
        ingredients={shoppingList}
        onRemoveItem={handleRemoveFromShoppingList}
      />
    </div>
  );
};

export default App;
