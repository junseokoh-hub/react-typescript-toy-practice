import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionType } from "./App";

const Question: React.FC<QuestionType> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="py-4 px-6 mb-4 rounded-md shadow-md border-2 border-solid border-gray-400">
      <header className="flex justify-between items-center">
        <h4 className="mb-0 leading-6 tracking-widest text-sm md:text-base ">
          {title}
        </h4>
        <button
          className="ml-4 min-w-[2rem] flex justify-center items-center text-red-500 rounded-full self-center cursor-pointer bg-gray-500 border-transparent w-8 h-8"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="mt-2 mb-0 text-gray-300">{info}</p>}
    </article>
  );
};

export default Question;
