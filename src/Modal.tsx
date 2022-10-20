import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={
        isModalOpen
          ? "fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] grid place-items-center transition-all ease-linear duration-300 visible z-10"
          : "modal-overlay"
      }
    >
      <div className="bg-white rounded-md w-[90vw] h-[30vh] max-w-2xl text-center grid place-items-center relative">
        <h3 className="heading">modal content</h3>
        <button
          className="absolute top-4 right-4 text-3xl bg-transparent border-transparent text-red-800 cursor-pointer"
          onClick={closeModal}
        >
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
