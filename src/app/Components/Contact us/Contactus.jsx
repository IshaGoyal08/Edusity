import React, { useState } from "react";

const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "c3b01f3c-1252-47e7-a658-acacbb34e74c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact'>
      <div className="text-center pt-16">
        <p className="uppercase font-semibold text-[#1c0f97fa] ">Contact us </p>
        <h1 className="text-3xl font-bold text-[#0c0647fa] mt-1 ">
          Get In Touch
        </h1>
      </div>
      <div className="w-[90%] mx-auto max-[700px]:my-[40px] my-[80px] flex items-center justify-between max-[700px]:block">
        <div className="w-[48%] max-[700px]:w-[100%] max-[700px]:p-[20px]">
          <h3 className="flex mb-[20px] items-center gap-2 text-2xl max-[500px]:text-xl font-semibold text-[#0c0647fa]">
            Send us a message{" "}
            <img src="/images/msg-icon.png" alt="" className="w-[35px] max-[500px]:w-[30px] " />
          </h3>
          <p className="max-w-[450px] max-[450px]:text-[15px]">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.{" "}
          </p>
          <ul className="">
            <li className="mt-[15px] flex gap-2 items-center">
              <img src="/images/mail-icon.png" alt="" className="w-[22px]" />{" "}
              Goyalisha807@gmail.com
            </li>
            <li className="mt-[13px] flex gap-2 items-center">
              <img src="/images/phone-icon.png" alt="" className="w-[22px]" />{" "}
              +11 123-456-7890
            </li>
            <li className="mt-[13px] flex gap-2 items-center">
              <img
                src="/images/location-icon.png"
                alt=""
                className="w-[22px]"
              />{" "}
              77 Massachute Ave,cambridge <br />
              MA 02139, united states
            </li>
          </ul>
        </div>
        <div className="w-[48%] max-[700px]:w-[100%] max-[700px]:p-[20px]">
          <form className="" onSubmit={onSubmit}>
            <label>Your Name</label>{" "}
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              required
              className="block bg-sky-100 w-[100%] p-[12px] outline-none border-none mt-1  mb-3 resize-none"
            />{" "}
            <label>Phone Number</label>
            <input
              type="number"
              name="tel"
              placeholder="enter your mobile number"
              required
              className="block bg-sky-100 w-[100%] p-[12px] outline-none border-none mt-1 mb-3 resize-none"
            />
            <label>Enter your messages here</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
              className="block bg-sky-100 w-[100%] p-[12px] outline-none border-none mt-1 mb-3 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1d1da6fa] inline-flex items-center gap-1 justify-center text-white px-4 py-3 text-md outline-none border-none rounded-3xl"
            >
              Submit Now{" "}
              <img src="/images/white-arrow.png" alt="" className="w-4 h-3 " />
            </button>
          </form>
          <span className="block my-[20px] text-gray-700">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
