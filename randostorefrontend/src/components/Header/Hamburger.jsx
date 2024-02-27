/* eslint-disable react/prop-types */

const Hamburger = ({ toggleMobileMenu }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMobileMenu}
        className="text-gray-800 hover:text-gray-900 focus:outline-none"
      >
        ☰
      </button>
    </div>
  );
};

export default Hamburger;
