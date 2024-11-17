import { html } from "lit-html";
import { component } from "haunted";
import "./ShoppingList.css";

export const ShoppingList = ({ ingredients = new Set(), onRemoveItem }) => {
  const ingredientArray = Array.from(ingredients);

  const handlePrint = () => {
    window.print();
  };

  return html`
    <div class="shopping-list">
      <div class="title">
        <h2>Shopping List</h2>
      </div>
      <div class="ingredients-container">
        <ul>
          ${ingredientArray.map(
            (ingredient) => html`
              <li>
                <span class="ingredient-name">${ingredient}</span>
                <button
                  @click="${() => onRemoveItem(ingredient)}"
                  class="remove-button"
                >
                  remove
                </button>
              </li>
            `
          )}
        </ul>
      </div>
      <div class="print-button">
        ${ingredientArray.length > 0
          ? html`<button @click="${handlePrint}">Print Shopping List</button>`
          : ""}
      </div>
    </div>
  `;
};

customElements.define(
  "shopping-list",
  component(ShoppingList, { useShadowDOM: false })
);
