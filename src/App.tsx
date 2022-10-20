import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

const App: React.FC = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="mt-20 text-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
