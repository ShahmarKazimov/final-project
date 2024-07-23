import React, { useState } from 'react';
import faqLogo from "../../assets/black-watch.jpg"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <section className="mb-12">
      <h2 className="text-3xl font-bold inline-block my-10">FAQ</h2>

        <div className=" rounded-lg mx-auto sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px]">
          <div className="flex flex-col justify-center items-start gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between mx-auto max-w-full">
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              <img
                src={faqLogo}
                alt="FAQ tailwind section"
                className="w-full object-cover h-[450px]"
              />
            </div>
            <div className="w-full lg:w-1/2 sm:pl-5">
              <div className="lg:max-w-xl flex flex-col justify-between">
                <div className="mb-6 lg:mb-10">
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group overflow-y-auto" style={{ maxHeight: '340px' }}>
                  <div className="accordion pb-5 border-b border-dashed border-[#C4932C]" id="basic-heading-one-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 0 ? 'accordion-active:text-gray-800 accordion-active:font-medium always-open' : ''
                        }`}
                      onClick={() => toggleAccordion(0)}
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5>How to create an account?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 0 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 0 ? 'active' : ''
                        }`}
                      style={{ maxHeight: activeIndex === 0 ? '100px' : '0' }}
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-start font-normal text-gray-600">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with your
                        personal information, and click 'Create account' or 'Sign
                        up.' Verify your email address if needed, and then log in
                        to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-5 border-b border-dashed border-[#C4932C]" id="basic-heading-two-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between font-semibold text-xl leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 1 ? 'accordion-active:text-gray-800 accordion-active:font-medium' : ''
                        }`}
                      onClick={() => toggleAccordion(1)}
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5>Are your watches authentic?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 1 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 1 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 1 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        Yes, all our watches are 100% authentic and sourced directly from the manufacturer.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-5 border-b border-dashed border-[#C4932C]" id="basic-heading-three-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 2 ? 'accordion-active:font-medium accordion-active:text-gray-800' : ''
                        }`}
                      onClick={() => toggleAccordion(2)}
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5> Where do you source your watches from?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 2 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 2 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 2 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        We source our watches directly from manufacturers or authorized distributors.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-5 border-b border-dashed border-[#C4932C]" id="basic-heading-four-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 3 ? 'accordion-active:font-medium accordion-active:text-gray-800' : ''
                        }`}
                      onClick={() => toggleAccordion(3)}
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5>When will my order be shipped?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 3 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 3 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 3 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        Orders are typically shipped within 1-2 business days after payment confirmation.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-5 border-b border-dashed border-[#C4932C]" id="basic-heading-five-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 4 ? 'accordion-active:font-medium accordion-active:text-gray-800' : ''
                        }`}
                      onClick={() => toggleAccordion(4)}
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5>Do you offer international shipping?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 4 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-five-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 4 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 4 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        Yes, we offer international shipping to most countries. Shipping fees and delivery times vary based on location.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-5 border-b border-dashed border-[#C4932C]" id="basic-heading-four-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 3 ? 'accordion-active:font-medium accordion-active:text-gray-800' : ''
                        }`}
                      onClick={() => toggleAccordion(5)}
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5>When will I receive my refund for a returned product?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 5 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 5 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 5 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        Once we receive the returned product, the refund process takes 5-7 business days to complete. The refund will be issued to your original payment method.
                      </p>
                    </div>
                  </div>
                  <div className="accordion py-6" id="basic-heading-four-with-arrow-always-open">
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-semibold leading-8 text-gray-800 w-full transition duration-500 hover:text-[#C4932C] ${activeIndex === 3 ? 'accordion-active:font-medium accordion-active:text-gray-800' : ''
                        }`}
                      onClick={() => toggleAccordion(6)}
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5>Do you provide after-sales support?</h5>
                      <svg
                        className={`text-gray-800 transition duration-500 group-hover:text-[#C4932C] ${activeIndex === 6 ? 'accordion-active:text-gray-800 accordion-active:rotate-180' : ''
                          }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === 6 ? 'active' : ''
                        }`}
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                      style={{ maxHeight: activeIndex === 6 ? '100px' : '0' }}
                    >
                      <p className="text-start text-gray-500 font-normal">
                        Yes, we offer after-sales support. If you encounter any issues, please contact us for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
