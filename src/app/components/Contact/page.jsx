"use client";
import React, { useState } from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export function VortexDemo() {
  const [copy, setCopy] = useState("");
  let mail = "saifgr7@gmail.com";
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(mail).then(() => setCopy(true));
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    } catch (error) {
      window.alert("Failed to copy");
    }
  };
  return (
    <div className="w-full mx-auto rounded-md  lg:h-[30rem] h-[25rem] overflow-hidden">
      <Vortex
        rangeY={1}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Did you like what you saw?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Let&apos;s have a quick chat to connect and exchange ideas. I’d be
          happy to share what I can bring to the table.
        </p>
        <div className="flex flex-row sm:flex-row items-center gap-4 mt-6">
          <Link href={"https://www.linkedin.com/in/sfud/"} target="_blank">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              LinkedIn
            </button>
          </Link>

          <button
            onClick={handleCopy}
            className="px-6 py-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:bg-gradient-to-r hover:from-red-800 hover:via-yellow-600 hover:to-green-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Gmail
          </button>
          {copy && (
            <button className=" p-2 bg-green-400 rounded-xl shadow-xl text-white font-bold">
              Copied
            </button>
          )}
        </div>
      </Vortex>
    </div>
  );
}

export default function ContactComponent() {
  return (
    <div
      className="relative w-full flex flex-col justify-center items-start gap-2 lg:gap-3 overflow-hidden bg-black"
      id="contact"
    >
      {/* Vortex Background */}
      <VortexDemo />

      {/* Content */}
    </div>
  );
}
