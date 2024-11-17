import { html } from "lit-html";
import { component } from "haunted";
import "./CocktailCard.css";

export const CocktailCard = ({ cocktail, onAddToShoppingList }) => {
  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith("strIngredient") && cocktail[key])
    .map((key) => cocktail[key]);

  return html`
    <div class="cocktail-card">
      <div class="image">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
      </div>
      <div class="content">
        <h3>${cocktail.strDrink}</h3>
        <p>${cocktail.strInstructions}</p>
        <button @click="${() => onAddToShoppingList(ingredients)}">
          Add to Shopping List
        </button>
      </div>
    </div>
  `;
}

customElements.define("cocktail-card", component(CocktailCard, { useShadowDOM: false }));
