import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function Everything() {
  const everythingData = [
    {
      title: "Boost your skills",
      subtitle:
        "Access a wealth of training resources and courses to enhance your expertise. Stay ahead of the competition and grow your career.",
    },
    {
      title: "Explore Exciting Freelance Projects",
      subtitle:
        "Browse a diverse selection of freelance opportunities and tasks from leading companies. Find the perfect projects for your skills.",
    },
    {
      title: "Maximize Your Potential: Jobs and Skill Building",
      subtitle:
        "Maximize your freelancing potential with job options and skill-building opportunities. Your potential, your way.",
    },
    {
      title: "Balancing Work and Skill Enhancement",
      subtitle:
        "Unleash potential through balanced work and skills",
    },
  ];
  return (
    <div className="bg-[#8EF8FF] flex py-20 justify-between px-24">
      <div>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          Your Gateway to Success.
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex gap-2 items-center text-xl">
                  <BsCheckCircle className="text-[#62646a]" />
                  <h4>{title}</h4>
                </div>
                <p className="text-[#62646a]">{subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-96 w-2/4">
        <Image src="/everything.webp" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;