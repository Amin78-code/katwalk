import React from "react";
import styles from './sizeFilter.module.css'

function SizeFilter({data, size_dropdown}) {
 
  return (
    <>
      <div
        className={`w-[320px] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={size_dropdown}
      >
        <div className="w-[100%] px-[20px] py-[15px]">
          <p className="fwl text-[11px] text-[#1b1b28] capitalize pb-[10px]">
            size:
          </p>
          <div className="flex flex-wrap gap-x-[9px] gap-y-[9px]">
            {data.map((value, index) => {
              return <SizeFilterItem key={index} data={value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeFilter;

function SizeFilterItem({ data }) {
  return (
    <>
    {/* ${styles.active} */}
      <p className={`size-box taPoint3 cursor-pointer fwl w-[48px] h-[48px] border-[#fbf1e8] border-[1px] flex justify-center items-center text-[#1b1b28] text-[13px] leading-[13px] p-[5px] pr-[8px]`}>
        {data}
      </p>
    </>
  );
}
