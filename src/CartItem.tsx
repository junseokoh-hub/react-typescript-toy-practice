import { CartItems, useGlobalContext } from "./context";

const CartItem = <T extends CartItems>({
  id,
  img,
  title,
  price,
  amount,
}: T) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className="grid items-center grid-cols-[auto_1fr_auto] gap-x-6 my-6 mx-0">
      <img className="img w-20 h-20 object-cover" src={img} alt={title} />
      <div>
        <h4 className="heading mb-2 font-medium tracking-widest">{title}</h4>
        <h4 className="heading text-gray-500">${price}</h4>
        {/* remove button */}
        <button
          className="text-blue-600 tracking-widest cursor-pointer text-sm bg-transparent border-none mt-[0.375rem] transition-all duration-300 ease-linear hover:text-blue-300"
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="w-6 bg-transparent border-none cursor-pointer"
          onClick={() => toggleAmount(id, "inc")}
        >
          <svg
            className="fill-blue-600 hover:fill-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="mb-0 text-center text-xl leading-4">{amount}</p>
        {/* decrease amount */}
        <button
          className="w-6 bg-transparent border-none cursor-pointer"
          onClick={() => toggleAmount(id, "dec")}
        >
          <svg
            className="fill-blue-600 hover:fill-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
