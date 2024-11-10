"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import kyfImg from "../../../../public/KYF.png";
import mernImg from "../../../../public/MernCards.png";
import ytImg from "../../../../public/YouTube.png";
import pokerImg from "../../../../public/MagicPoker.png";
import Link from "next/link";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { animate } from "@tsparticles/engine";
import { SparklesCore } from "@/components/ui/sparkles";
import { FaYoutube } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <ThreeDCardDemo />
    </div>
  );
};
const data = [
  {
    title: "Know Your Food (KYF)",
    desc: (
      <div>
        A health and fitness website developed in{" "}
        <span className="font-bold">React</span> ,
        <span className="font-bold">Springboot</span> ,
        <span className="font-bold">MongoDB</span> with{" "}
        <span className="font-bold">MUI</span> with over 100k food indgredients
        and recipes. Carefully desgined 3 trainng programs to start your fitness
        journey.
      </div>
    ),
    img: kyfImg,
    ytLink: "https://www.youtube.com/watch?v=KcXTxtHXmxU&t=9s",
    link: "https://kyf-frontend.azurewebsites.net/app",
  },
  {
    title: "Card Customiser",
    desc: (
      <div>
        Are you an anime enthusiast, a nature lover, or a dedicated gym-goer?
        Show off your style and make your bank card unique! With over 100 themes
        and custom designs, create your perfect card on our sleek platform,
        powered by <span className="font-bold">React</span>,{" "}
        <span className="font-bold">ExpressJs</span>,{" "}
        <span className="font-bold">MongoDB</span>, and{" "}
        <span className="font-bold">Tailwind</span>.
      </div>
    ),
    img: mernImg,
    ytLink: "https://www.youtube.com/watch?v=B-pHRn0Jf1w&t=2s",
    link: "https://mern-custcards.azurewebsites.net/",
  },
  {
    title: "YouTube Clone",
    desc: (
      <div>
        They say every big brand has a copy, but recreating the original often
        builds a deeper appreciation for it. Join me in this journey where I
        crafted a YouTube clone using <span className="font-bold">React</span>{" "}
        and <span className="font-bold">Tailwind</span>, incorporating industry
        best practices like <span className="font-bold">Key Debouncing</span>,{" "}
        <span className="font-bold">API Polling</span>,{" "}
        <span className="font-bold">API Caching</span>, and dynamic{" "}
        <span className="font-bold">Nested N-Level Chatbots</span> for a
        seamless experience.
      </div>
    ),
    img: ytImg,
    ytLink: "https://www.youtube.com/watch?v=9mDOnct9JZI",
    link: "https://saifyt.azurewebsites.net/",
  },
  {
    title: "Wizard pool",
    desc: (
      <div>
        Wizard Pool is an innovative game that combines the novel gameplay of
        8-ball Pool, with a twist of magic. In this game, players can play as
        wizards and utilize among a set of RNG spells to beat other player,
        providing a magical twist build with{" "}
        <span className="font-bold">Java</span>, and{" "}
        <span className="font-bold">Processing</span>.
      </div>
    ),
    img: pokerImg,
    ytLink: "https://www.youtube.com/watch?v=F4Xr86BlDuc",
    link: "",
  },
  {
    title: "Sunnah Spot",
    desc: "A health and fitness website",
    img: "/image",
    ytLink: "/ytLink",
    link: "/link",
  },
];
const StartsBg = () => {
  return (
    <div className=" h-screen absolute inset-0 w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage...."
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

export function ThreeDCardDemo() {
  let [activeIndex, setActiveIndex] = useState(0);

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  //console.log(data[activeIndex]);

  return (
    <div
      className="relative flex flex-row justify-around items-center w-full h-fit pt-20"
      id="projects"
    >
      <StartsBg />
      <div className="relative z-10 h-full w-full flex flex-row justify-center items-center">
        <span className="text-slate-300 text-xl font-bold lg:text-3xl absolute -inset-y-4 text-center">
          Explore My Projects!
        </span>

        <BsChevronCompactLeft
          style={{ color: "#eab308" }}
          className={`lg:h-32 lg:w-32 h-20 w-20 ${
            activeIndex > 0
              ? "animate-bounce cursor-pointer"
              : "animate-none cursor-not-allowed"
          } `}
          onClick={handleLeftClick}
        />
        <CardContainer className="inter-var">
          <CardBody className="mt-10 border-4 border-slate-300 bg-gradient-to-br from-transparent via-transparent to-yellow-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[400px] lg:h-[500px] overflow-hidden hover:overflow-y-scroll rounded-xl p-6 ">
            <CardItem
              translateZ="50"
              className="lg:text-xl text-base font-bold text-slate-400 dark:text-white"
            >
              {data[activeIndex]?.title}
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-slate-300 lg:text-sm text-xs max-w-sm mt-2 dark:text-neutral-300"
            >
              {data[activeIndex]?.desc}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={data[activeIndex]?.img}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                translateX={40}
                as={Link}
                href={
                  data[activeIndex].link !== "" ? data[activeIndex]?.link : ""
                }
                onClick={(e) => {
                  if (data[activeIndex].link === "") {
                    e.preventDefault();
                    window.alert("Unavaliable right now.");
                  }
                }}
                target="__blank"
                className="px-4 py-2 rounded-xl text-sm text-blue-500 font-normal dark:text-white"
              >
                <div>Try now →</div>
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={-40}
                as={Link}
                href={data[activeIndex].ytLink}
                target="_blank"
                className="px-4 flex flex-row items-center justify-center gap-2 py-2 rounded-xl bg-red-600 shadow-xl  shadow-red-700 dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <span>Demo</span>
                <FaYoutube />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <BsChevronCompactRight
          style={{ color: "#eab308" }}
          className={`lg:h-32 lg:w-32 h-20 w-20 ${
            activeIndex < data.length - 1
              ? "animate-bounce cursor-pointer"
              : "animate-none cursor-not-allowed"
          }`}
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}

export default Projects;
