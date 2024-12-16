import React, { useEffect, useState } from 'react';

const Compare = () => {
  const [compareItems, setCompareItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('compareItems')) || [];
    setCompareItems(items);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedItems = compareItems.filter(item => item.id !== id);
    localStorage.setItem('compareItems', JSON.stringify(updatedItems));
    setCompareItems(updatedItems);
  };

  // Show a message if there are no items to compare
  if (compareItems.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-lg font-medium text-gray-600">No items to compare. Add products to compare.</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-10 mx-auto pt-16 md:pt-[80px] space-y-5 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center uppercase">Compare Items</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {compareItems.map(({ id, product, image, price, review, description }) => (
          <div
            key={id}
            className="flex flex-col items-center p-5 transition-shadow duration-300 bg-white border rounded-lg shadow-md hover:shadow-xl"
          >
            <img className="object-cover w-32 h-32 mb-4" src={image[0]} alt={product} />
            <h3 className="text-lg font-bold text-center capitalize">{product}</h3>
            <p className="text-lg font-semibold text-red-500">${price}</p>
            <p className="text-sm text-center text-gray-600">{description}</p>
            <p className="text-sm font-medium text-yellow-500">Rating: {review} / 5</p>
            <button
              onClick={() => handleRemoveItem(id)}
              className="px-4 py-2 mt-3 text-white transition-colors duration-300 bg-red-500 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
