import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import Poster from "../assets/Title.png"
import Reload from "../assets/reload.png"
import Maximize from "../assets/maximize.png"

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    const images = [
        {
            src: Poster,
            alt: 'Carousel Item 1',
        },
        {
            src: Poster,
            alt: 'Carousel Item 2',
        },
        {
            src: Poster,
            alt: 'Carousel Item 3',
        },
        {
            src: Poster,
            alt: 'Carousel Item 4',
        },
    ];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (



        <div className="mx-auto w-1/2 my-9"> {/* Center the carousel */}
            <div className="carousel relative w-full h-64"> {/* Set carousel height */}
                {/* Carousel images */}
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item w-full">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full rounded-[30px] h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom navigation with arrows and numbers */}
            <div className="flex justify-around items-center mt-2">
                <img className='w-[31px] h-[31px]' src={Reload} alt="" />
                {/* Left arrow */}
                <button
                    onClick={handlePrev}
                    className="mr-2 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-600"
                    aria-label="Previous Slide"
                >
                    &lt;
                </button>

                {/* Slide number */}
                <span className="text-black" >{currentSlide + 1} / {totalSlides}</span>

                {/* Right arrow */}
                <button
                    onClick={handleNext}
                    className="ml-2 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-600"
                    aria-label="Next Slide"
                >
                    &gt;
                </button>
                <img className='w-[31px] h-[31px]' src={Maximize} alt="" />
            </div>




        </div>
    );
}

export default Carousel;
