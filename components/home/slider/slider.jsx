"use client";
import { useState, useEffect } from "react";
import "./slider.css";
import Image from "next/image";

const sliders = [
  {
    id: 1,
    src: "/sliderimages/img1.jpg",
    text: "Manalahasan - Your Ultimate Online Shopping Destination",
  },
  {
    id: 2,
    src: "/sliderimages/img2.jpg",
    text: "Manalahasan - Embrace the Latest Fashion Trends",
  },
  {
    id: 3,
    src: "/sliderimages/img3.jpg",
    text: "Manalahasan - Elevate Your Style with Stylish Accessories",
  },
  {
    id: 4,
    src: "/sliderimages/img4.jpg",
    text: "Manalahasan - Discover Perfect Gifts for Every Occasion",
  },
  {
    id: 5,
    src: "/sliderimages/img5.jpg",
    text: "Manalahasan - Enhance Your Home Decor with our Collection",
  },
  {
    id: 6,
    src: "/sliderimages/img6.jpg",
    text: "Manalahasan - Stay Active with our Top Fitness Gear",
  },
  {
    id: 7,
    src: "/sliderimages/img7.jpg",
    text: "Manalahasan - Indulge in Luxury Beauty Products",
  },
];

const Slider = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const nextSlide = () => {
    if (sliderNumber === sliders.length - 1) {
      setSliderNumber(0);
    } else {
      setSliderNumber(sliderNumber + 1);
    }
  };
  console.log(sliderNumber);
  const prevSlide = () => {
    setSliderNumber((prevNumber) =>
      prevNumber === 0 ? sliders.length - 1 : prevNumber - 1
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [sliderNumber]);
  return (
    <div className="slidercomponent   relative">
      <div className="sliderwrapper">
        <div>
          <Image
            className="xl:h-screen lg:h-screen"
            src={sliders[sliderNumber]?.src}
            alt={sliders[sliderNumber]?.text}
            height={250} // Decreased height to 250
            width={1350}
          />
          <span className="absolute xl:text-6xl lg:text-6xl text-xl slidertext">
            {sliders[sliderNumber]?.text}
          </span>
          <div
            className="leftarrow xl:text-3xl lg:text-3xl text-2xl rounded-full xl:h-14 lg:w-8 lg:h-8  xl:w-14 flex items-center justify-center"
            onClick={() => prevSlide()}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div
            className="rightarrow xl:text-3xl lg:text-3xl text-2xl rounded-full xl:h-14 lg:w-8 lg:h-8  xl:w-14 flex items-center justify-center"
            onClick={() => nextSlide()}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
