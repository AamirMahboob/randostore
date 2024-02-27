import { Link } from "react-router-dom";
import { navItems } from "../../constants/constant";

const Navbar = () => {
  return (
    <ul className="hidden md:flex gap-4">
      {navItems.map((item, index) => (
        <Link key={index} to={item.path} className="nav-link">
          <li className="hover:border-b-[2px] hover:border-b-gray-800 hover:font-bold cursor-pointer hover:text-orange-900">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
