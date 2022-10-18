import React from "react";
import { PeopleProps } from "./App";

interface PeopleListProps {
  people: PeopleProps[];
}

const List: React.FC<PeopleListProps> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article
            key={id}
            className="mb-6 grid grid-cols-[auto_1fr] gap-x-3 items-center"
          >
            <img
              className="w-16 h-16 object-cover rounded-full items-center"
              src={image}
              alt={name}
            />
            <div>
              <h4 className="mb-[0.35rem]">{name}</h4>
              <p className="mb-0">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
