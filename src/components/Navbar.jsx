import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-teal-500">
      <nav className="pagePadding container mx-auto flex items-center justify-between py-2 text-white">
        <NavLink>
          <img src="/logo.png" alt="logo" className="w-12" />
        </NavLink>

        <ul className="flex items-center justify-center gap-4">
          <li className="text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/shoes">Shoes</NavLink>
          </li>
        </ul>

        <button className="rounded border-2 border-transparent bg-white px-2 py-1 font-bold text-teal-500 transition-all duration-300 hover:border-white hover:bg-teal-500 hover:text-white">
          <NavLink to="/addshoe">Add Shoe</NavLink>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
