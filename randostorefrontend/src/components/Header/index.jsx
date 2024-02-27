/* eslint-disable no-constant-condition */
// import { useState } from "react";
import { useState } from "react";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import LogoTitle from "./LogoTitle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-[100vw]  h-20 border-b-[1px]  border-b-gray-800 font-titleFont px-10 ">
      <div className="w-full  flex justify-between  items-center h-full ">
        <LogoTitle />
        <div className="flex gap-4 md:gap-10 items-center">
          <Hamburger toggleMobileMenu={toggleMobileMenu} />
          {true ? <MobileMenu /> : null}
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
