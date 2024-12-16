import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import ProductData from '../database/ProductData';
import { LiaSearchPlusSolid, LiaSearchMinusSolid } from "react-icons/lia";
import SearchFilter from "../components/SearchFilter";

const DesktopNav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);




const filterSearch = ProductData.filter((products) =>
  products.product.toLowerCase().includes(search.toLowerCase())
);




  return (
    <div
      className={`hidden md:block bg-white border-b border-black/10 fixed w-full transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 py-6 mx-auto md:px-8 lg:px-12">
        <div className="flex flex-row justify-between">
          <NavLink
            to="/"
            className={`hover:opacity-70 transition-opacity duration-300`}
          >
            <img src={logo} alt="logo" />
          </NavLink>

          <div className="flex flex-row items-center space-x-8">
            <div className="box-border flex flex-row space-x-4 text-lg font-medium">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 border-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 border-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/Products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 border-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="/About"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b-2 border-red-500" : "border-none"
                  } hover:text-red-500 transition-all duration-200`
                }
                to="Contact"
              >
                Contact
              </NavLink>
            </div>

            <div className="flex flex-row items-center space-x-4 text-2xl">
              <button className="relative">
                {isSearchVisible ? (
                  <LiaSearchMinusSolid onClick={() => setIsSearchVisible(false)} />
                ) : (
                  <LiaSearchPlusSolid onClick={() => setIsSearchVisible(true)} />
                )}
                {isSearchVisible && (
                  <div className="absolute left-0 space-y-2 ">
                  <input
                    className=" px-2 py-1 text-base rounded-lg outline-none lg:w-[145px] md:w-32 ring-1 ring-black/15 top-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Search"
                  />
                  <div className="absolute w-[100%]">
                  <SearchFilter filterSearch={filterSearch} setIsSearchVisible={setIsSearchVisible} />
                  </div>
                  </div>
                )}
              </button>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-black"} hover:text-red-500 transition-all duration-200`
                }
                to="/Compare"
              >
                <GoGitCompare />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-black"} hover:text-red-500 transition-all duration-200`
                }
                to="/Cart"
              >
                <IoCartOutline />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
