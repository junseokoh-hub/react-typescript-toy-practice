import React from "react";
import { MenuType } from "./App";

interface MenuProps {
  items: MenuType[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="my-0 mx-auto max-w-6xl w-[90vw] grid gap-y-12 gap-x-8 justify-items-center lg:w-[95vw] lg:grid-cols-1">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article
            key={id}
            className="grid gap-y-4 gap-x-8 max-w-sm md:grid-cols-[225px_1fr] md:gap-y-0 md:gap-x-5 md:max-w-2xl"
          >
            <img
              src={img}
              alt={title}
              className="block w-full h-52 border-[0.25rem] border-solid border-yellow-200 object-cover rounded-md md:h-44 lg:h-36"
            />
            <div className="item-info">
              <header className="flex justify-between border-b-[0.5px] border-dotted border-gray-500">
                <h4 className="heading mb-2">{title}</h4>
                <h4 className="heading mb-2">${price}</h4>
              </header>
              <p className="mb-0 pt-4 text-gray-500">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
