import { navItems } from "../../constants/constant";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="md:hidden absolute top-16 right-0 w-96 h-full translate-x-2 bg-white p-4 rounded shadow">
      <ul className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className="nav-link">
            <li className="hover:text-orange-900 cursor-pointer">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
