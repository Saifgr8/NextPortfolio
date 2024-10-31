"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import LinkedInImg from "../../../public/linkedIn.png";
import Link from "next/link";

export const GlowingStarsBackgroundCard = ({ className, children, link }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={cn(
        "bg-transparent p-4 max-w-md max-h-[20rem] lg:h-[400px] lg:w-[400px] h-[300px] w-[280px] rounded-xl border border-[#eaeaea] dark:border-neutral-600",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} link={link} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({ className, children }) => {
  return (
    <p className={cn("text-base text-white max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({ className, children }) => {
  return (
    <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter, link }) => {
  const stars = 108;
  const columns = 18;

  const [glowingStars, setGlowingStars] = useState([]);

  const highlightedStars = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <Link href={link}>
        <div
          className="h-48 p-1 w-full cursor-pointer"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `1px`,
          }}
        >
          {[...Array(stars)].map((_, starIdx) => {
            const isGlowing = glowingStars.includes(starIdx);
            const delay = (starIdx % 10) * 0.1;
            const staticDelay = starIdx * 0.01;
            return (
              <div
                key={`matrix-col-${starIdx}}`}
                className="relative flex items-center justify-center"
              >
                <Star
                  isGlowing={mouseEnter ? true : isGlowing}
                  delay={mouseEnter ? staticDelay : delay}
                />
                {mouseEnter && <Glow delay={staticDelay} />}
                <AnimatePresence mode="wait">
                  {isGlowing && <Glow delay={delay} />}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

const Star = ({ isGlowing, delay }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 2,
      }}
      animate={{
        scale: isGlowing ? [1, 8, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-yellow-700 blur-[1px] shadow-3xl shadow-yellow-400"
    />
  );
};
