import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="w-full bg-teal-500">
      <nav className="pagePadding container mx-auto flex items-center justify-between py-2 text-white">
        <NavLink>
          <img src="/logo.png" alt="logo" className="w-12" />
        </NavLink>

        <ul className="flex items-center justify-center gap-4">
          <NavItem text="Home" link="/" />
          <NavItem text="Proteins" link="/proteins" />
        </ul>

        <button className="rounded border-2 border-transparent bg-white px-2 py-1 text-sm font-bold text-teal-500 transition-all duration-300 hover:border-white hover:bg-teal-500 hover:text-white sm:text-base">
          <NavLink to="/addprotein">Add Protein</NavLink>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
