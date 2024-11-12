import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { searchCocktails, Cocktail } from './services/cocktailApiService';

const App: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const handleSearch = async (query: string) => {
    const results = await searchCocktails(query);
    setCocktails(results || []);
    console.log(cocktails)
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
