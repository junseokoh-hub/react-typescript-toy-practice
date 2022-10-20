import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home: React.FC = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main className="min-h-screen flex justify-center items-center">
      <button
        onClick={openSidebar}
        className="fixed top-8 left-12 text-3xl bg-transparent border-transparent text-blue-500 transition-all duration-300 ease-linear cursor-pointer animate-bounce"
      >
        <FaBars />
      </button>
      <button
        onClick={openModal}
        className="uppercase bg-black text-white py-1 px-3 tracking-widest inline-block transition-all duration-300 ease-linear text-sm border-2 border-solid border-black cursor-pointer shadow-md shadow-gray-200 rounded-md m-2 hover:text-black bg-transparent"
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
