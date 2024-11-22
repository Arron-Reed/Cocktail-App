import { html } from "lit-html";
import { component } from "haunted";
import "./ShoppingList.css";

export const ShoppingList = ({ items, onRemoveItem, onPrint }) => {
  return html`
    <div>
      <ul>
        ${Array.from(items).map(
          (item) =>
            html`<li>
              ${item}
              <button
                @click="${() => onRemoveItem(item)}"
                class="remove-button"
              >
                Remove
              </button>
            </li>`
        )}
      </ul>
      <button @click="${onPrint}" class="print-button">
        Print Shopping List
      </button>
    </div>
  `;
};

customElements.define(
  "shopping-list",
  component(ShoppingList, { useShadowDOM: false })
);
