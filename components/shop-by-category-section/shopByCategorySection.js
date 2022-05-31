import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";
import styles from "./shopByCategorySection.module.css";

function ShopByCategorySection({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.37,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="h-[auto] pt-[26px] pb-[5px]      sm:pt-[50px] sm:pb-[20px] lg:pt-[40px] lg:pb-[60px] lg:h-[450px]">
        <div className="container flex justify-start flex-col px-[0]     lg:flex-row lg:px-[20px]">
          <div className="w-[100%] pr-[20px]      lg:w-[44%]">
            <h2 className="fahkwang-light text-[#231F20] text-[22px] leading-[1.1] uppercase pb-[5px] mb-[10px]     sm:text-[28px]">
              {data.title}
            </h2>
            <p className="work-regular text-[16px] leading-[1.5] mb-[3px]     sm:mb-[0]">
              {data.text}
            </p>
          </div>
          <div className={`${styles.products_slider} w-[104%] max-w-[104%] pt-[20px]      sm:w-[100%] sm:max-w-[100%] lg:pt-[0] lg:max-w-[695px]`}>
            <Slider {...settings}>
              {data.subCategories.map((value, index) => {
                return (
                  <div
                    className="category-card max-w-[100%] cursor-pointer      sm:max-w-[215px]"
                    key={index}
                  >
                    <div className="w-[100%] img-div">
                      <span className="image_container transition-all duration-300">
                        <ImgLazyLoad
                          src={value.img}
                          alt={"image"}
                          classes={""}
                        />
                      </span>
                    </div>
                    <h5 className="fahkwang-light text-[12px] uppercase text-center mt-[8px]      sm:text-[14px] sm:mt-[3px]">
                      {value.name}
                    </h5>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopByCategorySection;
