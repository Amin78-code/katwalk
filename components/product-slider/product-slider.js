import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { data } from "autoprefixer";
import styles from "./productSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allIcons from "../../assets/images/icons/all-icons.svg";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";
import MessageBox from "../message-box/messageBox";
import { getPageFiles } from "next/dist/server/get-page-files";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "35px", height: "50px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "35px", height: "50px" }}
      onClick={onClick}
    />
  );
}

function ProductSlider({ data }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowMsgBox, setIsShowMsgBox] = useState(false);

  const addToWishList = () => {
    if (isLogin == true) {
      setIsShowMsgBox(true);
      setTimeout(() => {
        disableMsgBox()
      }, 3000);
    } else {
      setIsShowMsgBox(false);
    }
  };

  const disableMsgBox = () => {
    setIsShowMsgBox(false)
  }

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
        <div onClick={() => addToWishList()} className="my-icon heart-for-product-detail w-[25px] h-[25px] cursor-pointer absolute right-[14px] top-[6px] z-[1] bgAllIcon bg-[left_-3px_top_-69px]"></div>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <span className="image_container">
                  <ImgLazyLoad src={value.image} alt={"image"} classes={""} />
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
      {isShowMsgBox == true ? (
        <MessageBox message={"Please login first"} />
      ) : (
        ""
      )}
    </>
  );
}

export default ProductSlider;
