import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./hero.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <>
      <section className={`${styles.hero_section} mt-[60px] flex flex-col justify-end items-center relative     sm:h-[350px] sm:mt-[80px] md:h-[480px] lg:h-[630px]`}>
        <div className="absolute w-[100%] h-[100%] top-0 bottom-0">
          <span className="image_container">
            <Image src={heroImage} alt="Hero image" />
          </span>
        </div>
        <div className="text-center pb-[45px] z-[0]">
          <h2 className="fahkwang-light text-[#fff] text-[26px] leading-[1.1] tracking-[.2em] uppercase pb-[5px]">HELLO SUMMER</h2>
          <button className={`${styles.orange_anim_btn} relative work-regular text-[#fff] text-[13px] leading-[1.1] tracking-[.2em] uppercase px-[4px] py-[8px]`}>shop now</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
