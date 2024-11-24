import { html } from "lit-html";
import { component, useState } from "haunted";
import "../modal/Modal";
import "./CocktailCard.css";
import { getIngredientsWithMeasurements } from "../../utils";
import { fetchIngredientThumbnails } from "../../services/cocktailApiService";

export const CocktailCard = ({ cocktail, onAddToShoppingList }) => {
  const [showModal, setShowModal] = useState(false);
  const [ingredientDetails, setIngredientDetails] = useState([]);

  const openModal = async (e) => {
    e.stopPropagation();
    if (!ingredientDetails.length) {
      const thumbnails = await fetchIngredientThumbnails(
        ingredientsWithMeasurements.map((item) => item.ingredient)
      );
      setIngredientDetails(thumbnails);
    }
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleCardClick = (e) => {
    // Prevent modal opening when clicking buttons
    if (e.target.tagName === "BUTTON") return;
    openModal();
  };

  const ingredientsWithMeasurements = getIngredientsWithMeasurements(cocktail);

  // HTML section that is passed to the modal showing all Cocktail Details
  const cocktailDetails = html`
    <div class="cocktail-details">
      <div class="image">
        <img
          src="${cocktail.strDrinkThumb}"
          alt="${cocktail.strDrink}"
          class="modal-image"
        />
      </div>
      <p>Category: ${cocktail.strCategory}</p>
      <p>Glass: ${cocktail.strGlass}</p>
      <p>Instructions: ${cocktail.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        ${ingredientsWithMeasurements.map((item, index) => {
          const thumbnail = ingredientDetails[index]?.thumbnail || "";
          return html`<li>
            <img
              src="${thumbnail}"
              alt="${item.ingredient}"
              class="ingredient-thumbnail"
            />
            ${item.measurement} ${item.ingredient}
          </li>`;
        })}
      </ul>
    </div>
  `;

  // HTML Section that shows in the cocktail list on the main page
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
