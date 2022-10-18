import React from "react";
import Review from "./Review";

const App: React.FC = () => {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="w-[80vw] max-w-2xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl tracking-widest capitalize leading-5">
            our reviews
          </h2>
          <div className="mx-auto w-20 h-1 bg-blue-400"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
