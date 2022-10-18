import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="py-6 px-8 shadow-sm text-center bg-white rounded-md transition-all ease-linear duration-300 hover:shadow-xl">
      <div className="my-0 mx-auto mb-6 w-36 h-36 rounded-full relative  before:bg-blue-400 before:absolute before:-top-1 before:-right-2 before:rounded-full before:w-full before:h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full block object-cover rounded-full relative"
        />
        <span className="w-10 h-10 grid place-items-center rounded-full text-white bg-blue-400 absolute top-0 left-0 translate-y-1/4">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="mb-1">{name}</h4>
      <p className="mb-2 uppercase text-blue-400 text-sm">{job}</p>
      <p className="mb-3">{text}</p>
      <div className="button-container">
        <button className="btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button
        className="mt-2 py-1 px-2 font-bold bg-blue-200 text-blue-400 capitalize rounded-md border-transparent transition-all ease-linear duration-300 cursor-pointer hover:bg-blue-400 hover:text-blue-50"
        onClick={randomPerson}
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
