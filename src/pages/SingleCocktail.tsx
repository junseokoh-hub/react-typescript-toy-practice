import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

interface Ingredients {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: boolean;
  strIngredient5: boolean;
}

interface SingleCocktail {
  name: string;
  image: string;
  info: string;
  category: string;
  glass: string;
  instructions: string;
  ingredients: Ingredients[];
}

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState<SingleCocktail | null>(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="py-20 px-0 text-center">
        <Link to="/" className="btn bg-green-800 text-white-border-transparent">
          back home
        </Link>
        <h2 className="capitalize text-4xl tracking-widest text-center mb-14 mt-4">
          {name}
        </h2>
        <div className="w-[85vw] max-w-6xl my-0 mx-auto text-left lg:grid grid-cols-[2fr_3fr] gap-12 items-center">
          <img className="rounded-md" src={image} alt={name}></img>
          <div className="space-y-6 pt-8 lg:pt-0">
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                name :
              </span>{" "}
              {name}
            </p>
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                category :
              </span>{" "}
              {category}
            </p>
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                info :
              </span>{" "}
              {info}
            </p>
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                glass :
              </span>{" "}
              {glass}
            </p>
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                instructons :
              </span>{" "}
              {instructions}
            </p>
            <p className="font-bold capitalize leading-7">
              <span className="bg-green-300 py-1 px-2 rounded-md text-green-800">
                ingredients :
              </span>
              {ingredients.map((item, index) =>
                item ? (
                  <span key={index}>
                    <>{item}</>
                  </span>
                ) : null,
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
