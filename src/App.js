import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { searchCocktails } from "./services/cocktailApiService";
import "/src/App.css";
import "/src/styles.css";
import "./components/modal/Modal.css";
import "./components/searchBar/SearchBar";
import "./components/cocktailList/CocktailList";
import "./components/toaster/Toaster";
import {
  ShoppingList,
  getShoppingList,
  saveShoppingList,
} from "./components/shoppingList/ShoppingList";

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
    <shopping-list
      .items =${shoppingList}
      .onRemoveItem =${handleRemoveFromShoppingList}
      .onPrint =${handlePrint}
    ></shopping-list>
  `;

  return html`
  <link rel="stylesheet" href="/src/App.css" />
  <link rel="stylesheet" href="/src/styles.css" />
    <div class="app-container">
      <header>
        <div class="sb-container">
          <search-bar .onSearch=${handleSearch}></search-bar>
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
          <cocktail-list
            .cocktails=${cocktails}
            .onAddToShoppingList=${handleAddToShoppingList}
          ></cocktail-list>
        </div>
        <div class="toaster-container">
          <toaster-message .message=${toasterMessage} .onHide=${hideToaster}>
          </toaster-message>
        </div>
      </div>
      <popup-modal
        .show="${showShoppingListModal}"
        .title="Shopping List"
        .content="${shoppingListContent}"
        .onClose="${closeShoppingListModal}"
      ></popup-modal>
    </div>
  `;
};

customElements.define("cocktail-app", component(App));
