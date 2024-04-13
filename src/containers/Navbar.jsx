import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-scroll";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    props.onDarkMode(darkMode);
  };

  return (
    <div
      className={`${!darkMode && "dark"} w-full shadow-md sticky top-0 z-10`}
    >
      <div className="bg-white dark:bg-darkBg2 dark:shadow-white md:px-10 px-4 py-6 flex justify-between items-center">
        <h1 className="font-bold text-lg text-lightTxt dark:text-darkTxt">
          Florin.WebDev
        </h1>
        <ul className="hidden md:flex gap-4 font-bold text-lightTxt dark:text-darkTxt ">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <li className="hover:text-blue-700 cursor-pointer duration-300">
              Home
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className="hover:text-blue-700 cursor-pointer duration-300">
              About
            </li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className="hover:text-blue-700 cursor-pointer duration-300">
              Projects
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className="hover:text-blue-700 cursor-pointer duration-300">
              Contact
            </li>
          </Link>
          <li className="flex items-center text-lightTxt dark:text-darkTxt">
            <button onClick={toggleDarkMode}>
              {darkMode ? <FaRegMoon /> : <LuSun />}
            </button>
          </li>
        </ul>
        <div className="flex gap-2 md:gap-4 md:hidden">
          <IoMenu
            onClick={toggleMenu}
            className="size-8 text-lightTxt hover:text-blue-700 cursor-pointer duration-300 dark:text-darkTxt"
          />
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaRegMoon
                className="text-lightTxt dark:text-darkTxt"
                size="20"
              />
            ) : (
              <LuSun className="text-lightTxt dark:text-darkTxt" size="23" />
            )}
          </button>
        </div>
        {showMenu && (
          <div className="dark:bg-darkBg dark:text-darkTxt text-lightTxt p-4 bg-lightBg h-screen w-full fixed top-0 -left-[100px] flex flex-col justify-center items-center slide-right">
            <MdOutlineCancel
              onClick={toggleMenu}
              className="absolute top-6 right-8 size-8 text-lightTxt hover:text-blue-700 cursor-pointer duration-300 dark:text-darkTxt"
            />
            <ul className="*:text-2xl flex flex-col gap-6 *:cursor-pointer *:duration-300 font-semibold">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={toggleMenu}
              >
                <li className="hover:text-blue-700 cursor-pointer text-center">
                  Home
                </li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                <li className="hover:text-blue-700 cursor-pointer text-center">
                  About
                </li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                <li className="hover:text-blue-700 cursor-pointer text-center">
                  Projects
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={toggleMenu}
              >
                <li className="hover:text-blue-700 cursor-pointer text-center">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
