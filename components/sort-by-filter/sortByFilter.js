import React from "react";
import styles from './sortByFilter.module.css'

function SortByFilter({data,sort_by_dropdown}) {
 
  return (
    <>
      <div
        className={`w-[320px] max-w-[100%] border-[#fbf1e8] border-[1px] absolute z-[2] bg-[#fff] f-out max-h-[350px] overflow-auto`}
        ref={sort_by_dropdown}
        >
        <div className="w-[100%]">
          <div className="flex flex-wrap ">
            {data.map((value, index) => {
              return <SortByFilterItem key={index} data={value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SortByFilter;

function SortByFilterItem({ data }) {
  return (
    <>
    {/* ${styles.active} */}
      <p className={`size-box taPoint3 cursor-pointer fwl w-[100%] h-[48px] border-[#fbf1e8] border-t-[1px] border-b-[1px] mt-[-1px] flex items-center text-[#1b1b28] text-[13px] leading-[13px] p-[5px] pr-[8px]`}>
        {data}
      </p>
    </>
  );
}
