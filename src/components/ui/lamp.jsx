"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo({ university, degree, year }) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 3,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-base md:text-3xl font-medium tracking-tight text-transparent lg:text-5xl"
      >
        {university} <br /> {degree} <br /> {year}
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-transparent w-full min-h-screen z-0",
        className
      )}
    >
      <div className="relative flex w-full items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,

            duration: 0.8,

            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-to-t from-yellow-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-to-t from-transparent via-transparent to-yellow-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-20 w-full translate-y-12 scale-x-150 bg-transparent blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-20 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-transparent opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "15px" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-transparent blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15px" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-yellow-300 "
        ></motion.div>
      </div>
      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
