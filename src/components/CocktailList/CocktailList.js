import { html } from "lit-html";
import { component } from "haunted";
import "../cocktailCard/CocktailCard";
import "./CocktailList.css";

export const CocktailList = ({ cocktails = [], onAddToShoppingList }) => {
  return html`
    <div class="cocktail-list">
      ${cocktails.map(
        (cocktail) =>
          html`
            <cocktail-card
              .cocktail="${cocktail}"
              .onAddToShoppingList="${onAddToShoppingList}"
            ></cocktail-card>
          `
      )}
    </div>
  `;
}

customElements.define("cocktail-list", component(CocktailList, { useShadowDOM: false }));
