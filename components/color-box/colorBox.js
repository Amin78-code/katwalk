import React from "react";
import styles from "./colorBox.module.css";

function ColorBox({ data }) {
  return (
    <>
      <div className={`${styles.color_main_div} `}>
      <div  className={` "w-[83px] m-[2px] color-selected "`}
        // onClick={(event) => {
        //   handleToggleClassListRef(ref);
        //   event.stopPropagation();
        //   ref.current = event.target;
        //   handleToggleClassListRef(ref);
        // }}
        >
        <div className={`w-[75px] h-[75px] ${data.colorCode} m-[3px]`}></div>
        <p className="work-regular text-[12px] leading-[1.2] tracking-[0.5px] pt-[3px] pr-[3px] pb-[5px] pl-[5px] ">
          {data.name}
        </p>
      </div>
       </div>
    </>
  );
}

export default ColorBox;
