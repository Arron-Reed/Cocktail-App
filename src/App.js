import { html, render } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { searchCocktails } from "./services/cocktailApiService";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CocktailList } from "./components/CocktailList/CocktailList";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { Toaster } from "./components/Toaster/Toaster";

const App = () => {
  const [shoppingList, setShoppingList] = useState(
    new Set(JSON.parse(localStorage.getItem("shoppingList")) || [])
  );
  const [cocktails, setCocktails] = useState([]);
  const [toasterMessage, setToasterMessage] = useState("");

  // Update local storage when shoppingList changes
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify([...shoppingList]));
  }, [shoppingList]);

  const handleSearch = async (query) => {
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

  const handleAddToShoppingList = (ingredients) => {
    const updatedIngredients = removeCaseInsensitiveDuplicates([
      ...Array.from(shoppingList),
      ...ingredients,
    ]);
    setShoppingList(new Set(updatedIngredients));
    setToasterMessage("Ingredients added to shopping list.");
  };

  const handleRemoveFromShoppingList = (ingredient) => {
    const updatedList = new Set(shoppingList);
    updatedList.delete(ingredient);
    setShoppingList(updatedList);
    setToasterMessage(`${ingredient} removed from shopping list.`);
  };

  // Remove duplicates case-insensitively
  const removeCaseInsensitiveDuplicates = (arr) => {
    return Array.from(
      arr
        .reduce((map, item) => {
          map.set(item.toLowerCase(), item);
          return map;
        }, new Map())
        .values()
    );
  };

  const hideToaster = () => setToasterMessage("");

  return html`
    <div class="app-container">
      <div class="searchbar-container">
        ${SearchBar({ onSearch: handleSearch })}
      </div>
      <div class="app-content">
        <div class="app-container-left">
          <div class="cocktailList-container">
            ${CocktailList({
              cocktails,
              onAddToShoppingList: handleAddToShoppingList,
            })}
          </div>
        </div>
        <div class="app-container-right">
          <div class="shopping-list-container">
            ${ShoppingList({
              ingredients: shoppingList,
              onRemoveItem: handleRemoveFromShoppingList,
            })}
          </div>
        </div>
        <div class="toaster-container">
          ${Toaster({ message: toasterMessage, onHide: hideToaster })}
        </div>
      </div>
    </div>
  `;
};

customElements.define("cocktail-app", component(App, { useShadowDOM: false }));

const root = document.getElementById("root");
render(html`<cocktail-app></cocktail-app>`, root);

export default App;
