const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
  }

  export const searchCocktails = async (query: string): Promise<Cocktail[] | null> => {
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
