import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CocktailList from "./components/CocktailList/CocktailList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Toaster from "./components/Toaster/Toaster";
import { searchCocktails, Cocktail } from "./services/cocktailApiService";
import "./App.css";

const App: React.FC = () => {
  const [shoppingList, setShoppingList] = useState<Set<string>>(() => {
    const savedList = localStorage.getItem("shoppingList");
    return savedList ? new Set(JSON.parse(savedList)) : new Set();
  });
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [toasterMessage, setToasterMessage] = useState("");

  const handleSearch = async (query: string) => {
    setToasterMessage("Searching...");
    const results = await searchCocktails(query);
    if (results && results.length > 0) {
      setCocktails(results);
      setToasterMessage("Here are the results.");
    } else {
      setCocktails([]);
      setToasterMessage("No results found.");
    }
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
    updatedList.delete(ingredient);
    setShoppingList(updatedList);
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

  const hideToaster = () => {
    setToasterMessage("");
  };

  useEffect(() => {
    localStorage.setItem(
      "shoppingList",
      JSON.stringify(Array.from(shoppingList))
    );
  }, [shoppingList]);

  return (
    <div className="app-container">
      <div className="searchbar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="app-container-left">
        <div className="cocktailList-container">
          <CocktailList
            cocktails={cocktails}
            onAddToShoppingList={handleAddToShoppingList}
          />
        </div>
      </div>
      <div className="app-container-right">
        <div className="shopping-list-container">
          <ShoppingList
            ingredients={shoppingList}
            onRemoveItem={handleRemoveFromShoppingList}
          />
        </div>
        <div className="toaster-container">
          <Toaster message={toasterMessage} onHide={hideToaster} />
        </div>
      </div>
    </div>
  );
};

export default App;
