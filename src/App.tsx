import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

export interface QuestionType {
  id?: number;
  title: string;
  info: string;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>(data);
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="py-10 px-8 my-20 mx-auto max-w-4xl text-xl grid gap-y-4 gap-x-8 w-[90vw] leading-5 tracking-widest capitalize bg-white rounded-md md:grid md:grid-cols-[250px_1fr] md:text-3xl">
        <h3 className="leading-5 font-medium">
          questions and answers about login
        </h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
