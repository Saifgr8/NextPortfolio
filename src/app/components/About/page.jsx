"use-client";
import React from "react";
import LampDemo from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import Expereince from "../Experience/page";
import { LensComponent } from "../LensComponent/page";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import img1 from "../../../../public/UOB.webp";
import img2 from "../../../../public/OSM.avif";

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

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      key: 1,
      quote:
        "Coursework: Software Engineering, Data Structures and Algorithms, Database Management Systems, Software Tools, Operating Systems, Computer Architecture.",
      name: "University of Bristol, UK",
      designation: "MSc Computer Science",

      src: img1,
    },
    {
      key: 2,
      quote:
        "Coursework: Power Systems, Electric Machines, Electronic Circuits, Control Systems, Mathematics, Physics, Chemistry, Analog Circuits, Digital Circuits.",
      name: "Osmania University, India",
      designation: "BSc Electrical and Electronics Engineering",

      src: img2,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

const About = () => {
  return (
    <div className="w-full" id="about">
      <div className="relative flex flex-col bg-transparent w-full">
        <StarsBg />
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center w-full h-full">
          <span className="absolute  inset-y-7 text-slate-300 bg-transparent w-full text-center text-xl lg:text-3xl lg:pt-0 sm:pt-10 font-bold">
            Academics
          </span>
          <div className="lg:h-fit h-screen mt-20">
            <AnimatedTestimonialsDemo />
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
