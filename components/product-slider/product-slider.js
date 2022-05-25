import React from "react";
import Image from "next/image";
import { data } from "autoprefixer";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allIcons from "../../assets/images/icons/all-icons.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "50px", height: "60px" }}
      onClick={onClick}
    />
  );
}

function ProductSlider({ data }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div className="my-icon heart-for-product-detail w-[25px] h-[25px] cursor-pointer absolute right-[10px] top-[10px] z-[1] bgAllIcon bg-[left_-3px_top_-69px]"></div>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <span className="image_container">
                  <Image src={value.image} alt="image" />
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default ProductSlider;
