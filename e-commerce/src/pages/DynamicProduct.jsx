import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Footer from '../layout/Footer';
import { toast } from 'react-toastify';

const DynamicProduct = () => {
    const [qty, setQty] = useState(1);
    const location = useLocation();
    const { id, product, image, review, price, color, brand, description, stock } = location.state;
    const [imageShow, setImageShow] = useState(image[0]);
    const [selectedColor, setSelectedColor] = useState(color[0]);

    const newId = id + selectedColor;
    const wholeData = [newId, qty, product, image, selectedColor, price, stock, review];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-white '>
            <div className="container px-4 mx-auto py-14 md:px-8 pt-16 md:pt-[90px] pb-4">
                <div className='grid grid-cols-1 gap-7 md:grid-cols-2'>
                    <div className='grid grid-cols-4 gap-3 h-80'>
                        <div className='flex flex-col items-center justify-center space-y-2'>
                            {image.map((img, index) => (
                                <div
                                    className='self-center w-2/3 border rounded-md cursor-pointer border-black/25'
                                    key={index}
                                    onClick={() => setImageShow(img)}
                                >
                                    <img
                                        className='object-contain w-full rounded-md'
                                        src={img}
                                        alt={`Product Thumbnail ${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-center w-full col-span-3 border rounded-md border-black/25'>
                            <img className='object-contain rounded-md' src={imageShow} alt="Selected Product" />
                        </div>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <p className='w-1/6 px-2 py-1 text-xs text-center text-white lowercase bg-red-500 rounded-full lg:w-2/12'>
                            {brand}
                        </p>
                        <h3 className='text-3xl font-bold uppercase'>{product}</h3>
                        <p><StarRating rating={review} /></p>
                        <p className='text-lg font-medium capitalize'>
                            Price: <span className='text-xl font-semibold text-red-500'>${price}</span>
                        </p>
                        <div className='flex flex-row space-x-2'>
                            <p className="font-medium capitalize ">Color:</p>
                            {color.map((col, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedColor(col)}
                                    className='relative cursor-pointer'
                                >
                                    <p
                                        style={{ backgroundColor: col }}
                                        className={`w-6 h-6 border rounded-full shadow-sm border-black/5 shadow-black/50 ${selectedColor === col ? 'ring-2 ring-green-500' : ''}`}
                                    />
                                    {selectedColor === col && (
                                        <span className="absolute inset-0 flex items-center justify-center text-neutral-500">
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='flex items-center space-x-2 font-medium'>
                            <p>QTY:</p>
                            <div className='flex items-center space-x-2'>
                                <button
                                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                                    className='text-3xl text-red-500 '
                                >
                                    <CiCircleMinus />
                                </button>
                                <p className='text-2xl font-semibold uppercase'>{qty}</p>
                                <button
                                    onClick={() => setQty((prev) => Math.min(stock, prev + 1))}
                                    className='text-3xl font-bold text-green-500'
                                >
                                    <CiCirclePlus />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
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
                                className='w-2/6 px-4 py-2 text-lg font-semibold uppercase transition-colors duration-200 bg-white border rounded-lg md:w-4/12 hover:text-white hover:bg-black border-black/45'>
                                Compare
                            </button>
                            <button
                                onClick={() => {
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
                                className='w-3/6 px-4 py-2 text-lg font-semibold text-white uppercase transition-colors duration-200 bg-red-500 rounded-lg md:w-4/12 hover:bg-black'>
                                Add to cart
                            </button>
                        </div>

                        <div className='flex flex-col pt-3 space-y-3'>
                            <p className='font-medium uppercase '>Description</p>
                            <hr />
                            <p className='text-stone-600'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DynamicProduct;
