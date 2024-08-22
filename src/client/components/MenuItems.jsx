import { NavLink } from "react-router-dom";
import menuItems from "../data/menuItems";

// MenuItems component to render navigation links
const MenuItems = ({ isHeader = false, className = "" }) => {
  return (
    <ul className={className}>
      {menuItems.map((item, index) => (
        <li key={index} className={isHeader ? "mb-0" : "mb-1"}>
          <NavLink
            to={item.path}
            className={({ isActive }) => 
              `hover:text-red-700 block w-fit ${isHeader ? 'py-2 md:py-3 lg:py-4 px-4 md:px-0' : '' } transition-colors duration-300 ${(isHeader && isActive) ? 'text-red-700 font-bold' : ''}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
