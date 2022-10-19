import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current!.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current!.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current!.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="bg-white shadow-md">
      <div className="md:p-4 md:max-w-6xl md:my-0 md:mx-auto md:flex md:items-center md:justify-between">
        <div className="p-4 flex items-center justify-between md:p-0">
          <img src="./images/ocean.jpg" className="h-10" alt="logo" />
          <button
            className="bg-transparent border-transparent cursor-pointer text-2xl text-blue-500 transition-all ease-linear duration-300 hover:text-blue-900 hover:rotate-90 md:hidden"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="h-0 overflow-hidden transition-all ease-linear duration-300 md:!h-auto"
          ref={linksContainerRef}
        >
          <ul className="md:flex" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a
                    className="no-underline text-gray-600 text-base capitalize tracking-widest block py-2 px-4 transition-all ease-linear duration-300 hover:bg-blue-200 hover:text-blue-500 hover:pl-6 md:p-0 md:my-0 md:mx-2 md:hover:p-0 md:hover:bg-transparent"
                    href={url}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="hidden md:flex">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a
                  className="md:my-0 md:mx-6 md:text-blue-500 md:transition-all md:ease-linear md:duration-300 md:hover:text-blue-300"
                  href={url}
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
