import React from 'react';
import "./footer.css";
import logo from "../../../src/assets/Eclipse-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const footer = () => {
  return (
    <footer className="mt-5 bg-gradient-to-r from-zinc-950 to-zinc-900 text-white">
      <div className="py-8">
        <div className="flex flex-wrap sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] mx-auto">
          <div className="md:mb-0 mb-10 flex flex-col justify-between gap-y-5 w-full md:w-1/4 pl-5 mt-4 md:mt-0">
            <div className="w-20 max-w-full mx-auto sm:mx-0 md:mx-0">
              <a href="/" className="block w-full">
                <img
                  src={logo}
                  alt="logo"
                  className="hidden dark:block"
                />
              </a>
            </div>
            <div className="w-full justify-center sm:justify-start flex sm:w-max md:w-1/3 mt-4">
              <ul className="w-28 flex sm:mx-auto justify-center md:justify-end space-x-4 text-gray-400">
                <li><a className="hover:text-[#C4932C]" href="#"><FaFacebookF /></a></li>
                <li><a className="hover:text-[#C4932C]" href="#"><FaInstagram /></a></li>
                <li><a className="hover:text-[#C4932C]" href="#"><FaYoutube /></a></li>
                <li><a className="hover:text-[#C4932C]" href="#"><FaXTwitter /></a></li>
              </ul>
            </div>
            <div className='flex flex-col gap-y-3 items-center sm:items-start justify-center'>
              <h1 className='text-center text-gray-300 opacity-30 text-xs max-w-40 sm:text-start'>Find your dream watch for luxury watches.</h1>
              <a href="/" className="relative px-[75px] py-[22px] font-medium button-footer">
                <span className=''>
                  Shop Now
                </span>
                <span className="left-7 absolute inline-block whitespace-nowrap">Shop Now</span>
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mt-4 md:mt-0 text-center sm:text-start">
            <h6 className="text-xl font-semibold mb-2 text-[#C4932C]">About</h6>
            <ul className="list-none space-y-2">
              <li><a href="http://scanfcode.com/category/c-language/" className="hover:underline underline-offset-4 text-gray-400">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/" className="hover:underline underline-offset-4 text-gray-400">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/" className="hover:underline underline-offset-4 text-gray-400">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/" className="hover:underline underline-offset-4 text-gray-400">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/" className="hover:underline underline-offset-4 text-gray-400">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/" className="hover:underline underline-offset-4 text-gray-400">Templates</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mt-4 md:mt-0 text-center sm:text-start">
            <h6 className="text-xl font-semibold mb-2 text-[#C4932C]">Categories</h6>
            <ul className="list-none space-y-2">
              <li><a href="http://scanfcode.com/category/c-language/" className="hover:underline underline-offset-4 text-gray-400">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/" className="hover:underline underline-offset-4 text-gray-400">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/" className="hover:underline underline-offset-4 text-gray-400">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/" className="hover:underline underline-offset-4 text-gray-400">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/" className="hover:underline underline-offset-4 text-gray-400">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/" className="hover:underline underline-offset-4 text-gray-400">Templates</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mt-4 md:mt-0 text-center sm:text-start">
            <h6 className="text-xl font-semibold mb-2 text-[#C4932C]">Quick Links</h6>
            <ul className="list-none space-y-2">
              <li><a href="http://scanfcode.com/about/" className="hover:underline underline-offset-4 text-gray-400">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/" className="hover:underline underline-offset-4 text-gray-400">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/" className="hover:underline underline-offset-4 text-gray-400">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/" className="hover:underline underline-offset-4 text-gray-400">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/" className="hover:underline underline-offset-4 text-gray-400">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex justify-center items-center">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-sm text-gray-400 text-center">Copyright &copy; 2024 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default footer