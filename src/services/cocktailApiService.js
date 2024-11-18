const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const searchCocktails = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    
    const { drinks } = await response.json();
    return drinks || [];
  } catch (error) {
    console.error("Failed to fetch cocktails:", error);
    return [];
  }
};
