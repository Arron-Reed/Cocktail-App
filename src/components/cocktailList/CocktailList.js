import { html } from "lit-html";
import { component } from "haunted";
import "../cocktailCard/CocktailCard";
import "./CocktailList.css";

export const CocktailList = ({ cocktails = [], onAddToShoppingList }) => {
  return html`
  <link rel="stylesheet" href="/src/components/cocktailList/CocktailList.css" />
  <link rel="stylesheet" href="/src/styles.css" />
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
};

customElements.define("cocktail-list", component(CocktailList));
