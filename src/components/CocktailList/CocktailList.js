import { html } from "lit-html";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import "./CocktailList.css";

export const CocktailList = ({ cocktails, onAddToShoppingList }) => {
  return html`
    <div class="cocktail-list">
      ${cocktails.map((cocktail) =>
        CocktailCard({
          cocktail,
          onAddToShoppingList,
        })
      )}
    </div>
  `;
};
