import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div id='testimonials' className="max-[800px]:px-[5%] px-[7%]">
      <div className="text-center pt-16">
        <p className="uppercase font-semibold text-[#1c0f97fa] ">
          Testimonials{" "}
        </p>
        <h1 className="text-3xl font-bold text-[#0c0647fa] mt-1 ">
          What Student Says
        </h1>
      </div>
      <div className="max-[800px]:my-[40px] max-[800px]:px-[40px] my-[70px] mx-auto px-[80px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            650: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
        
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="max-w-[200%] shadow-lg bg-blue-50  rounded-lg  px-5 py-6">
            <div className="  flex  gap-3 items-center max-[685px]:block max-[685px]:ml-3 ">
              <Image width={65} height={65} src="/images/user-1.png" alt="" className="  rounded-full border-2 border-[#1d1da6fa]" />
              <div><h3 className="max-[500px]:text-[16px] text-lg text-[#1d1da6fa] font-semibold">William Jackson</h3><span className="max-[500px]:text-[15px]">Edusity,USA</span></div>
            </div>
            <p className="text-left text-[15px] max-w-[90%] text-[#15156cfa] my-3 mx-2">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.The Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.  </p>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200%] shadow-lg bg-blue-50 rounded-lg  px-5 py-6">
            <div className="flex gap-3 items-center max-[685px]:block max-[685px]:ml-3  ">
              <Image width={65} height={65} src="/images/user-2.png" alt="" className=" rounded-full border-2 border-[#1d1da6fa]" />
              <div><h3 className="max-[500px]:text-[16px]  text-lg text-[#1d1da6fa] font-semibold">William Jackson</h3><span className="max-[500px]:text-[15px]">Edusity,USA</span></div>
            </div>
            <p className="text-left max-w-[90%] text-[15px] text-[#15156cfa] mx-2 my-3 ">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.The Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.  </p>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200%] shadow-lg bg-blue-50 rounded-lg  px-5 py-6">
            <div className="flex gap-3 items-center max-[685px]:block max-[685px]:ml-3  ">
              <Image width={65} height={65} src="/images/user-3.png" alt="" className="rounded-full border-2 border-[#1d1da6fa]" />
              <div><h3 className="max-[500px]:text-[16px] text-lg text-[#1d1da6fa] font-semibold">William Jackson</h3><span className="max-[500px]:text-[15px]">Edusity,USA</span></div>
            </div>
            <p className="text-left text-[15px] text-[#15156cfa] max-w-[90%] mx-2 my-3">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.The Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.  </p>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200%] shadow-lg bg-blue-50 rounded-lg  px-5 py-6">
            <div className="flex gap-3 items-center max-[685px]:block max-[685px]:ml-3  ">
              <Image width={65} height={65} src="/images/user-4.png" alt="" className=" rounded-full border-2 border-[#1d1da6fa]" />
              <div><h3 className="max-[500px]:text-[16px] text-lg text-[#1d1da6fa] font-semibold">William Jackson</h3><span className="max-[500px]:text-[15px]">Edusity,USA</span></div>
            </div>
            <p className="text-left text-[15px] max-w-[90%] mx-2 text-[#15156cfa] my-3">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.The Supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.  </p>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
