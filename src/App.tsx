import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CocktailList from './components/CocktailList/CocktailList';
import { searchCocktails, Cocktail } from './services/cocktailApiService';

const App: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const handleSearch = async (query: string) => {
    const results = await searchCocktails(query);
    setCocktails(results || []);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default App;
