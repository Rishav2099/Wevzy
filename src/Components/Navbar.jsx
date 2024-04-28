import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import menuIcon from "/assets/img/menu.png"; // Ensure this path is correct
import closeIcon from "/assets/img/close.png"; // Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black">
      <div className="navbar text-white md:max-w-[80%] w-full md:mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="head flex items-center justify-between  ">
          
          <div className="heading flex flex-col md:flex-row p-3 text-xl md:my-1 text-white">
            <h2 className="font-bold text-2xl cursor-pointer">WEVZY</h2>
            <p>
              <span className="hidden md:inline-block"> - </span> Transforming
              Ideas into Websites
            </p>
          </div>
          <div
            className="md:hidden cursor-pointer block mx-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              className="invert h-8 w-8"
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </div>

        <ul
          id="ul"
          className={`flex flex-col gap-2 font-bold items-center bg-black w-full md:w-auto py-4 pl-7 transition-all ease-in duration-500 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:flex-row`}
        >
          <NavLink
                    onClick={closeMenu}

            className={(e) => (e.isActive ? "red" : "px-2 my-6 md:my-0")}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
                    onClick={closeMenu}

            className={(e) => (e.isActive ? "red" : "px-2 my-6 md:my-0")}
            to="/about"
          >
            <li>About us</li>
          </NavLink>
          <NavLink
          onClick={closeMenu}
            className={(e) => (e.isActive ? "red" : "px-2 my-6 md:my-0")}
            to="/contact"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
