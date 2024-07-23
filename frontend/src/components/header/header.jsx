import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../../src/assets/Eclipse-logo.png";
import Cart from "../cart/cart";
import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY > 250 || scrollY < 50) {
  //       setShowHeader(true);
  //     } else {
  //       setShowHeader(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={`flex w-full justify-center items-center`}>
      <div className={`sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] fixed top-3 w-full rounded-lg justify-center border shadow-md items-center bg-[#ffffff] dark:bg-dark  z-10 ${showHeader ? "" : "hidden-temporary"
        }`}>
        <div className="flex items-center justify-between py-2">
          <div className="w-28 max-w-full">
            <a href="/" className="block w-full">
              <img
                src={logo}
                alt="logo"
                className="hidden dark:block pl-5"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${open && "navbarTogglerActive"
                  } absolute right-5 top-1/2 block -translate-y-1/2 rounded-lg py-[6px] ring-primary lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`fixed backdrop-brightness-40 mt-3 z-20 left-0 top-0 w-full max-w-[300px] bg-white lg:p-1 px-7 py-4 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                  } `}
              >
                <ul className=" block lg:flex lg:h-full h-[100vh] ">
                  <div className="w-16 mb-5 max-w-full lg:hidden">
                    <a href="/" className="block w-full">
                      <img
                        src={logo}
                        alt="logo"
                        className="hidden dark:block"
                      />
                    </a>
                  </div>
                  <div className="lg:hidden">
                    <ListItem>
                      <div className="">
                        <details>
                          <summary className="cursor-pointer w-max">
                            <span className="hover:text-[#C4932C] duration-300">Buy a Watch</span>
                          </summary>
                          <ul className="border pl-[14px] rounded-lg py-2 bg-white absolute text-left space-y-1 mt-2 w-[83%] min-h-48 h-auto">
                            <li>
                              <details>
                                <summary>Brands</summary>
                                <ul className="flex flex-col ml-7 mt-1 space-y-1">
                                  <li>Rolex</li>
                                  <li>Cartier</li>
                                  <li>Hamilton</li>
                                  <li>Hublot</li>
                                  <li>Ulysse Nardin</li>
                                </ul>
                              </details>
                            </li>
                            <li className="">
                              Categories
                            </li>
                            <li className="">
                              Services
                            </li>
                          </ul>
                        </details>
                      </div>
                    </ListItem>

                  </div>
                  <hr />
                  <div className="lg:hidden">
                    <ListItem NavLink="/magazine">Magazine</ListItem>
                  </div>
                  <hr />
                  <div className="lg:hidden">
                    <ListItem NavLink="/watches">Watches</ListItem>
                  </div>
                  <hr />
                  <div className="lg:hidden">
                    <ListItem NavLink="/faq">FAQ</ListItem>
                  </div>
                  <hr />
                  <div className="lg:hidden">
                    <ListItem NavLink="/security">Security</ListItem>
                  </div>
                  <hr />
                </ul>
              </nav>
            </div>
            <div className="list-none hidden lg:flex relative justify-center gap-x-2 items-center">
              <ListItem>
                <div className=" cursor-pointer">
                  <details>
                    <summary className="cursor-pointer w-max">
                      <span className="hover:text-[#C4932C] duration-300">Buy a Watch</span>
                    </summary>
                    <div className="border flex items-start justify-between min-h-[200px] px-[14px] rounded-lg bg-white absolute text-left space-y-1 top-[73px] w-full">
                      <ul className="flex justify-between w-full mt-4">
                        <li>
                          <h1 className="font-bold">Brands</h1>
                          <ul className="absolute font-normal mt-2 flex flex-col space-y-1">
                            <li>Rolex</li>
                            <li>Cartier</li>
                            <li>Hamilton</li>
                            <li>Hublot</li>
                            <li>Ulysse Nardin</li>
                          </ul>
                        </li>
                        <li>
                          <h1 className="font-bold">Categories</h1>
                          <ul className=" font-normal mt-2 flex flex-col space-y-1">
                            <li>Men</li>
                            <li>Women</li>
                          </ul>
                        </li>
                        <li>
                          <h1 className="font-bold">Services</h1>
                          <ul className=" font-normal mt-2 flex flex-col space-y-1">
                            <li>Collections</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </ListItem>
              <ListItem NavLink="/magazine">Magazine</ListItem>
              <ListItem NavLink="/watches">Watches</ListItem>
              <ListItem NavLink="/faq">FAQ</ListItem>
              <ListItem NavLink="/security">Security</ListItem>
            </div>

            <div className="flex justify-center items-center lg:gap-x-5 sm:mr-0 mr-[70px]">
              <div className="flex justify-center items-center gap-x-4 mt-[5px]">
                <a href="/wishlist">
                  <div className="cursor-pointer flex justify-center items-center">
                    <div className="relative">
                      <div className="absolute left-[13px] -top-[12px]">
                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#C4932C] p-[10px] text-xs text-white">2</p>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -1 18 29" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.435 4.055a5.61 5.61 0 00-7.933 0L12 5.557l-1.502-1.502a5.61 5.61 0 00-7.933 7.933l1.502 1.502 7.933 7.933 7.933-7.933 1.502-1.502a5.61 5.61 0 000-7.933z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <div onClick={toggleCart} className="cursor-pointer flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute left-3 -top-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#C4932C] p-[10px] text-xs text-white">3</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 26" strokeWidth="1.5" stroke="currentColor" className="file: h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                </div>
                <div className="cursor-pointer" onClick={() => setSearchOpen(!searchOpen)}>
                  <FiSearch />
                  {searchOpen ? (
                    <div className="absolute right-0 lg:w-72 w-full top-[89px] border overflow-hidden rounded-lg text-gray-600" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="bg-white h-10 px-5 lg:w-72 w-full pr-10  text-sm focus:outline-none"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-0 mt-3 mr-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchOpen(false);
                        }}
                      >
                        <FiSearch />
                      </button>
                    </div>
                  ) : null}
                </div>
                <div className="flex relative sm:pr-16 gap-2 justify-end items-center lg:pr-5">
                  <a href="/register" className="cursor-pointer">
                    <div className="text-lg hover:text-[#a07822] duration-200">
                      <BsPerson />
                    </div>
                  </a>
                  <a href="/" className="lg:block relative px-[55px] py-[21px] font-medium button-logout">
                    <span>
                      Log Out
                    </span>
                    <span className="left-7 absolute inline-block whitespace-nowrap">Log Out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        {isCartOpen && <Cart closeCart={toggleCart} />}
      </div>
    </div>
  );
};

export default Header;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color text-dark-6 lg:ml-5 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};