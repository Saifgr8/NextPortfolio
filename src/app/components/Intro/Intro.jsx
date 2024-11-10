"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PinContainer } from "@/components/ui/3d-pin";
import { trackVisitor } from "@/app/util/script";

const StarsBg = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
};

export function AnimatedPinDemo({ title }) {
  return (
    <div className=" w-full flex items-center justify-center">
      <PinContainer title={title} gold={false}>
        <div className="flex basis-full flex-col p-4  justify-start items-center sm:basis-1/2 h-[15rem] w-[15rem] lg:w-[20rem] lg:h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 text-base lg:text-xl text-slate-300">
            Click for My Visitor Stats!
          </h3>
        </div>
      </PinContainer>
    </div>
  );
}

const Intro = () => {
  const words = [
    ["Software Developer"],
    ["Software Engineer"],
    ["Web Developer"],
  ];

  const [showCount, setShowCount] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let messageTimeOut, dataTimeOut;

    const getCounts = async () => {
      const data = await trackVisitor();

      if (Array.isArray(data)) {
        const [count, msg] = data;
        setShowCount(count + 750);
        setMessage(msg);

        messageTimeOut = setTimeout(() => {
          setMessage("");
        }, 2500);
      } else {
        setShowCount(data + 750);
        setMessage(
          "Get ready to be amazed!"
        );
        messageTimeOut = setTimeout(() => {
          setMessage("");
        }, 2500);
      }

      dataTimeOut = setTimeout(() => {
        if (Array.isArray(data)) {
          setShowCount(750 + data[0]);
        } else {
          setShowCount(750 + data + 1);
        }
      }, 3000);
    };

    getCounts();

    // Cleanup function to clear both timeouts on unmount
    return () => {
      clearTimeout(messageTimeOut);
      clearTimeout(dataTimeOut);
    };
  }, []);

  //console.log(showCount, message);
  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-evenly"
      id="home"
    >
      {/* Stars Background */}
      <StarsBg />

      {/* Top-centered item (e.g., a logo or other text) */}
      <div className="flex items-center justify-center w-full mt-10 z-10">
        {/* Placeholder for any additional item to add at the top */}
        <h1 className="text-slate-300 text-base lg:text-xl lg:mt-10 mt-12">
          Step into My World of Innovation and Code!
        </h1>
      </div>
      {message && (
        <div className="bg-gradient-to-b rounded-2xl mt-6 text-sm lg:text-base from-yellow-400 via-yellow-500 to-yellow-600 animate-bounce py-1 px-2 shadow-2xl text-white">
          {message}
        </div>
      )}
      <div className="w-full">
        <AnimatedPinDemo title={showCount} />
      </div>

      {/* Bottom-centered text generation effects */}
      <div className="flex flex-col items-center lg:mb-6 mb-12 z-10 lg:mt-2">
        <TextGenerateEffect
          words={["Mohammad Saifuddin"]}
          delay={1000}
          textSize="text-2xl"
          font="font-bold"
        />
        <TextGenerateEffect
          words={words}
          delay={1200}
          textSize="text-xs"
          font="italic"
        />
      </div>
    </div>
  );
};

export default Intro;
