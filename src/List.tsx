import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListType } from "./App";

interface ListProps {
  items: ListType[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            className="group flex items-center justify-between mb-2 py-1 px-4 rounded-md capitalize transition-all ease-linear duration-300 hover:text-gray-400 hover:bg-gray-100 "
            key={id}
          >
            <p className="group-hover:text-gray-800 group-hover:bg-gray-100 mb-0 text-gray-800 tracking-widest transition-all ease-linear duration-300">
              {title}
            </p>
            <div className="btn-container">
              <button
                type="button"
                className="bg-transparent border-transparent cursor-pointer text-xs my-0 mx-1 transition-all ease-linear duration-300 text-green-300 hover:text-green-800"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="bg-transparent border-transparent cursor-pointer text-xs my-0 mx-1 transition-all ease-linear duration-300 text-red-300 hover:text-red-800"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
