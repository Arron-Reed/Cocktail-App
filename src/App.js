import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { searchCocktails } from "./services/cocktailApiService";
import "./App.css";
import "./styles.css";
import "./components/modal/Modal.css";
import { SearchBar } from "./components/searchBar/SearchBar";
import { CocktailList } from "./components/cocktailList/CocktailList";
import {
  ShoppingList,
  getShoppingList,
  saveShoppingList,
} from "./components/shoppingList/ShoppingList";
import { Toaster } from "./components/toaster/Toaster";

const App = () => {
  const [shoppingList, setShoppingList] = useState(getShoppingList());
  const [cocktails, setCocktails] = useState([]);
  const [toasterMessage, setToasterMessage] = useState("");
  const [showShoppingListModal, setShowShoppingListModal] = useState(false);

  // Sync shopping list with localStorage
  useEffect(() => {
    saveShoppingList(shoppingList);
  }, [shoppingList]);

  const handleSearch = async (query) => {
    setToasterMessage("Searching...");
    const results = await searchCocktails(query);
    setCocktails(results || []);
    setToasterMessage(
      results.length ? "Here are the results." : "No results found."
    );
  };

  const capitalizeFirstLetter = (str) =>
    str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

  const handleAddToShoppingList = (ingredients) => {
    const updatedList = new Set([
      ...shoppingList,
      ...ingredients.map(capitalizeFirstLetter),
    ]);
    setShoppingList(updatedList);
    setToasterMessage("Ingredients added to shopping list.");
    setShowShoppingListModal(true);
  };

  const handleRemoveFromShoppingList = (ingredient) => {
    const formattedIngredient = capitalizeFirstLetter(ingredient);
    shoppingList.delete(formattedIngredient);
    setShoppingList(new Set(shoppingList));
    setToasterMessage(`${formattedIngredient} removed from shopping list.`);
  };

  const hideToaster = () => setToasterMessage("");

  const closeShoppingListModal = () => setShowShoppingListModal(false);

  const handlePrint = () => {
    window.print();
  };

  const shoppingListContent = html`
    ${ShoppingList({
      items: shoppingList,
      onRemoveItem: handleRemoveFromShoppingList,
      onPrint: handlePrint,
    })}
  `;

  return html`
    <div class="app-container">
      <header>
        <div class="sb-container">
          ${SearchBar({ onSearch: handleSearch })}
        </div>
        <button
          class="shopping-list-button"
          @click="${() => setShowShoppingListModal(true)}"
        >
          Shopping List
        </button>
      </header>
      <div class="app-content">
        <div class="cocktailList-container">
          ${CocktailList({
            cocktails,
            onAddToShoppingList: handleAddToShoppingList,
          })}
        </div>
        <div class="toaster-container">
          ${Toaster({ message: toasterMessage, onHide: hideToaster })}
        </div>
      </div>
      <reusable-modal
        .show="${showShoppingListModal}"
        .title="Shopping List"
        .content="${shoppingListContent}"
        .onClose="${closeShoppingListModal}"
      ></reusable-modal>
    </div>
  `;
};

customElements.define("cocktail-app", component(App, { useShadowDOM: false }));

export default App;
