import React from 'react';
import ProductData from '../database/ProductData';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import { GoGitCompare } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const FeatureProducts = () => {
  const qty = 1;

  return (
    <div className="container px-4 mx-auto space-y-5 overflow-hidden py-14">
      <h2 className="pb-5 text-3xl font-bold uppercase text-start">Featured Products</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {ProductData.filter((item) => item.featureItem === true).map((item) => {
          const { id, product, image, review, price, color, brand, description, stock } = item;
          
          return (
            <Link
              to={`/products/${product}`}
              state={{ id, product, image, review, price, color, brand, description, stock }}
              className="flex flex-col justify-between w-full transition-all duration-200 transform border rounded-lg shadow-md cursor-pointer group border-black/10 hover:scale-105 hover:shadow-lg hover:shadow-black/50"
              key={id}
            >
              <div className="relative flex justify-center">
                <img
                  className="object-cover w-56 p-2 h-52"
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
                    className="hover:text-red-500"
                  >
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
      <div className="flex justify-center pt-4 space-x-4">
        <Link
          className="py-3 font-medium text-center text-white uppercase transition-colors duration-150 bg-black rounded-md px-7 hover:bg-red-500"
          to="/products"
        >
          Shop now
        </Link>
        <Link
          className="py-3 font-medium text-center text-white uppercase transition-colors duration-150 bg-black rounded-md px-7 hover:bg-red-500"
          to="/compare"
        >
          Compare Now
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
