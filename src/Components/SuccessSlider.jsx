import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const slides = [
  {
    text: `Mr David runs a manufacturing company that works in the field of medical devices, with operations across the country. With respect for the environment and experience using conventional IP systems.`,
    image: "https://1mdm.com/about/assets/slider-1.webp",
  },
  {
    text: `Lab Evolution is an import-export company offering reagents and lab equipment. Their expert team helps customers worldwide with top brands and reliable service.`,
    image: "https://1mdm.com/about/assets/slider-2.webp",
  },
  {
    text: `Rupesh Kanna started a blog in 2016, sharing his experience as a lab technician. He created his own product line focused on diverse, high-quality pigmented imaging devices.`,
    image: "https://1mdm.com/about/assets/slider-3.webp",
  },
  {
    text: `LTA International Global Services LLC is a Florida-based export firm selling top US medical devices globally. Founded by Loyd in 1994, LTA excels in logistics and pricing.`,
    image: "https://1mdm.com/about/assets/slider-4.webp",
  },
];

const SuccessSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-10 overflow-hidden">
      <div className="max-w-[90vw] mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success stories from 1mdm.com sellers
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-10 z-10 cursor-pointer"
            aria-label="Previous slide"
          >
            <BsArrowLeftCircleFill size={40} className="text-white" />
          </button>

          {/* Slide Wrapper */}
          <div className="overflow-hidden w-full rounded-xl shadow-lg bg-white">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row"
                >
                  {/* Text */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
                    <FaQuoteLeft className="text-3xl text-red-500 mb-2" />
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                      {slide.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                      src={slide.image}
                      alt="1mdm-product"
                      className="w-full h-full object-cover max-h-[500px] rounded-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-10 z-10 cursor-pointer"
            aria-label="Next slide"
          >
            <BsArrowRightCircleFill size={40} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSlider;
