import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? "fixed top-0 left-0 w-full h-full bg-white grid grid-rows-[auto_1fr_auto] gap-y-4 shadow-md shadow-red-800 transition-all ease-linear duration-300  md:w-[400px] translate-y-0"
          : "sidebar"
      }
    >
      <div className="flex justify-between items-center py-4 px-6">
        <img
          src="./images/ocean.jpg"
          className="justify-self-center h-10"
          alt="coding addict"
        />
        <button
          className="text-3xl bg-transparent border-transparent transition-all ease-linear duration-300 cursor-pointer text-red-800 mt-1 hover:text-red-300"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a
                className="group flex items-center text-xl capitalize py-4 px-6 text-gray-700 transition-all duration-300 ease-linear tracking-widest hover:bg-gray-200 hover:text-gray-800"
                href={url}
              >
                <div className="text-2xl text-gray-500 mr-4 transition-all duration-300 ease-linear group-hover:text-gray-700">
                  {icon}
                </div>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="justify-self-center flex pb-8">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a
                className="text-2xl my-0 mx-2 text-blue-500 transition-all duration-300 ease-linear hover:text-blue-900"
                href={url}
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
