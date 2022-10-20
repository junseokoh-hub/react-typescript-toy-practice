import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex justify-center py-20 px-0">
      <div className="text-center capitalize">
        <h1>oops! it's a dead end</h1>
        <Link
          to="/"
          className="btn bg-green-800 text-white border-transparent hover:text-green-800 hover:bg-green-300"
        >
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
