import { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Checkout = () => {
    const [selectedCard, setSelectedCard] = useState("https://readymadeui.com/images/visa.webp");
    const [paymentMethod, setPaymentMethod] = useState("visa");

    const handleCardSelection = (imageUrl, method) => {
        setSelectedCard(imageUrl);
        setPaymentMethod(method);
    };

    const handleTermsClick = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="border font-[sans-serif] bg-white sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] mx-auto w-full relative">
                <div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="px-5 lg:col-span-2 max-lg:order-1 !pr-0 max-w-4xl mx-auto w-full">
                            <div className="text-center max-lg:hidden">
                                <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">Checkout</h2>
                            </div>

                            <form className="lg:mt-8">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">Shipping info</h2>

                                    <div className="grid sm:grid-cols-2 gap-8 mt-8">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Street address"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="City"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="State"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                placeholder="Postal code"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h2 className="text-xl font-bold text-gray-800">Payment method</h2>

                                    <div className="mt-4">
                                        <div className="flex items-center justify-start gap-x-3">
                                            <div className="flex justify-center items-center">
                                                <input
                                                    type="radio"
                                                    className="w-5 h-5 cursor-pointer accent-[#a07822]"
                                                    id="visa"
                                                    name="paymentMethod"
                                                    checked={paymentMethod === "visa"}
                                                    onChange={() => handleCardSelection("https://readymadeui.com/images/visa.webp", "visa")}
                                                />
                                                <label htmlFor="visa" className="ml-4 flex gap-2 cursor-pointer">
                                                    <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="Visa Card" />
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <input
                                                    type="radio"
                                                    className="w-5 h-5 cursor-pointer accent-[#a07822]"
                                                    id="amex"
                                                    name="paymentMethod"
                                                    checked={paymentMethod === "amex"}
                                                    onChange={() => handleCardSelection("https://readymadeui.com/images/american-express.webp", "amex")}
                                                />
                                                <label htmlFor="amex" className="ml-4 flex gap-2 cursor-pointer">
                                                    <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="American Express Card" />
                                                </label>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <input
                                                    type="radio"
                                                    className="w-5 h-5 cursor-pointer accent-[#a07822]"
                                                    id="master"
                                                    name="paymentMethod"
                                                    checked={paymentMethod === "master"}
                                                    onChange={() => handleCardSelection("https://readymadeui.com/images/master.webp", "master")}
                                                />
                                                <label htmlFor="master" className="ml-4 flex gap-2 cursor-pointer">
                                                    <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="MasterCard" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid gap-8 mt-8">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Cardholder's Name"
                                                className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                            />
                                        </div>

                                        <div className="flex justify-center items-center bg-white border-b focus-within:border-[#C4932C] overflow-hidden">
                                            <img src={selectedCard} className="w-max h-5" alt="Selected Card" />
                                            <input
                                                type="number"
                                                placeholder="Card Number"
                                                className="px-2 py-1 bg-white text-gray-800 w-full text-sm outline-none ml-2"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <input
                                                    type="number"
                                                    placeholder="EXP."
                                                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="number"
                                                    placeholder="CVV"
                                                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-[#C4932C] outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 shrink-0 text-[#C4932C] accent-[#a07822] border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-3 block text-sm">
                                                I accept the
                                                <a
                                                    href="#"
                                                    className="text-[#C4932C] font-semibold hover:underline ml-1"
                                                    onClick={handleTermsClick}
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <button
                                        type="button"
                                        className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        className="min-w-[150px] px-6 py-3.5 text-sm bg-[#C4932C] text-white rounded-lg hover:bg-[#a07822]"
                                    >
                                        Confirm payment $240
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
                            <div className="relative h-full">
                                <div className="px-5 overflow-auto max-lg:max-h-[400px] lg:h-[calc(100vh-60px)] max-lg:mb-8">
                                    <h2 className="text-xl font-bold text-gray-800 mt-2">Order Summary</h2>
                                    <div className="space-y-8 mt-8">
                                        <div className="flex items-center gap-2">
                                            <div className="lg:max-w-[120px] xl:max-w-[140px] max-w-[140px] p-5 shrink-0 bg-gray-200 rounded-lg">
                                                <img src="https://readymadeui.com/images/product11.webp" className="w-full object-contain" alt="Product 2" />
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <h3 className="text-start text-gray-800 font-bold">Rolex</h3>
                                                <ul className="text-sm text-gray-800 space-y-1 mt-1 w-full">
                                                    <li className="flex flex-wrap gap-4">
                                                        Size <span className="ml-auto">37</span>
                                                    </li>
                                                    <div className='flex items-center justify-between'>
                                                        <span className="pr-2">Quantity</span>
                                                        <div className='flex items-center gap-1'>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]"
                                                            >
                                                                <IoMdArrowDropup />
                                                            </button>
                                                            <li className="flex flex-wrap gap-4">
                                                                0
                                                            </li>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]">
                                                                <IoMdArrowDropdown />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">$40</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="lg:max-w-[120px] xl:max-w-[140px] max-w-[140px] p-5 shrink-0 bg-gray-200 rounded-lg">
                                                <img src="https://readymadeui.com/images/product14.webp" className="w-full object-contain" alt="Product 3" />
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <h3 className="text-start text-gray-800 font-bold">Rolex</h3>
                                                <ul className="text-sm text-gray-800 space-y-1 mt-1 w-full">
                                                    <li className="flex flex-wrap gap-4">
                                                        Size <span className="ml-auto">37</span>
                                                    </li>
                                                    <div className='flex items-center justify-between'>
                                                        <span className="pr-2">Quantity</span>
                                                        <div className='flex items-center gap-1'>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]"
                                                            >
                                                                <IoMdArrowDropup />
                                                            </button>
                                                            <li className="flex flex-wrap gap-4">
                                                                0
                                                            </li>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]">
                                                                <IoMdArrowDropdown />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">$40</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="lg:max-w-[120px] xl:max-w-[140px] max-w-[140px] p-5 shrink-0 bg-gray-200 rounded-lg">
                                                <img src="https://readymadeui.com/images/product12.webp" className="w-full object-contain" alt="Product 4" />
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <h3 className="text-start text-gray-800 font-bold">Rolex</h3>
                                                <ul className="text-sm text-gray-800 space-y-1 mt-1 w-full">
                                                    <li className="flex flex-wrap gap-4">
                                                        Size <span className="ml-auto">37</span>
                                                    </li>
                                                    <div className='flex items-center justify-between'>
                                                        <span className="pr-2">Quantity</span>
                                                        <div className='flex items-center gap-1'>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]"
                                                            >
                                                                <IoMdArrowDropup />
                                                            </button>
                                                            <li className="flex flex-wrap gap-4">
                                                                0
                                                            </li>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]">
                                                                <IoMdArrowDropdown />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">$40</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="lg:max-w-[120px] xl:max-w-[140px] max-w-[140px] p-5 shrink-0 bg-gray-200 rounded-lg">
                                                <img src="https://readymadeui.com/images/product9.webp" className="w-full object-contain" alt="Product 5" />
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <h3 className="text-start text-gray-800 font-bold">Rolex</h3>
                                                <ul className="text-sm text-gray-800 space-y-1 mt-1 w-full">
                                                    <li className="flex flex-wrap gap-4">
                                                        Size <span className="ml-auto">37</span>
                                                    </li>
                                                    <div className='flex items-center justify-between'>
                                                        <span className="pr-2">Quantity</span>
                                                        <div className='flex items-center gap-1'>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]"
                                                            >
                                                                <IoMdArrowDropup />
                                                            </button>
                                                            <li className="flex flex-wrap gap-4">
                                                                0
                                                            </li>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]">
                                                                <IoMdArrowDropdown />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">$40</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="lg:max-w-[120px] xl:max-w-[140px] max-w-[140px] p-5 shrink-0 bg-gray-200 rounded-lg">
                                                <img src="https://readymadeui.com/images/product10.webp" className="w-full object-contain" alt="Product 1" />
                                            </div>
                                            <div className="w-full flex flex-col justify-between">
                                                <h3 className="text-start text-gray-800 font-bold">Rolex</h3>
                                                <ul className="text-sm text-gray-800 space-y-1 mt-1 w-full">
                                                    <li className="flex flex-wrap gap-4">
                                                        Size <span className="ml-auto">37</span>
                                                    </li>
                                                    <div className='flex items-center justify-between'>
                                                        <span className="pr-2">Quantity</span>
                                                        <div className='flex items-center gap-1'>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]"
                                                            >
                                                                <IoMdArrowDropup />
                                                            </button>
                                                            <li className="flex flex-wrap gap-4">
                                                                0
                                                            </li>
                                                            <button
                                                                className="cursor-pointer items-center font-bold text-xl border justify-center duration-100 text-[#C4932C]">
                                                                <IoMdArrowDropdown />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <li className="flex flex-wrap gap-4">
                                                        Total Price <span className="ml-auto">$40</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-5 lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full py-4">
                                    <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                                        Total <span className="ml-auto">$240.00</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;




