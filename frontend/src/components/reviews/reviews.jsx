import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";
import "./reviews.css"


const testimonials = [
    {
        id: 1,
        text: "I’m thrilled with my new watch! The design is sleek and modern, and its performance is flawless. It’s a real conversation starter and adds elegance to every outfit.",
        name: "James Robertson",
        job: "Manager",
        imgSrc: "https://i.ibb.co/hKgs8gm/profile.jpg"
    },
    {
        id: 2,
        text: "This watch exceeded my expectations! It’s stylish,comfort,reliable and perfect for both everyday wear and special occasions.Its precision are unmatched.",
        name: "David Lee",
        job: "CEO",
        imgSrc: "https://profilemagazine.com/wp-content/uploads/2024/02/Horatio-Porter-North-Texas-Tollway-Authority-1080x1080-thumbnail.jpg"
    },
    {
        id: 3,
        text: "A fantastic watch with superb quality and design. It maintains its elegance even with regular use. By the way truly impressive craftsmanship and a great investment.",
        name: "John Doe",
        job: "Co-Founder",
        imgSrc: "https://preview.redd.it/new-profile-pictures-for-yall-v0-brdjms2xte3c1.jpg?width=640&crop=smart&auto=webp&s=a785e9ec16789276c74b19398f4f41b471f672f8"
    },
    {
        id: 4,
        text: "Absolutely delighted with this watch!Its refined design and top-notch quality make it perfect for any occasion. Truly it’s a worthwhile addition to any collection.",
        name: "Sophia Williams",
        job: "Lawyer",
        imgSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
    },
    {
        id: 5,
        text: "This watch stands out in both style and function. Its classic look and precise timekeeping make it a great choice for any setting. A well-made and reliable watch.",
        name: "John Doe",
        job: "Engineer",
        imgSrc: "https://i.pinimg.com/564x/5a/42/75/5a4275ddf2aecd2b4097b19b3b19eb6a.jpg"
    }
];

const TestimonialSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full flex justify-center items-center">
            <div className="container">
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="p-5">
                            <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
                                <div className="mb-4">
                                    <i className="text-gray-500 text-xl"><FaQuoteRight /></i>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-500 text-sm font-semibold leading-5">{testimonial.text}</p>
                                </div>
                                <div className="mb-4">
                                    <img src={testimonial.imgSrc} alt="profile" className="w-16 h-16 rounded-full border-2 border-[#e5e5e5]" />
                                </div>
                                <div className="mb-2">
                                    <h4 className="text-gray-500 text-lg font-semibold leading-6">{testimonial.name}</h4>
                                </div>
                                <div className="testimonial_box-job">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider font-light">{testimonial.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSlider;
