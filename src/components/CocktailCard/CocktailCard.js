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
      <div class="details-header">
        <h2>${cocktail.strDrink}</h2>
        <hr class="header-hr" />
        <div class="category-block">
          <div class="category"><p>${cocktail.strCategory}</p></div>
          <div class="glass"><p>${cocktail.strGlass}</p></div>
          <div class="alcoholic"><p>${cocktail.strAlcoholic}</p></div>
        </div>
      </div>

      <div class="details-content">
        <div class="details-left">
          <h3>Ingredients</h3>
          <div class="details-ingredients">
            <ul>
              ${ingredientsWithMeasurements.map((item, index) => {
                const thumbnail = ingredientDetails[index]?.thumbnail || "";
                return html`<li class="ingredients">
                  <div class="ingredient-left">
                    <img
                      src="${thumbnail}"
                      alt="${item.ingredient}"
                      class="ingredient-thumbnail"
                    />
                  </div>
                  <div class="ingredient-right">
                    <p>${item.measurement}</p>
                    <p class="item">${item.ingredient}</p>
                  </div>
                </li>`;
              })}
            </ul>
          </div>
        </div>
        <div class="details-line"></div>
        <div class="details-right">
          <div class="image">
            <img
              src="${cocktail.strDrinkThumb}"
              alt="${cocktail.strDrink}"
              class="modal-image"
            />
          </div>
        </div>
      </div>
      <hr class="header-hr" />
      <div class="details-instructions">
        <h3>Instructions</h3>
        <p>${cocktail.strInstructions}</p>
      </div>
    </div>
  `;

  // HTML Section that shows in the cocktail list on the main page
  return html`
    <div class="cocktail-card" @click="${handleCardClick}">
      <div class="image">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
      </div>
      <div class="content">
        <h2>${cocktail.strDrink}</h2>
        <p>${cocktail.strInstructions}</p>
        <div class="button-group">
          <button
            class="button secondary-button"
            @click="${() => {
              onAddToShoppingList(
                ingredientsWithMeasurements.map((item) => item.ingredient)
              );
            }}"
          >
            Shopping List
          </button>
          <button @click="${openModal}" class="button primary-button">
            View Details
          </button>
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
