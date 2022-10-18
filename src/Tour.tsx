import React, { useState } from "react";
import { ToursTypes } from "./App";

interface TourProps {
  tour: ToursTypes;
  removeTour: (id: string) => void;
}

const Tour: React.FC<TourProps> = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="my-8 mx-0 shadow-md bg-white rounded-3xl transition-all ease-linear duration-[0.3s] hover:shadow-2xl">
      <img
        className="rounded-tr-md rounded-tl-md w-full h-80 object-cover"
        src={image}
        alt={name}
      />
      <footer className="py-6 px-8">
        <div className="mb-6 flex justify-between items-center">
          <h4 className="mb-0">{name}</h4>
          <h4 className="py-1 px-2 mb-0 rounded-md bg-orange-300 text-white ">
            ${price}
          </h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="pl-1 border-transparent bg-transparent capitalize text-blue-400 text-base cursor-pointer"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className="mt-4 mb-0 mx-auto w-52 block text-red-800 tracking-widest bg-transparent border-[1px] border-solid border-red-900 rounded-md"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
