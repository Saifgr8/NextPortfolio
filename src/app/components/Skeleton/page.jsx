"use client";
import React, { useEffect, useState } from "react";

const quotesArr = [
  "There are 10 kinds of people in the world: those who understand binary and those who don’t.",
  "Debugging: Being the detective in a crime movie where you’re also the murderer.",
  "I would love to change the world, but they won’t give me the source code.",
  "If at first you don’t succeed; call it version 1.0.",
  "Why do Java developers wear glasses? Because they don’t see sharp!",
  "In a world without fences and walls, who needs Gates and Windows?",
  "Computers are fast; programmers keep it slow.",
  "There are two ways to write error-free programs; only the third one works.",
  "Software and cathedrals are much the same — first we build them, then we pray.",
  "It works on my machine!",
  "To err is human; to really foul things up, you need a computer.",
  "The code that is the hardest to debug is the code that you know cannot possibly be wrong.",
  "A computer once beat me at chess, but it was no match for me at kickboxing.",
  "Programmer: A machine that turns coffee into code.",
  "A SQL query walks into a bar, sees two tables, and asks: 'Can I join you?'",
];

const Skeleton = () => {
  const [quoteIndex, setQuoteIndex] = useState(null);

  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * quotesArr.length));

    const quoteInterval = setInterval(() => {
      setQuoteIndex(Math.floor(Math.random() * quotesArr.length));
    }, 4000);

    return () => {
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-slate-300">
      {/* Loading Spinner */}
      <div className="flex items-center justify-center mb-8">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
      </div>

      {/* Loading Quote */}
      <div className="lg:text-2xl text-base font-semibold text-center p-6">
        {quotesArr[quoteIndex]}
      </div>

      {/* Loading Message */}
      <div className="m-4 text-2xl text-gray-300 italic text-center">
        Loading...
      </div>
    </div>
  );
};

export default Skeleton;
