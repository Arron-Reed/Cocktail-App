import { html, render } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { searchCocktails } from "./services/cocktailApiService";
import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar";
import { CocktailList } from "./components/cocktailList/CocktailList";
import { ShoppingList } from "./components/shoppingList/ShoppingList";
import { Toaster } from "./components/toaster/Toaster";

const App = () => {
  const [shoppingList, setShoppingList] = useState(
    new Set(JSON.parse(localStorage.getItem("shoppingList") || "[]"))
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
    setCocktails(results || []);
    setToasterMessage(
      results.length ? "Here are the results." : "No results found."
    );
  };

  // Removes duplicate that are case insensitive (lime juice or Lime juice)
  const capitalizeFirstLetter = (str) =>
    str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

  const handleAddToShoppingList = (ingredients) => {
    const updatedList = new Set([
      ...shoppingList,
      ...ingredients.map(capitalizeFirstLetter),
    ]);
    setShoppingList(updatedList);
    setToasterMessage("Ingredients added to shopping list.");
  };

  const handleRemoveFromShoppingList = (ingredient) => {
    const formattedIngredient = capitalizeFirstLetter(ingredient);
    shoppingList.delete(formattedIngredient);
    setShoppingList(new Set(shoppingList));
    setToasterMessage(`${formattedIngredient} removed from shopping list.`);
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

render(html`<cocktail-app></cocktail-app>`, document.getElementById("root"));

export default App;
