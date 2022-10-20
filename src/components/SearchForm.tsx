import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    searchValue.current?.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current!.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <section className="py-20 px-0 mt-4 pb-0">
      <form
        className="w-[85vw] my-0 mx-auto max-w-6xl bg-white py-8 px-10 capitalize rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label
            className="block mb-5 font-bold tracking-widest text-green-800"
            htmlFor="name"
          >
            search your favorite cocktail
          </label>
          <input
            className="w-full border-none border-transparent bg-blue-500 rounded-md p-2 text-xl"
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
