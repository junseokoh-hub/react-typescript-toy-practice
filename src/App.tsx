import React, { useCallback, useState } from "react";
import data from "./data";
import List from "./List";

export interface PeopleProps {
  id: number;
  name: string;
  age: number;
  image: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<PeopleProps[]>(data);

  const onClick = useCallback(() => {
    setPeople([]);
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="py-4 px-8 my-20 w-[90vw] max-w-md bg-gray-400 rounded-xl">
        <h3 className="mb-5 font-normal">{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className="py-2 px-0 mx-auto mt-8 w-full block text-xl font-bold bg-pink-400 text-white border-transparent capitalize rounded-md tracking-widest outline-1 outline-red-500 cursor-pointer"
          onClick={onClick}
        >
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
