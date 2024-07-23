import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";
import ProductDetail from '../products/productDetail/productDetail';
import "./watches.scss";

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
  {
    id: 5,
    name: "Product Name 5",
    price: 35,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Ulysse Nardin"
  },
  {
    id: 6,
    name: "Product Name 6",
    price: 63,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Rolex"
  },
  {
    id: 7,
    name: "Product Name 7",
    price: 59,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Cartier"
  },
  {
    id: 8,
    name: "Product Name 8",
    price: 759,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Hamilton"
  },
  {
    id: 9,
    name: "Product Name 9",
    price: 127,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Hublot"
  },
  {
    id: 10,
    name: "Product Name 10",
    price: 29,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Ulysse Nardin"
  },
  {
    id: 11,
    name: "Product Name 11",
    price: 179,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Rolex"
  },
  {
    id: 12,
    name: "Product Name 12",
    price: 19,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Hublot"
  },
  {
    id: 13,
    name: "Product Name 13",
    price: 75,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Hamilton"
  },
  {
    id: 14,
    name: "Product Name 14",
    price: 127,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Hublot"
  },
  {
    id: 15,
    name: "Product Name 15",
    price: 29,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Ulysse Nardin"
  },
  {
    id: 16,
    name: "Product Name 16",
    price: 179,
    oldPrice: 199,
    imageUrl: "https://cdn2.chrono24.com/images/topmodels/2-y181jdh67kx2lripaucfting-Main.png",
    brand: "Rolex"
  }


];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const productsPerPage = 8;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = productsData
    .filter(product => selectedBrand === 'All' || product.brand === selectedBrand)
    .filter(product => product.name.toLowerCase().includes(searchQuery));

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'price-asc') {
      return a.price - b.price;
    } else if (sortOrder === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className='sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] my-10 mx-auto'>
      <div className={selectedProduct ? "blurred" : ""}>
        <div className="flex flex-col justify-between items-center">
          <div className="text-center w-full">
            <h2 className="text-3xl font-bold inline-block">All Watches</h2>
          </div>
          <div className="mt-4 w-full flex flex-col md:flex-row justify-between gap-5 items-center">
            <div className='flex justify-center items-center gap-x-5'>
              <select value={selectedBrand} onChange={handleBrandChange} className="cursor-pointer border px-5 py-1 rounded-md">
                <option value="All">All Brands</option>
                {[...new Set(productsData.map(product => product.brand))].map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>
              <select value={sortOrder} onChange={handleSortChange} className="cursor-pointer border px-5 py-1 rounded-md">
                <option value="default">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border px-5 py-1 rounded-md w-full sm:w-auto md:mb-0"
            />
          </div>
          <div className="w-full mt-10 mb-7">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-xl text-gray-500">No products found</p>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {currentProducts.map(product => (
                    <div key={product.id} className="flex flex-col">
                      <div className="relative">
                        <div className="bg-white shadow-md rounded-lg duration-500 hover:shadow-xl border overflow-hidden">
                          <div>
                            <div className='cursor-pointer overflow-hidden flex justify-center items-center w-full '>
                              <img src={product.imageUrl} alt="Product" className="hover:scale-105 duration-500 object-cover lg:w-full sm:w-40 w-28" />
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
                <div className="mt-8 mx-auto flex justify-center items-center">
                  <button
                    onClick={handlePrevClick}
                    className={`mx-1 border px-3 py-1 rounded-md text-white bg-[#C4932C] text-sm font-bold focus:outline-none ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'text-gray-800 hover:bg-[#a07822]'}`}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`mx-1 border px-3 py-1 rounded-md text-sm font-bold focus:outline-none ${currentPage === index + 1 ? 'bg-[#C4932C] text-white' : 'text-gray-800 hover:bg-gray-200'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={handleNextClick}
                    className={`text-white bg-[#C4932C] mx-1 px-3 py-1 rounded-md text-sm font-bold focus:outline-none ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'text-gray-800 hover:bg-[#a07822]'}`}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
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
