import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

function ExponentialPhBusiness({ image }) {
  return (
    <div className="bg-[#8EF8FF] px-20 py-16 flex gap-10">
      <div className="text-black flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-2">
          {/* <img src={"exphlogo.png"} alt="" /> */}
          <span className="text-white text-3xl font-bold">ExponentialPH</span>
        </div>
        <h2 className="text-3xl font-bold">Empowering Your Business</h2>
        <h4 className="text-xl">
          Elevate your business with a tailored experience, providing access to top-notch talent and exclusive resources.
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Skills Matching</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Dedicated Account Management</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Integrated Learning Platform</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Enhanced Security</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-5 py-2 border-[#5EF4FD] bg-[#00CCFF] text-white rounded-md"
          type="button"
        >
          Explore Business Solutions
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image src="/business.webp" alt="business" fill />
      </div>
    </div>
  );
}

export default ExponentialPhBusiness;
