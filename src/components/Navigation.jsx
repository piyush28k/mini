import React, { useState ,useEffect} from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", ()=>{
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    

  return (
    <header className={`${
      sticky
        ? " shadow-lg   duration-300 transition-all ease-in-out"
        : ""
    } sticky bg-white w-screen top-0 right-0 z-50 p-4 py-5`}>
      <nav className="flex items-center justify-between">
        <div className=" font-bold lg:pl-10">
          <h1 className='text-xl -mb-2'>LOGO</h1>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="block lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:gap-7 lg:top-0 lg:pr-10 fixed top-14 right-0 h-full w-3/4 bg-white p-10 transform transition-transform duration-300 ease-in-out 
            ${isOpen ? 'translate-x-0' : 'translate-x-full '}
             lg:relative lg:transform-none lg:translate-x-0 lg:w-auto lg:bg-transparent lg:p-0`}
        >
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive
                  ? 'text-blue-600 text-lg font-semibold'
                  : 'text-black'
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="Explore"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive
                ? 'text-blue-600 text-lg font-semibold'
                : 'text-black'
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="Blog"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive
                ? 'text-blue-600 text-lg font-semibold'
                : 'text-black'
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="Profile"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 ${
                isActive
                ? 'text-blue-600 text-lg font-semibold'
                : 'text-black'
              } duration-200 lg:hover:bg-transparent hover:text-blue-300 lg:p-0 `
            }
          >
            Profile
          </NavLink>
          <button className='h-10 w-20 rounded-md bg-[#242426] text-white'> login</button>
          
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
