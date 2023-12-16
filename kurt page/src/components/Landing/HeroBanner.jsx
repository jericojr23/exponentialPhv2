import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function HomeBanner() {
  const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 4 ? 1 : image + 1),
      5000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[680px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <Image
          alt="hero"
          src="/bg1.png"
          fill
          className={`${image === 1 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg2.jpg"
          fill
          className={`${image === 2 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg3.jpg"
          fill
          className={`${image === 3 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg4.jpg"
          fill
          className={`${image === 4 ? "opacity-100" : "opacity-0"} transition-all duration-1000`}
        />
        
      </div>
      <div className="z-10 relative w-[700px] flex justify-center flex-col h-full gap-5 ml-20">
        <h1 className="text-white text-5xl leading-snug">
        <i>The Best Technological Solutions </i>
        </h1>
        <div className="flex align-middle">
        </div>
        
      </div>
    </div>
  );
}

export default HomeBanner;
