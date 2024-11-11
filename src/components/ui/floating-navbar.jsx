"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  
  const handleScroll = (id) => {
    //console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "flex max-w-fit  shadow-xl shadow-yellow-500 bg-gradient-to-b from-transparent via-black to-yellow-300 fixed top-3 inset-x-0 mx-auto  dark:border-white/[0.2] rounded-full dark:bg-black z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(navItem.link.slice(1));
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" sm:block text-sm">{navItem.name}</span>
          </button>
        ))}
        <button
          onClick={()=>handleScroll("contact")}
          className="border text-sm shadow-inner shadow-yellow-200  font-medium relative border-blue-700 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-transparent to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
