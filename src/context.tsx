import { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
}

export interface NewCocktail {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
}

interface AppContext {
  loading: boolean;
  cocktails: NewCocktail[];
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext<AppContext>({
  loading: true,
  cocktails: [],
  searchTerm: "a",
  setSearchTerm: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item: Cocktail) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
