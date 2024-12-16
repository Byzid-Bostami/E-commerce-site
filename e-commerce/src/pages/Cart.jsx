import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const deliveryCharge = 6.0;

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Ensure each item has a 'quantity' property initialized to item[1]
    const itemsWithQuantity = items.map((item) => ({
      ...item,
      quantity: item.quantity || item[1],
    }));
    setCartItems(itemsWithQuantity);
  }, []);
  

  // Update quantity of an item
  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item[0] === itemId
        ? { ...item, quantity: Math.max(1, Math.min(item[6], newQuantity)) } // Ensure within valid range
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item[0] !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  // Clear all items in the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  // Calculate total price for all items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item[5] * item.quantity, 0);
  };

  return (
    <div className="container px-4 mx-auto lg:px-40 pt-16 md:pt-[80px] md:px-6 py-14">
      <h1 className="mb-8 text-3xl font-bold text-center uppercase">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-center capitalize">
          Your cart is empty.{" "}
          <Link to="/" className="text-red-500 underline">
            Go shopping
          </Link>
        </p>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item[0]}
                className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md md:flex-row"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <img
                      src={item[3][0]}
                      alt={item[2]}
                      className="object-contain w-24 h-24 rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold uppercase">
                      {item[2]}
                    </h3>
                    <p className="flex items-center space-x-1 text-sm font-medium text-gray-700">
                      <span>Color:</span>{" "}
                      <p
                        className="w-4 h-4 border rounded-full shadow-lg shadow-black/30 border-black/10"
                        style={{ backgroundColor: item[4] }}
                      ></p>
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      Product Price:{" "}
                      <span className="text-red-500">${item[5]}</span>
                    </p>

                    <p className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <span>Quantity:</span>
                      <div className="flex items-center space-x-1">
                        <button
                          className="text-2xl text-red-500"
                          onClick={() => updateQuantity(item[0], item.quantity - 1)}
                        >
                          <CiCircleMinus />
                        </button>
                        <p className="text-xl font-semibold uppercase">
                          {item.quantity}
                        </p>
                        <button
                          className="text-2xl font-bold text-green-500"
                          onClick={() => updateQuantity(item[0], item.quantity + 1)}
                        >
                          <CiCirclePlus />
                        </button>
                      </div>
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                      Total:{" "}
                      <span className="text-red-500">
                        ${(item[5] * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item[0])}
                  className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg shadow md:mt-0 hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              SubTotal:{" "}
              <span className="text-red-500">
                ${calculateTotal().toFixed(2)}
              </span>
            </h2>
            <h2 className="text-xl font-semibold">
              Delivery Charge:{" "}
              <span className="text-red-500">${deliveryCharge.toFixed(2)}</span>
            </h2>
            <h2 className="text-xl font-bold">
              Grand Total:{" "}
              <span className="text-red-500">
                ${(calculateTotal() + deliveryCharge).toFixed(2)}
              </span>
            </h2>
            <div className="flex justify-between mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
              >
                Clear Cart
              </button>
              <button
                onClick={() => toast.success("Checkout is processing")}
                className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow hover:bg-green-600"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
