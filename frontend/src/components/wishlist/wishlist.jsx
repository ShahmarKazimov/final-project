import { useState } from 'react';
import { FaHeart } from "react-icons/fa";


const Wishlist = () => {
    const [isMenu1Open, setIsMenu1Open] = useState(false);
    const [isMenu2Open, setIsMenu2Open] = useState(false);
    const [isMenu3Open, setIsMenu3Open] = useState(false);
    const [isMenu4Open, setIsMenu4Open] = useState(false);

    const toggleMenu1 = () => setIsMenu1Open(!isMenu1Open);
    const toggleMenu2 = () => setIsMenu2Open(!isMenu2Open);
    const toggleMenu3 = () => setIsMenu3Open(!isMenu3Open);
    const toggleMenu4 = () => setIsMenu4Open(!isMenu4Open);

    return (
        <div>
            <div className="px-5 my-10 sm:px-0 sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] mx-auto w-full relative flex justify-center items-center">
                <div className="flex flex-col justify-start items-start">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-extrabold text-gray-800 inline-block  pb-1">Favourites</h2>
                    </div>
                    <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-0">

                        <div className="flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-[100vw] rounded-lg hover:scale-105 duration-200 cursor-pointer"
                                    src="https://i.ibb.co/SsmkhPq/Rectangle-23.png"
                                    alt="bag"
                                />

                                <button
                                    aria-label="close"
                                    className="rounded-md top-4 right-4 absolute text-xl text-red-500"
                                >
                                    <FaHeart />
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                                        New York Streak
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        aria-label="show menu"
                                        onClick={toggleMenu1}
                                        className="focus:outline-none py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white"
                                    >
                                        {isMenu1Open ? (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L5 5L9 1"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L5 1L1 5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {isMenu1Open && (
                                <div className="flex flex-col justify-start items-start mt-12">
                                    <div>
                                        <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            Beige brown
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            42 size
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            $1,000
                                        </p>
                                    </div>
                                    <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                        <div className="w-full">
                                            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-[#a07822] duration-200 rounded-lg bg-[#C4932C] border">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-[100vw] rounded-lg hover:scale-105 duration-200 cursor-pointer"
                                    src="https://i.ibb.co/WVySXBL/Rectangle-24.png"
                                    alt="watch"
                                />
                                <button
                                    aria-label="close"
                                    className="rounded-md top-4 right-4 absolute text-xl text-red-500"
                                >
                                    <FaHeart />
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                                        New York Streak
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        aria-label="show menu"
                                        onClick={toggleMenu2}
                                        className="focus:outline-none py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white"
                                    >
                                        {isMenu2Open ? (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L5 5L9 1"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L5 1L1 5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {isMenu2Open && (
                                <div className="flex flex-col justify-start items-start mt-12">
                                    <div>
                                        <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            Beige brown
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            42 size
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            $1,000
                                        </p>
                                    </div>
                                    <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                        <div className="w-full">
                                            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-[#a07822] duration-200 rounded-lg bg-[#C4932C] border">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-[100vw] rounded-lg hover:scale-105 duration-200 cursor-pointer"
                                    src="https://i.ibb.co/JqD4MwR/Rectangle-5.png"
                                    alt="watch"
                                />
                                <button
                                    aria-label="close"
                                    className="rounded-md top-4 right-4 absolute text-xl text-red-500"
                                >
                                    <FaHeart />
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                                        New York Streak
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        aria-label="show menu"
                                        onClick={toggleMenu3}
                                        className="focus:outline-none py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white"
                                    >
                                        {isMenu3Open ? (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L5 5L9 1"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L5 1L1 5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {isMenu3Open && (
                                <div className="flex flex-col justify-start items-start mt-12">
                                    <div>
                                        <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            Beige brown
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            42 size
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            $1,000
                                        </p>
                                    </div>
                                    <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                        <div className="w-full">
                                            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-[#a07822] duration-200 rounded-lg bg-[#C4932C] border">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-[100vw] rounded-lg hover:scale-105 duration-200 cursor-pointer"
                                    src="https://i.ibb.co/JqD4MwR/Rectangle-5.png"
                                    alt="watch"
                                />
                                <button
                                    aria-label="close"
                                    className="rounded-md top-4 right-4 absolute text-xl text-red-500"
                                >
                                    <FaHeart />
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                                        New York Streak
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        aria-label="show menu"
                                        onClick={toggleMenu4}
                                        className="focus:outline-none py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white"
                                    >
                                        {isMenu3Open ? (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L5 5L9 1"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="fill-stroke"
                                                width="10"
                                                height="6"
                                                viewBox="0 0 10 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 5L5 1L1 5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {isMenu4Open && (
                                <div className="flex flex-col justify-start items-start mt-12">
                                    <div>
                                        <p className="tracking-tight text-xs leading-3 text-gray-800">MK617</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            Beige brown
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            42 size
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                                            $1,000
                                        </p>
                                    </div>
                                    <div className="flex justify-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                        <div className="w-full">
                                            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-[#a07822] duration-200 rounded-lg bg-[#C4932C] border">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-12 flex justify-start items-center w-full">
                        {/* <button className="focus:outline-none dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-700 w-full sm:w-auto tracking-tight py-4 text-base leading-4 text-white bg-gray-800 border border-gray-800">
                            Load more
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist

