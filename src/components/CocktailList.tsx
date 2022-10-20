import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="text-3xl capitalize tracking-widest text-center mb-14 mt-4">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="py-20 px-0">
      <h2 className="text-3xl capitalize tracking-widest text-center mb-14 mt-4">
        cocktails
      </h2>
      <div className="w-[85vw] my-0 mx-auto max-w-6xl grid gap-y-8 gap-x-8 md: grid-cols-[repeat(autofill_minmax(338.8px_1fr))]">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
