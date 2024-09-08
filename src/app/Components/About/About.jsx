import Image from "next/image";
import React from "react";

const About = ({setplayVideo}) => {
  return (
    <>
      <div id='about' className=" max-[800px]:flex-col  max-[800px]:px-[5%] my-16  py-3 px-[3%] mx-auto w-[90%] flex items-center justify-between ">
        <div className="max-[800px]:w-[100%] max-[800px]:order-2 relative w-[60%] max-[900px]:w-[46%]">
         <img src="/images/about.png" alt="" className=" w-full rounded-lg" />{" "}
          <img src="/images/play-icon.png" alt=""  className=" absolute max-[800px]:w-[50px] w-[60px] top-[50%] right-[30%] max-[800px]:right-[40%] min-[900px]:right-[41%] -translate-x-[50%] -translate-y-[50%] cursor-pointer  " onClick={()=>{setplayVideo(true)}} />
        </div>
        <div className="max-[800px]:w-[100%] max-[900px]:w-[50%]  w-[36%]">
          <h2 className="text-xl  max-[1075px]:text-lg font-semibold text-[#150791fa]">ABOUT UNIVERSITY</h2>
          <h3 className="text-4xl max-[1075px]:text-2xl  max-[1075px]:mb-[7px] font-bold max-w-[400px] text-[#0c0647fa] my-[10px]">Nurturing Tommorow's Leaders Today</h3>
          <p className="text-[15px] text-[#0c0647fa] mb-[15px]  max-[1075px]:text-[14.5px]  max-[1075px]:mb-[10px]">
            Embark on a transformational educational journey with our
            university's comprehensive educational program. Our cutting-edge
            curriculum is designed to empower students with the knowledge,
            skills, and experiences needed to excel in the dynamic field of
            education.
          </p>
          <p className="text-[15px] text-[#0c0647fa] mb-[15px]  max-[1075px]:text-[13px]  max-[1075px]:mb-[10px]">
            with a focus on innovation, hands-on learning and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools and communities
          </p>
          <p className="text-[15px] text-[#0d083afa] mb-[15px]  max-[1075px]:text-[13px]  max-[1075px]:mb-[10px]">
            Whether you aspire to ecome a teacher, administrator, counseller or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
