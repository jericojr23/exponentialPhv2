import Image from "next/image";
import React from "react";

function JoinExponentialPh() {
  return (
    <div className="mx-32 my-16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-5xl mb-10">
          Tasks made easier with<i> ExponentialPH</i>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2   border-[#5EF4FD] bg-[#00CCFF] text-white rounded-md"
          type="button"
        >
          Join ExponentialPH
        </button>
      </div>
      <div className=" w-full h-96">
        <Image src="/join.jpg" fill alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinExponentialPh;