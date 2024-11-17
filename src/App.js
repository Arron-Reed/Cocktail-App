import { html, render } from "lit-html";
import { searchCocktails } from "./services/cocktailApiService";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CocktailList } from "./components/CocktailList/CocktailList";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { Toaster } from "./components/Toaster/Toaster";

let shoppingList = new Set(
  JSON.parse(localStorage.getItem("shoppingList")) || []
);
let cocktails = [];
let toasterMessage = "";

const updateLocalStorage = () => {
  localStorage.setItem("shoppingList", JSON.stringify([...shoppingList]));
};

const handleSearch = async (query) => {
  toasterMessage = "Searching...";
  updateApp();
  const results = await searchCocktails(query);
  if (results && results.length > 0) {
    cocktails = results;
    toasterMessage = "Here are the results.";
  } else {
    cocktails = [];
    toasterMessage = "No results found.";
  }
  updateApp();
};

const handleAddToShoppingList = (ingredients) => {
  const updatedIngredients = removeCaseInsensitiveDuplicates([
    ...Array.from(shoppingList),
    ...ingredients,
  ]);
  shoppingList = new Set(updatedIngredients);
  toasterMessage = "Ingredients added to shopping list.";
  updateLocalStorage();
  updateApp();
};

const handleRemoveFromShoppingList = (ingredient) => {
  shoppingList.delete(ingredient);
  toasterMessage = `${ingredient} removed from shopping list.`;
  updateLocalStorage();
  updateApp();
};

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

const hideToaster = () => {
  toasterMessage = "";
  updateApp();
};

// Main App Template
export const App = () => html`
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

// Update Function
const updateApp = () => {
  const root = document.getElementById("root");
  render(App(), root);
};

// Initial Render
updateApp();

export default App;