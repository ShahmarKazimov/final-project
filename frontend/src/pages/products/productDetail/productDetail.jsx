import React, { useEffect } from 'react';

const ProductDetail = ({ product, onClose }) => {

   

    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div className="detail-overlay -mt-5 sm:mt-0 relative z-[5]">
            <div className="detail-card sm:p-6 px-5 pb-2 pt-4 sm:w-[78%] w-[90%] sm:block flex flex-col">
                <nav className='detail-nav flex justify-between items-center pb-2'>
                    <svg
                        className="arrow cursor-pointer"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        onClick={handleCloseClick} 
                    >
                        <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" stroke="#727272" />
                    </svg>
                    <button onClick={onClose} className="back-button">Back to all Products</button>
                    <svg
                        className="heart cursor-pointer"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlSpace="preserve"
                        stroke="#727272"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
                            stroke="#727272"
                        />
                    </svg>
                </nav>
                <div className="detail-photo sm:w-[50%] w-[50%]  mx-auto ">
                    <img className="detail-image mx-auto" src={product.imageUrl} alt={product.name} />
                </div>
                <div className="detail-description flex flex-col justify-between pt-2 sm:pt-4 sm:h-[227px] pb-2 sm:w-[50%] mx-auto sm:border-l sm:border-t-0 border-t sm:mt-0 sm:px-5">
                    <h2 className='detail-text-2'>{product.name}</h2>
                    <h4 className='detail-text-4'>{product.brand}</h4>
                    <h1 className='detail-text  sm:text-[30px] text-[20px] '>${product.price}</h1>
                    <p className='detail-paragraph  pb-2'>
                        Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter.
                    </p>
                    <div className="detail-buttons flex gap-1 justify-between">
                        <button className='detail-button bg-[#C4932C] text-sm whitespace-nowrap text-[white] hover:bg-[#a07822] sm:text-medium'>Add to Cart</button>
                        <button className='detail-button bg-[#C4932C] text-sm whitespace-nowrap text-[white] hover:bg-[#a07822] sm:text-medium'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
