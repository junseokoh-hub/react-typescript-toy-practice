import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer: React.FC = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="min-h-[calc(100vh-120px)] w-[90vw] my-0 mx-auto mt-10 py-10 px-0 max-w-2xl">
        {/* cart header */}
        <header>
          <h2 className="heading uppercase text-center">your bag</h2>
          <h4 className="lowercase text-gray-500 mt-4 text-center">
            is currently empty
          </h4>
        </header>
      </section>
    );
  }
  return (
    <section className="min-h-[calc(100vh-120px)] w-[90vw] my-0 mx-auto mt-10 py-10 px-0 max-w-2xl">
      {/* cart header */}
      <header>
        <h2 className="heading">your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer className="mt-16 text-center">
        <hr className="bg-gray-500 border-transparent border-[0.25px]" />
        <div className="cart-total">
          <h4 className="heading capitalize flex justify-between mt-4">
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn bg-transparent py-2 px-4 text-red-800 border-[1px] border-solid border-red-800 mt-9 rounded-md hover:bg-red-400 hover:text-red-800 hover:border-red-400"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
