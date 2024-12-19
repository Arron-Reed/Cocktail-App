import { html } from "lit-html";
import { component, useState } from "haunted";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onSearch(trimmedQuery);
    }
  };

  return html`
  <link rel="stylesheet" href="/src/components/searchBar/SearchBar.css" />
    <div class="searchbar-container">
      <form @submit="${handleSubmit}">
        <input
          type="text"
          .value="${query}"
          @input="${handleInputChange}"
          placeholder="Search for a cocktail..."
          class="search-text"
          aria-label="Search for a cocktail"
        />
        <button type="submit" class="search-button" aria-label="Search">
          🔍
        </button>
      </form>
    </div>
  `;
};

customElements.define("search-bar", component(SearchBar));
