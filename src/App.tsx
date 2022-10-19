import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="w-[90vw] my-20 mx-auto max-w-6xl lg:w-[95vw]">
      <div className="mb-3 text-gray-600 capitalize">
        <h2 className="heading flex items-center justify-center font-medium">
          <span className="mr-4 text-sm text-blue-500 font-bold">/</span>reviews
        </h2>
      </div>
      <div className="my-0 mx-auto mt-16 w-[80vw] h-[450px] max-w-3xl text-center relative flex overflow-hidden">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          const positionClassNames = () => {
            if (position === "activeSlide") {
              return "opacity-1 translate-x-0";
            } else if (position === "lastSlide") {
              return "opactiy-0 -translate-x-full";
            } else if (position === "nextSlide") {
              return "opacity-0 translate-x-full";
            }
          };

          return (
            <article
              className={`flex flex-col items-center absolute top-0 left-0 w-full h-full transition-all ease-linear duration-300 ${positionClassNames()}`}
              key={id}
            >
              <img
                src={image}
                alt={name}
                className="mb-4 w-36 h-36 rounded-full object-cover border-4 border-solid border-gray-200 shadow-md shadow-black"
              />
              <h4 className="heading mb-1 text-sm uppercase text-blue-400 md:text-base md:leading-4">
                {name}
              </h4>
              <p className="mb-3 text-gray-600 capitalize">{title}</p>
              <p className="mb-5 text-gray-400 my-0 mx-auto mt-8 leading-8 max-w-xl">
                {quote}
              </p>
              <FaQuoteRight className="mt-4 text-5xl text-blue-500" />
            </article>
          );
        })}
        <button className="btn left-0" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="btn right-0" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
