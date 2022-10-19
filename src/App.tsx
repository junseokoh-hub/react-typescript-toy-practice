import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

export interface ListType {
  id: string;
  title: string;
}

const getLocalStorage = (): ListType[] => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list") || ""));
  } else {
    return [];
  }
};
const App: React.FC = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<ListType[]>(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        }),
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id: string) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    if (specificItem !== undefined) {
      setName(specificItem.title);
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="my-0 mx-auto mt-32 p-8 w-[90vw] max-w-xl lg:w-[95vw] bg-white rounded-md shadow-md transition-all ease-linear duration-300 hover:shadow-black">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3 className="heading mb-6 py-4 text-center font-bold text-white bg-blue-900 text-xl md:text-3xl">
          grocery bud
        </h3>
        <div className="flex justify-center">
          <input
            type="text"
            className="p-1 pl-4 bg-gray-100 rounded-tl-md rounded-bl-md border-transparent text-base flex-[1_0_auto] text-gray-400 placeholder:text-gray-500"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-200 border-transparent flex-[0_0_5rem] grid items-center p-1 capitalize tracking-widest rounded-tr-md rounded-br-md text-sm cursor-pointer transition-all ease-linear duration-300 hover:bg-blue-500 hover:text-white"
          >
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="mt-8">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button
            className="capitalize w-40 h-6 grid items-center bg-transparent border-transparent text-red-500 my-0 mx-auto text-sm tracking-widest cursor-pointer transition-all duration-300 ease-linear mt-5 hover:text-red-900"
            onClick={clearList}
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
