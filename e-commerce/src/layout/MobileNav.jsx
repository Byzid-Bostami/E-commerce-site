import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu, IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ProductData from '../database/ProductData';
import SearchFilter from "../components/SearchFilter";
import { LiaSearchPlusSolid, LiaSearchMinusSolid } from "react-icons/lia";

const MobileNav = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [search, setSearch] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const handleScroll = () => {
    if (isToggle) return; // Do nothing if the sidebar is open

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNav(false); // Hide on scroll down
    } else {
      setShowNav(true); // Show on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isToggle]);



  const filterSearch = ProductData.filter((products) =>
    products.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`fixed z-50 w-full transition-transform duration-300 bg-white border-b border-black/10 md:hidden ${
        showNav || isToggle ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 py-4 mx-auto">
        <div
          className={`flex flex-row items-center justify-between transition-transform duration-300 ${
            isToggle ? "translate-x-[87%]" : "translate-x-0"
          }`}
        >
          <button
            onClick={() => setIsToggle(!isToggle)}
            className="transition-all duration-200 transform"
          >
            {isToggle ? <IoMdClose className="text-2xl" /> : <IoIosMenu className="text-2xl" />}
          </button>
          <NavLink
            to="/"
            className="transition-opacity duration-300 hover:opacity-70 w-28"
          >
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-red-500" : "text-black"
              } hover:text-red-500 transition-all text-2xl duration-200`
            }
            to="/Cart"
          >
            <IoCartOutline />
          </NavLink>
        </div>

        <div
          className={`absolute top-0 left-0 w-full min-h-screen bg-black/15 ${
            isToggle ? "visible" : "hidden"
          }`}
        ></div>

        {/* Sidebar */}
        <div
          onClick={() => setIsToggle(false)}
          className={`absolute top-0 w-full min-h-screen transition-all z-20 duration-300 transform ${
            isToggle ? "left-0" : "-left-full"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-3/4 min-h-screen space-y-4 bg-white"
          >
            <button
              onClick={() => setIsToggle(false)}
              className="flex items-center w-full p-4 px-3 space-x-3 text-base font-medium text-white uppercase bg-red-500"
            >
              <IoMdCloseCircleOutline /> <span>quick navigation</span>
            </button>

            <div className="relative px-3">
            <div>
             <input
                className="w-full p-2 outline-none bg-slate-100"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name="search"
                placeholder="Search"
              />
              {isSearchVisible? <LiaSearchMinusSolid onClick={()=>setIsSearchVisible(false)} className="absolute text-xl text-gray-500 right-8 top-3" />:<LiaSearchPlusSolid onClick={()=>setIsSearchVisible(true)} className="absolute text-xl text-gray-500 right-8 top-3" />}
             </div>
            </div>

            <div className="flex flex-col px-3 space-y-4">
              <NavLink
                onClick={() => setIsToggle(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500 " : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsToggle(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/Products"
              >
                Products
              </NavLink>
              <NavLink
                onClick={() => setIsToggle(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/About"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setIsToggle(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/Contact"
              >
                Contact
              </NavLink>

              {isSearchVisible? (<div className="z-50 ">
                  <SearchFilter filterSearch={filterSearch} setIsSearchVisible={setIsSearchVisible} />
                  </div>):''}
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default MobileNav;
