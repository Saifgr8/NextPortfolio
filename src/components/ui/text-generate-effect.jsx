"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.8,
  delay,
  textSize,
  font
}) => {
  const [scope, animate] = useAnimate();
  let len = words.length;
  let wordsArray = words.map((item) => item);
  //console.log(wordsArray);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(2),
        }
      );
    }, delay);
    return () => clearTimeout(timeOut);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope?.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white text-slate-300 opacity-0 ${textSize} lg:text-3xl md:text-lg ${font}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {idx === len - 1 ? `${word}${" "}` : `${word}${" "} | ${" "}`}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide lg:mt-4 mb-4">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
