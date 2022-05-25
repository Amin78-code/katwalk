import React from "react";
import Image from "next/image";
import styles from "./go-to-top.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

function GoToTop() {
  return (
    <>
      <div className="w-[50px] h-[50px] bg-[#c83e27] fixed bottom-[100px] right-[0] flex justify-center items-center">
        <AiOutlineArrowUp className="text-[#fff] text-[24px]" />
      </div>
    </>
  );
}

export default GoToTop;
