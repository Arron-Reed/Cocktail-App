const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

  export const searchCocktails = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error("Failed to fetch cocktails:", error);
      return null;
    }
  };
