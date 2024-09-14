import Image from "next/image";
import React from "react";

const Campus = () => {
  return (
    <div id='campus' className="max-[800px]:px-[5%] px-[10%]">
      <div className="text-center pt-16">
        <p className="uppercase font-semibold text-[#1c0f97fa] ">Gallery </p>
        <h1 className="text-3xl font-bold text-[#0c0647fa] mt-1 ">
          Campus Photos
        </h1>
      </div>
      <div className="text-center my-[70px] mx-auto w-[90%]">
        <div className="max-[800px]:flex-wrap flex items-center justify-between mb-[40px]">
          <Image width={150} height={100} src="/images/gallery-1.png" alt="" className="w-[23%] rounded-lg max-[800px]:w-[48%] max-[800px]:mb-[20px]"/>
          <Image width={100} height={100} src="/images/gallery-2.png" alt="" className="w-[23%] rounded-lg max-[800px]:w-[48%] max-[800px]:mb-[20px]"/>
          <Image width={100} height={100} src="/images/gallery-3.png" alt="" className="w-[23%] rounded-lg max-[800px]:w-[48%] max-[800px]:mb-[20px]"/>
          <Image width={100} height={100} src="/images/gallery-4.png" alt="" className="w-[23%] rounded-lg max-[800px]:w-[48%] max-[800px]:mb-[20px]"/>
        </div>
        <button className='bg-[#1d1da6fa] inline-flex items-center gap-1 justify-center text-white px-4 py-3 text-md outline-none border-none rounded-3xl'>See more here    <img src="/images/white-arrow.png" alt=""  className='w-4 h-3 ' /></button>
      </div>
    </div>
  );
};

export default Campus;
