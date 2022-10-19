import React from "react";

interface CategoriesProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, filterItems }) => {
  return (
    <div className="mb-16 flex justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="my-0 mx-2 py-1 px-3 bg-transparent border-transparent text-base capitalize tracking-widest text-yellow-400 cursor-pointer rounded-md transition-all ease-linear duration-300 hover:bg-yellow-600 hover:text-white"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
