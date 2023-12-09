import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularTasks() {
  const router = useRouter();
  const popularServicesData = [
    { name: "Data Analysis", 
    label: "Customize Abilities of AI", 
    image: "/service1.jpg" 
    },
    { name: "Logo Design", 
    label: "Make Companies Known", 
    image: "/service2.jpg" },
    {
      name: "Data Cleaning",
      label: "Perform Image Processing",
      image: "/service3.jpg",
    },
    {
      name: "Web Development",
      label: "Create Interactive Web Applications",
      image: "/service4.jpg",
    },
    {
      name: "Blockchain Development",
      label: "Build Decentralized Apps (dApps)",
      image: "/service5.jpg",
    },
    { name: "Cybersecurity", 
    label: "Protect Digital Assets and Data", 
    image: "/service6.jpg" },
    {
      name: "UI/UX Design",
      label: "Craft Intuitive and Attractive Interfaces",
      image: "/service7.jpeg",
    },
    { name: "Game Development", 
    label: "Build Play-to-Earn Games", 
    image: "/service8.webp" },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#00A9FF] font-bold">
        Top Tasks
      </h2>
      <ul className="flex flex-wrap gap-16">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72 ">
                <Image src={image} fill alt="service" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularTasks;