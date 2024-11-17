import { html } from 'lit-html';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  let query = '';

  const handleInputChange = (e) => {
    query = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return html`
    <div class="searchbar-container">
      <form @submit="${handleSubmit}">
        <input
          type="text"
          .value="${query}"
          @input="${handleInputChange}"
          placeholder="Search for a cocktail..."
          class="search-text"
        />
        <button type="submit" class="search-button">
          🔍
        </button>
      </form>
    </div>
  `;
};
