import React from 'react';

const ResponsiveFiltter = ({ handleScroll, brandFilter, clearFilter }) => {
  return (
    <div className="flex flex-col ">
      {/* Categories */}
      <div className="flex flex-col space-y-4">
        <h2 className="pt-12 pb-2 text-3xl font-bold uppercase">Categories</h2>
        <div  className="flex space-x-4">
          <div  className="flex flex-col space-y-3">
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
          {[
            "apple",
            "Nothing",
            "Xiaomi",
            "huawei",
            "Realme",
            "OnePlus",
            "Oppo",
            "google",
            "vivo",
            "casio",
            "lg",
          ].map((brandName) => (
            <button
              key={brandName}
              onClick={() => brandFilter(brandName)}
              className="px-2 py-1 text-xs font-medium text-white uppercase transition-colors duration-300 bg-black rounded-md hover:bg-red-500"
            >
              {brandName}
            </button>
          ))}
        </div>
        <button
          onClick={clearFilter}
          className="w-1/2 px-2 py-1 text-xs font-medium text-white uppercase transition-colors duration-300 bg-red-500 rounded-md hover:bg-green-500"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default ResponsiveFiltter;
