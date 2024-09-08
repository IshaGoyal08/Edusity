import Image from "next/image";
import React from "react";
import "./programs.css";

const Programs = () => {
  return (
    <div id='programs' className="max-[800px]:px-[5%] py-3 px-[10%]">
      <div className="text-center pt-16">

        <p className="uppercase font-semibold text-[#1c0f97fa] ">Our Program </p>
<h1 className="text-3xl font-bold text-[#0c0647fa] mt-1 ">What We offer</h1>
      </div>
      <div className="  py-3  mx-auto my-20 w-[95%] flex items-center justify-between gap-10 max-[700px]:flex-col max-[850px]:my-10 ">
        <div className="relative">
          <Image
            src={"/images/program-1.png"}
            width={450}
            height={450}
            className="rounded-2xl"
            alt=""
          ></Image>
          <div className="caption">
            <Image
              src={"/images/program-icon-1.png"}
              width={60}
              height={60}
              alt=""
              className="mb-3"
            ></Image>
            <p className="font-semibold text-lg">Graduation Degree</p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/images/program-2.png"}
            width={450}
            height={450}
            className="rounded-2xl "
            alt=""
          ></Image>
          <div className="caption">
            <Image
              src={"/images/program-icon-2.png"}
              width={60}
              height={60}
              alt=""
              className="mb-3"
            ></Image>
            <p className="font-semibold text-lg">Masters Degree</p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/images/program-3.png"}
            width={450}
            height={450}
            className="rounded-2xl "
            alt=""
          ></Image>
          <div className="caption">
            <Image
              src={"/images/program-icon-3.png"}
              width={60}
              height={60}
              alt=""
              className="mb-3"
            ></Image>
            <p className="font-semibold text-lg">Post Graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
