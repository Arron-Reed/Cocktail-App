import { html } from "lit-html";
import { component, useState } from "haunted";
import "../modal/Modal";
import "./CocktailCard.css";
import { getIngredientsWithMeasurements } from "../../utils";

export const CocktailCard = ({ cocktail, onAddToShoppingList }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.stopPropagation(); // Prevent bubbling to parent
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleCardClick = (e) => {
    // Prevent modal opening when clicking buttons
    if (e.target.tagName === "BUTTON") return;
    openModal();
  };

  const ingredientsWithMeasurements = getIngredientsWithMeasurements(cocktail);

  const cocktailDetails = html`
    <div>
      <img
        src="${cocktail.strDrinkThumb}"
        alt="${cocktail.strDrink}"
        class="modal-image"
      />
      <p>Category: ${cocktail.strCategory}</p>
      <p>Glass: ${cocktail.strGlass}</p>
      <p>Instructions: ${cocktail.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        ${ingredientsWithMeasurements.map(
          (item) => html`<li>${item.measurement} ${item.ingredient}</li>`
        )}
      </ul>
    </div>
  `;

  return html`
    <div class="cocktail-card" @click="${handleCardClick}">
      <div class="image">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
      </div>
      <div class="content">
        <h3>${cocktail.strDrink}</h3>
        <p>${cocktail.strInstructions}</p>
        <div class="button-group">
          <button
            @click="${() => {
              onAddToShoppingList(
                ingredientsWithMeasurements.map((item) => item.ingredient)
              );
            }}"
          >
            Add to Shopping List
          </button>
          <button @click="${openModal}">View Details</button>
        </div>
      </div>
      <reusable-modal
        .show="${showModal}"
        .title="${cocktail.strDrink}"
        .content="${cocktailDetails}"
        .onClose="${closeModal}"
      ></reusable-modal>
    </div>
  `;
};

customElements.define(
  "cocktail-card",
  component(CocktailCard, { useShadowDOM: false })
);
