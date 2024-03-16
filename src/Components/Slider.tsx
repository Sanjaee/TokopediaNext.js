"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CustomNextArrow, CustomPrevArrow } from "./Arrow";

const SliderTop = () => {
  const [sliderData, setSliderData] = useState([]);

  const sliderDATA = [
    {
      id: 1,
      image: "slide1.jpg",
    },
    {
      id: 2,
      image: "slide2.jpg",
    },
  ];

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="bg-gray-400  sm:hidden mt-4">
      <div className=" mx-auto ">
        <div>
          <Slider {...settings}>
            {sliderDATA.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="Slider"
                  className="max-w-full h-auto "
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
