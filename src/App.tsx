import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

export interface ToursTypes {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const url = "https://course-api.com/react-tours-project";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ToursTypes[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="my-20 mx-auto w-[90vw] max-w-2xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 leading-5 capitalize tracking-widest text-3xl font-bold">
            no tours left
          </h2>
          <button
            className="mt-8 py-1 px-2 text-xl inline-block bg-blue-500 rounded-lg capitalize text-white tracking-widest border-transparent cursor-pointer"
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="my-20 mx-auto w-[90vw] max-w-2xl">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
