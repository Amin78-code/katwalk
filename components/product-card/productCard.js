import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MessageBox from "../message-box/messageBox";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";
import styles from "./productCard.module.css";

function ProductCard({ data, newTag }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowMsgBox, setIsShowMsgBox] = useState(false);

  const addToWishList = () => {
    if (isLogin == true) {
      setIsShowMsgBox(true);
      setTimeout(() => {
        disableMsgBox();
      }, 3000);
    } else {
      setIsShowMsgBox(false);
    }
  };
  const disableMsgBox = () => {
    setIsShowMsgBox(false);
  };

  return (
    <>
      <div
        className={`${styles.product_card_div} card cursor-pointer mt-[20px] mb-[15px] relative      sm:min-w-[24.4%] sm:w-[24.4%] md:min-w-[24.9%] md:w-[24.9%]`}
      >
        <div
          className="my-icon heart-for-product-detail w-[25px] h-[25px] cursor-pointer absolute right-[5px] top-[5px] z-[1] bgAllIcon bg-[left_-3px_top_-69px] scale-[.8]     md:right-[15px] md:top-[15px] md:scale-[1]"
          onClick={() => addToWishList()}
        ></div>
        <Link href="/product-detail">
          <a>
            <div className="w-[100%] max-h-[530px] relative     2xl:max-h-[unset]">
              <span className="image_container">
                <ImgLazyLoad src={data.img} alt={"image"} classesName={""} />
              </span>
              {newTag == "none" ? (
                ""
              ) : (
                <span className="absolute left-0 top-0 uppercase h-[22px] px-[10px] bg-[#000] text-[#fff] text-[12px] leading-[20px]">
                  new in
                </span>
              )}
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="ffr text-[18px] text-[#000]">
                {data.companyName}
              </h3>
              <p
                className={`title inline-block taPoint3 fwr text-[14px] text-[#000] mb-[5px] overflow-hidden w-[100%] whitespace-nowrap text-ellipsis      lg:inline`}
              >
                {data.productName}
              </p>
              <p className="fwr text-[14px] text-[#adadad]">SAR {data.price}</p>
            </div>
          </a>
        </Link>
      </div>

      {isShowMsgBox == true ? (
        <MessageBox message={"Please login first"} />
      ) : (
        ""
      )}
    </>
  );
}

export default ProductCard;
