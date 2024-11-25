import { html } from "lit-html";
import { component } from "haunted";
import "./ShoppingList.css";

// Retrieve shopping list from localStorage
export const getShoppingList = () => {
  const storedList = localStorage.getItem("shoppingList");
  return new Set(JSON.parse(storedList || "[]"));
};

// Save shopping list to localStorage
export const saveShoppingList = (items) => {
  localStorage.setItem("shoppingList", JSON.stringify([...items]));
};

export const ShoppingList = ({ items, onRemoveItem, onPrint }) => {
  return html`
    <div class="shopping-list">
     <h2>Shopping List</h2>
     <div class="ingredients-container">
      <ul>
        ${Array.from(items).map(
          (item) =>
            html`<li>
              <span class="ingredient-name">${item}</span>
              <button
                @click="${() => onRemoveItem(item)}"
                class="remove-button"
              >
                Remove
              </button>
            </li>`
        )}
      </ul>
      </div>
      <div class="print-button">
        <button @click="${onPrint}">Print Shopping List</button>
      </div>
    </div>
  `;
};

customElements.define(
  "shopping-list",
  component(ShoppingList, { useShadowDOM: false })
);
