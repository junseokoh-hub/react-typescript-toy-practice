import React from "react";
import { ToursTypes } from "./App";
import Tour from "./Tour";

interface ToursProps {
  tours: ToursTypes[];
  removeTour: (id: string) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="mb-16 text-center">
        <h2 className="mb-3 leading-5 capitalize tracking-widest text-3xl font-bold">
          our tours
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-400"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
