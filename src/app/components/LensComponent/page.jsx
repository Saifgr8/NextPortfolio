"use client";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import LeetCode from "../../../../public/LeetCode.png";
import gitImg from "../../../../public/GitHub.png";
import LinkedInImg from "../../../../public/linkedIn.png";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

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
    <div className="w-full relative text-center">
      <StarBg />
      <span className="text-slate-300 text-xl lg:text-3xl absolute inset-0 font-bold z-0">
        Professional media
      </span>
      {/* Desktop view */}
      <div className="hidden md:flex  w-full flex-row gap-8 justify-around items-center relative z-10 pd-10 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-1/2 max-w-sm h-72 m-10 mt-20 overflow-y-scroll no-scrollbar p-4 bg-gradient-to-br from-yellow-500 via-transparent to-transparent rounded-2xl"
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
                <Link href={item?.link}>{item.title}</Link>
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

{
  /* <div className="relative">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <StarBg />
        </div>
        <div className="flex flex-row items-center  justify-center flex-wrap">
          <h1 className="text-center  text-xl lg:text-4xl font-bold text-white dark:text-white z-50">
             Professional Media
          </h1>
          <div className=" relative z-10 w-full flex lg:gap-8 lg:flex-row flex-col justify-around">
            <div className="w-full relative rounded-3xl overflow-hidden  max-w-md mx-auto bg-gradient-to-br from-yellow-700 via-[#121318] to-black p-8 my-10">
              <div>
                <Lens hovering={hovering1} setHovering={setHovering1}>
                  <Image
                    src={LeetCode}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  />
                </Lens>
                <motion.div
                  animate={{
                    filter: hovering1 ? "blur(2px)" : "blur(0px)",
                  }}
                  className="py-4 relative z-20"
                >
                  <Link href={`https://leetcode.com/u/Saifgr8/`}>
                    <h2 className="text-white text-2xl text-center lg:text-left font-bold underline">
                      Leetcode
                    </h2>
                  </Link>
                  <p className="text-neutral-200 text-left  mt-4">
                    Peek into my problem solving skills through competetive
                    platforms like Leetcode
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-full relative rounded-3xl overflow-hidden  max-w-md mx-auto bg-gradient-to-br from-yellow-700 via-[#121318] to-black p-8 my-10">
              <div>
                <Lens hovering={hovering2} setHovering={setHovering2}>
                  <Image
                    src={gitImg}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  />
                </Lens>
                <motion.div
                  animate={{
                    filter: hovering2 ? "blur(2px)" : "blur(0px)",
                  }}
                  className="py-4 relative z-20"
                >
                  <Link href={`https://github.com/Saifgr8`}>
                    <h2 className="text-white text-2xl text-center lg:text-left font-bold underline">
                      GitHub
                    </h2>
                  </Link>
                  <p className="text-neutral-200 text-left  mt-4">
                    Browse my passion for development by browing my GitHub
                    profile
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-full relative lg:rounded-3xl overflow-hidden  max-w-md mx-auto bg-gradient-to-br from-yellow-700 via-[#121318] to-black p-8 lg:my-10">
              <div>
                <Lens hovering={hovering3} setHovering={setHovering3}>
                  <Image
                    src={LinkedInImg}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  />
                </Lens>
                <motion.div
                  animate={{
                    filter: hovering3 ? "blur(2px)" : "blur(0px)",
                  }}
                  className="py-4 relative z-20"
                >
                  <Link href={`https://www.linkedin.com/in/sfud/`}>
                    <h2 className="text-white text-2xl text-center lg:text-left font-bold underline">
                      LinkedIn
                    </h2>
                  </Link>
                  <p className="text-neutral-200 text-left  mt-4">
                    {" "}
                    Explore my professional network, career achievements, and
                    industry connections on LinkedIn.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}

// Sorry about this but it looks coo
