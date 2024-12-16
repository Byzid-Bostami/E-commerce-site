import React, { useEffect, useState } from "react";
import ProductData from "../database/ProductData";
import product from "../assets/products/products.jpeg";
import ProductsDisplay from "../components/ProductsDisplay";
import Footer from "../layout/Footer";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import { GoGitCompare } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ResponsiveFiltter from "../components/ResponsiveFiltter";
import { toast } from 'react-toastify';

const Products = () => {
const qty = 1;

  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null); // State for storing selected brand
  const [filterToggle, setFilterToggle] =useState(false);

  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const brandFilter = (brand) => {
    const filteredData = ProductData.filter((item) => item.brand === brand);
    setFilteredProducts(filteredData);
    setSelectedBrand(brand); // Set the selected brand
  };

  const clearFilter = () => {
    setFilteredProducts(null);
    setSelectedBrand(null); // Reset the selected brand
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-14 md:pt-16">
      {/* Banner */}
      <div className="lg:h-[350px]">
        <img className="object-cover w-full h-full" src={product} alt="product" />
      </div>

      {/* Main Container */}
      <div className="container grid grid-cols-1 gap-5 px-4 mx-auto lg:grid-cols-4 md:px-6 lg:px-8">
       

        {/* responsive bar */}

       <div className="flex pt-10 space-x-2 lg:hidden">
        <p onClick={()=>setFilterToggle(true)} className="px-3 py-1 text-white uppercase bg-red-500 rounded-md">Filter</p>
       <button onClick={()=>setFilterToggle(!filterToggle)} className="text-2xl ">
          {filterToggle? <IoMdClose />: <FiMenu /> }
        </button>
       </div>

       {filterToggle && (<div className="fixed left-0 z-50 p-3 bg-white border rounded-lg top-[10%] border-black/50">
       <button onClick={()=>setFilterToggle(false)} className="absolute self-end text-3xl right-3"><IoMdClose /></button>
       <ResponsiveFiltter
          handleScroll={handleScroll}
          brandFilter={brandFilter}
          clearFilter={clearFilter}
          setFilterToggle={setFilterToggle}
        />

       </div>)}

 {/* Sidebar */}
        <div className="lg:sticky hidden lg:pb-6 top-0 lg:h-[80vh] lg:flex lg:flex-col">
          {/* Categories */}
          <div className="flex flex-col space-y-4">
            <h2 className="pt-12 pb-2 text-3xl font-bold uppercase">Categories</h2>
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handleScroll("phone")}
                  className="px-2 py-1 font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                >
                  Mobile
                </button>
                <button
                  onClick={() => handleScroll("watch")}
                  className="px-2 py-1 font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                >
                  Watch
                </button>
                <button
                  onClick={() => handleScroll("earphone")}
                  className="px-2 py-1 font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                >
                  Earphone
                </button>
              </div>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handleScroll("tv")}
                  className="px-2 py-1 font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                >
                  TV
                </button>
                <button
                  onClick={() => handleScroll("laptop")}
                  className="px-2 py-1 font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                >
                  Laptop
                </button>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="flex flex-col space-y-4">
            <h2 className="pt-12 pb-2 text-3xl font-bold uppercase">Brands</h2>
            <div className="grid grid-cols-4 gap-2">
              {["apple", "Nothing", "Xiaomi", "huawei", "Realme", "OnePlus", "Oppo", "google", "vivo", "casio", "lg"].map(
                (brandName) => (
                  <button
                    key={brandName}
                    onClick={() => brandFilter(brandName)}
                    className="px-2 py-1 text-xs font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
                  >
                    {brandName}
                  </button>
                )
              )}
            </div>
            <button
              onClick={clearFilter}
              className="w-1/2 px-2 py-1 text-xs font-medium text-white uppercase transition-colors duration-300 bg-red-500 rounded-md hover:bg-green-500"
            >
              Clear Filter
            </button>
          </div>
        </div>

        {/* Products Display */}
        <div className="lg:col-span-3">
          {selectedBrand && (
            <h2 className="pt-8 text-3xl font-bold uppercase text-start">
              Products by <span className="text-red-500">{selectedBrand}</span>
            </h2>
          )}
          {filteredProducts ? (
            <div className="grid grid-cols-2 gap-4 pt-8 pb-5 md:grid-cols-3">
              {filteredProducts.map((item) => {
                const { id, product, image, review, price, color, brand, description, stock } = item; 
                return (
                  <Link
                  to={`/products/${product}`}
                  state={{ id, product, image, review, price, color, brand, description, stock }}
                    key={id}
                    className="flex flex-col justify-between w-full transition-all duration-200 transform border rounded-lg shadow-md cursor-pointer group border-black/10 hover:scale-105 hover:shadow-lg hover:shadow-black/50"
                  >
                    <div className="relative flex justify-center">
                      <img
                        className="object-contain w-56 p-2 h-52"
                        src={image[0]}
                        alt={product}
                      />
                      <div className="absolute hidden p-2 space-x-2 text-2xl border rounded-md shadow-md bg-stone-200 group-hover:flex border-black/5 left-2 top-2">
                        <Link
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                          const compareItems = JSON.parse(localStorage.getItem('compareItems')) || [];
                          if (compareItems.length >= 2) {
                            toast.error('You can only compare 2 items at a time.');
                            return;
                          }
                          const newItem = { id, product, image, review, price, color, brand, description, stock };
                          const isAlreadyAdded = compareItems.some(item => item.id === id);
                          if (!isAlreadyAdded) {
                            compareItems.push(newItem);
                            localStorage.setItem('compareItems', JSON.stringify(compareItems));
                             toast.success(`${product} added for comparison.`);
                          } else {
                            toast.warning(`${product} is already added for comparison.`);
                          }
                        }}
                        className="hover:text-red-500">
                          <GoGitCompare />
                        </Link>
                        <button 
                        onClick={(e) => {
                          e.preventDefault();
                          const newId = id + color[0];
                          const wholeData = [newId, qty, product, image, color[0], price, stock, review];
      
      
                          const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                          const isItemInCart = cartItems.some((item) => item[0] === newId);
                          if (isItemInCart) {
                             toast.warning('This item is already in the cart.');
                              return;
                          }
                          cartItems.push(wholeData);
                          localStorage.setItem('cartItems', JSON.stringify(cartItems));
                           toast.success('Item added to the cart successfully!');
                      }}
                        className="hover:text-red-500">
                          <IoCartOutline />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col p-5 bg-[#F5F5F5] space-y-2 rounded-b-lg">
                      <StarRating rating={review} />
                      <p className="font-semibold capitalize">{product}</p>
                      <p className="text-lg font-bold text-red-500">
                        <span>$</span>
                        {price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <ProductsDisplay />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
