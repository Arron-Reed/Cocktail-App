import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import CocktailList from './components/CocktailList/CocktailList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import { searchCocktails, Cocktail } from './services/cocktailApiService';

const App: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState(new Set<string>());

  const handleSearch = async (query: string) => {
    const results = await searchCocktails(query);
    setCocktails(results || []);
  };

  const handleAddToShoppingList = (ingredients: string[]) => {
    setShoppingList(new Set([...shoppingList, ...ingredients]));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CocktailList cocktails={cocktails} onAddToShoppingList={handleAddToShoppingList} />
      <ShoppingList ingredients={shoppingList} />
    </div>
  );
};

export default App;
