import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export interface MenuType {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuType[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="py-20 px-0 my-0 mx-auto w-[90vw] max-w-6xl md: w-[95vw]">
        <div className="mb-8 text-center">
          <h2 className="heading text-3xl md:text-4xl">our menu</h2>
          <div className="mx-auto w-20 h-1 bg-yellow-200"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
