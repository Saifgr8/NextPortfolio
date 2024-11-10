"use-client"
import React from "react";
import LampDemo from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import Expereince from "../Experience/page";
import { LensComponent } from "../LensComponent/page";

const StarsBg = () => {
  return (
    <div className="h-screen relative w-full  bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen z-0">
        <SparklesCore
          id="tsparticlesfullpage..."
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


const About = () => {
  return (
    <div className="w-full" id="about">
      <div className="relative flex flex-col bg-transparent w-full">
        <StarsBg />
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center w-full h-full">
          <span className="absolute  inset-y-7 text-slate-300 bg-transparent w-full text-center text-xl lg:text-3xl lg:pt-0 sm:pt-10 font-bold">
            Academics
          </span>
          <div className="text-white flex flex-row  justify-around gap-4 lg:gap-0 items-center w-full mt-10">
            <LampDemo
              university="University of Bristol"
              location = "United Kingdom"
              degree="MSc CS"
              year="2022-2024"
            />
            <LampDemo
              university="Osmania University"
              location = "India"
              degree="BSc EEE"
              year="2016-2020"
            />
          </div>
        </div>
      </div>
      <div>
        <Expereince />
      </div>
      <div>
        <LensComponent />
      </div>
    </div>
  );
};

export default About;
