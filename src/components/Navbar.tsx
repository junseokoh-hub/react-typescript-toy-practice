import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 flex items-center border-b-2 border-solid border-green-800 shadow-md">
      <div className="flex justify-between items-center w-[85vw] my-0 mx-auto max-w-6xl">
        <Link to="/">
          <img
            src="./images/ocean.jpg"
            alt="cocktail db logo"
            className="img w-48"
          />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link
              className="capitalize inline-block font-normal mr-2 tracking-widest text-xl py-1 px-2 transition-all duration-300 ease-linear hover:text-green-800"
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="capitalize inline-block font-normal mr-2 tracking-widest text-xl py-1 px-2 transition-all duration-300 ease-linear hover:text-green-800"
              to="/about"
            >
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
