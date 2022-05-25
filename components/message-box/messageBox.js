import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./messageBox.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function MessageBox() {
  return (
    <>
      <div className="w-[100%] min-w-[350px] max-w-[350px] h-[60px] bg-[#ffc519] absolute top-[20px] right-[20px] z-[20]">
        <p className="fwr text-[14px] text-[#fff]">
          Please choose all the options
        </p>
      </div>
    </>
  );
}

export default MessageBox;
