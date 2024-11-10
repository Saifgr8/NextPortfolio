"use client";


import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import LeetCode from "../../../../public/Leetcode.png";
import gitImg from "../../../../public/GitHub.png";
import LinkedInImg from "../../../../public/linkedIn.png";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
//export const dynamic = 'auto'; // Correct
const data = [
  {
    img: LeetCode,
    title: "LeetCode",
    link: "https://leetcode.com/u/Saifgr8/",
    desc: "Peek into my problem solving skills through competetive platforms like Leetcode",
  },
  {
    img: gitImg,
    title: "GitHub",
    link: "https://github.com/Saifgr8/",
    desc: "Browse my passion for development by browing my GitHub profile",
  },
  {
    img: LinkedInImg,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sfud/",
    desc: "Explore my professional network, career achievements, and industry connections on LinkedIn.",
  },
];

const StarBg = () => {
  return (
    <div className=" h-[500px] absolute inset-0 w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage.."
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export function LensComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(Array(data.length).fill(false)); // Array to track hovering state

  // Function to update hovering state by index
  const handleHover = (index, isHovering) => {
    setHovering((prev) => {
      const newHovering = [...prev];
      newHovering[index] = isHovering;
      return newHovering;
    });
  };

  //max-w-5xl
  return (
    <div className="w-full relative text-center lg:pt-10">
      <StarBg />
      <span className="text-slate-300 text-xl lg:text-3xl absolute  inset-x-2 font-bold z-0">
        Professional media.<br />
        <span className="text-sm">( Click on image to zoom )</span>
      </span>
      {/* Desktop view */}
      <div className="hidden md:flex  w-full flex-row gap-8 justify-around items-center relative z-10 pd-10 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-1/2 max-w-sm h-72 m-10 mt-20 hover:overflow-y-scroll p-4 bg-gradient-to-br from-yellow-500 via-transparent to-transparent rounded-2xl"
          >
            <Lens
              hovering={hovering[index]}
              setHovering={(isHovering) => handleHover(index, isHovering)}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </Lens>
            <div className="py-4 z-20">
              <h2 className="text-2xl font-bold text-slate-300 underline cursor-pointer">
                <Link href={item?.link} target="_blank">{item.title}</Link>
              </h2>

              <p className="text-neutral-300 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col items-center relative z-10 pt-10">
        <div className="w-full max-w-xs rounded-xl p-4 bg-gradient-to-br from-yellow-500 via-transparent to-transparent m-4 mt-20">
          <Lens
            hovering={hovering[activeIndex]}
            setHovering={(isHovering) => handleHover(activeIndex, isHovering)}
          >
            <Image
              src={data[activeIndex].img}
              alt={data[activeIndex].title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </Lens>
          <motion.div className="py-4">
            <h2 className="text-2xl font-bold text-center text-white">
              <Link href={data[activeIndex].link}>
                {data[activeIndex].title}
              </Link>
            </h2>
            <p className="text-neutral-300 mt-2">{data[activeIndex].desc}</p>
          </motion.div>
        </div>
        {/* Number Controls */}
        <div className="flex gap-4">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-8 h-8 rounded-full font-semibold ${
                activeIndex === index
                  ? "bg-yellow-500 text-black"
                  : "bg-transparent text-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



