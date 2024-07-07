import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../../src/assets/Eclipse-logo.png";
import Cart from "../cart/cart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 250 || scrollY < 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`flex w-full rounded-lg justify-center items-center bg-[#ffffff] relative z-10`}>
      <div className={`sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] fixed top-0 w-full rounded-lg justify-center border items-center bg-[#ffffff] dark:bg-dark  z-10 ${showHeader ? "" : "hidden-temporary"
        }`}>
        <div className="flex items-center justify-between py-3">
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
                className={`fixed backdrop-brightness-40 z-20 left-0 top-0 w-full max-w-[320px] bg-white lg:p-1 px-7 py-4 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                  } `}
              >
                <ul className=" block lg:flex lg:h-full h-[100vh] ">
                  <div className="w-20 max-w-full lg:hidden">
                    <a href="/" className="block w-full">
                      <img
                        src={logo}
                        alt="logo"
                        className="hidden dark:block"
                      />
                    </a>
                  </div>
                  <div className="lg:hidden">
                    <ListItem NavLink="/buywatch">
                      <div>
                        <details>
                          <summary className="cursor-pointer mt-5 w-max">
                            <span className="font-semibold hover:text-[#C4932C] duration-300">Buy a Watch</span>
                          </summary>
                          <ul className="relative text-left my-2">
                            <li>
                              <details>
                                <summary className="p-2 cursor-pointer">
                                  <span className="font-semibold hover:text-[#C4932C] duration-300">Brands</span>
                                </summary>
                                <div className="bg-white py-1 px-6">
                                  <p className="text-gray-800">Content for Nested Dropdown 1</p>
                                </div>
                              </details>
                            </li>
                            <li>
                              <details>
                                <summary className="p-2 cursor-pointer">
                                  <span className="font-semibold hover:text-[#C4932C] duration-300">Categories</span>
                                </summary>
                                <div className="bg-white py-1 px-6">
                                  <p className="text-gray-800">Content for Nested Dropdown 1</p>
                                </div>
                              </details>
                            </li>
                            <li>
                              <details>
                                <summary className="p-2 cursor-pointer">
                                  <span className="font-semibold hover:text-[#C4932C] duration-300">Services</span>
                                </summary>
                                <div className="bg-white py-1 px-6">
                                  <p className="text-gray-800">Content for Nested Dropdown 1</p>
                                </div>
                              </details>
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
                  <div className="lg:hidden gap-1 justify-start sm:flex mb-7 mt-10">
                    <a href="/" className="relative mr-1 px-[50px] py-[21px] font-medium button-signin">
                      <span>
                        Sign in
                      </span>
                      <span className="left-7 absolute inline-block">Sign in</span>
                    </a>
                    <a href="/" className="relative border  px-[55px] py-[21px]  font-medium button-signup">
                      <span>
                        Sign Up
                      </span>
                      <span className="left-7 absolute inline-block">Sign in</span>
                    </a>
                  </div>
                  <hr />
                </ul>
              </nav>
            </div>
            <div className="list-none hidden lg:flex relative">
              <ListItem NavLink="/buywatch">
                <div className="absolute -left-[81px] top-[7px]">
                  <details>
                    <summary className="cursor-pointer mb-4 w-max">
                      <span className="font-semibold hover:text-[#C4932C] duration-300">Buy a Watch</span>
                    </summary>
                    <ul className="border bg-white relative text-left space-y-1 top-5 xl:-left-[292px] lg:-left-[136px] sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px]">
                      <li>
                        <details>
                          <summary className="p-3 cursor-pointer">
                            <span className="font-semibold hover:text-[#C4932C] duration-300">Brands</span>
                          </summary>
                          <div className="bg-white p-4">
                            <p className="text-gray-800">Content for Nested Dropdown 1</p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary className="p-3 cursor-pointer">
                            <span className="font-semibold hover:text-[#C4932C] duration-300">Categories</span>
                          </summary>
                          <div className="bg-white p-4">
                            <p className="text-gray-800">Content for Nested Dropdown 1</p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary className="p-3 cursor-pointer">
                            <span className="font-semibold hover:text-[#C4932C] duration-300">Services</span>
                          </summary>
                          <div className="bg-white p-4">
                            <p className="text-gray-800">Content for Nested Dropdown 1</p>
                          </div>
                        </details>
                      </li>
                    </ul>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 30" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
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
              </div>
              <div className="hidden gap-1 mr-1 justify-end pr-16 sm:flex lg:pr-5">
                <a href="/" className="hidden lg:block relative px-[50px] py-[21px] font-medium button-signin">
                  <span>
                    Sign in
                  </span>
                  <span className="left-7 absolute inline-block">Sign in</span>
                </a>
                <a href="/" className="hidden lg:block relative px-[55px] py-[21px]  font-medium button-signup">
                  <span>
                    Sign Up
                  </span>
                  <span className="left-7 absolute inline-block">Sign in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        {isCartOpen && <Cart closeCart={toggleCart} />}
      </div>
    </header>
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