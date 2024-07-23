import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";
import ProductDetail from '../products/productDetail/productDetail';
import "./productDetail.scss";

const productsData = [
    {
        id: 1,
        name: "Product Name 1",
        price: 123,
        oldPrice: 199,
        imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
        brand: "Rolex"
    },
    {
        id: 2,
        name: "Product Name 2",
        price: 88,
        oldPrice: 199,
        imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
        brand: "Cartier"
    },
    {
        id: 3,
        name: "Product Name 3",
        price: 73,
        oldPrice: 199,
        imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
        brand: "Hamilton"
    },
    {
        id: 4,
        name: "Product Name 4",
        price: 31,
        oldPrice: 199,
        imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
        brand: "Hublot"
    },
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openProductDetail = (product) => {
        setSelectedProduct(product);
    };

    const closeProductDetail = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className={selectedProduct ? "blurred" : ""}>
                <div className="flex flex-col justify-between items-center">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold inline-block">Our Watches</h2>
                    </div>
                    <div className="mt-5 w-full lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-0">
                        {productsData.map(product => (
                            <div key={product.id} className="flex flex-col">
                                <div className="relative">
                                    <div className="bg-white shadow-md rounded-lg duration-500 hover:shadow-xl border overflow-hidden">
                                        <div>
                                            <div className='cursor-pointer overflow-hidden flex justify-center items-center'>
                                                <img src={product.imageUrl} alt="Product" className="hover:scale-105 duration-500 object-cover" />
                                            </div>
                                            <div className="cursor-auto px-5">
                                                <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                                <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                                <div className="flex items-center">
                                                    <p className="text-lg font-semibold text-black cursor-auto my-2">${product.price}</p>
                                                    <div className="ml-auto flex gap-2 items-center">
                                                        <button onClick={() => openProductDetail(product)} aria-label="view" className="text-2xl">
                                                            <HiOutlineEye />
                                                        </button>
                                                        <button aria-label="wishlist" className="text-xl text-red-500">
                                                            <FaHeart />
                                                        </button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-bag-plus" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/watches">
                        <div className="mt-8 mx-auto flex justify-center items-center">
                            <button
                                className="text-white bg-[#C4932C] mx-1 px-5 py-2 duration-200 rounded-md text-md font-bold focus:outline-none hover:bg-[#a07822]"
                                onClick={() => setSelectedProduct(null)}
                            >
                                Display All
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            {selectedProduct && (
                <div className="product-detail-overlay">
                    <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
                </div>
            )}
        </div>
    );
};

export default Products;
