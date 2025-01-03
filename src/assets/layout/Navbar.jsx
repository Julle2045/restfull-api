import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="text-gray-900 font-bold text-xl">
          Dataservice A/S
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-900 md:hidden"
        >
          <GiHamburgerMenu size="2rem" />
        </button>

        {/* Navbar/Menu */}
        <menu
          className={`flex flex-col md:flex-row md:items-center md:space-x-8 ${
            showMenu ? "block" : "hidden"
          } md:block`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700"
                aria-current="page"
              >
                Velkommen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todos"
                className="block py-2 px-3 text-gray-900 hover:text-blue-700"
              >
                Opgave Liste
              </NavLink>
            </li>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
