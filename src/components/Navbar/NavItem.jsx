import { NavLink } from "react-router-dom";

const NavItem = ({ text, link }) => {
  return (
    <li className="text-md sm:text-lg">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "font-bold" : "hover:font-bold"
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
