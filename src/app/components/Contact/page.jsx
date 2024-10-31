"use client";
import React, { useState } from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { IoIosLink } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaRegCopy } from "react-icons/fa6";
import mailIcon from "../../../../public/GmailLogoBlack.jpg";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

export function GlowingStarsBackgroundCardPreview() {
  const [copied, setCopied] = useState(false);
  let mail = "saifgr7@Gmail.com";
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(mail).then(() => setCopied(true));
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      window.alert("Failed to copy");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-4 ">
      <div className="flex items-center justify-center antialiased ">
        <GlowingStarsBackgroundCard link={`https://www.linkedin.com/in/sfud/`}>
          <GlowingStarsTitle>
            <div className="flex flex-row justify-start items-center gap-1">
              <label htmlFor="LinkedIn" className="text-sm lg:text-xl">
                LinkedIn
              </label>
              <FaLinkedin style={{ color: "blue" }} className="h-10 w-10 " />
            </div>
          </GlowingStarsTitle>
          <div className="flex justify-between gap-2 items-center italic">
            <GlowingStarsDescription>
              <span className="underline text-sm lg:text-base">
                https://www.linkedin.com/in/sfud/
              </span>
            </GlowingStarsDescription>
            <Link href="https://www.linkedin.com/in/sfud/">
              <IoIosLink
                style={{ color: "white" }}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
      <div className="flex items-center justify-center antialiased">
        <GlowingStarsBackgroundCard link={`/`}>
          <GlowingStarsTitle>
            <div className="flex flex-row justify-start items-center gap-1">
              <label htmlFor="Gmail" className="text-sm lg:text-xl">
                Gmail
              </label>
              <Image
                src={mailIcon}
                alt="Mail"
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
          </GlowingStarsTitle>
          <div className="flex justify-between gap-2 items-center">
            <GlowingStarsDescription>
              <Link href="https://www.linkedin.com/in/sfud/">
                <span className="italic underline text-sm lg:text-base">
                  Saifgr7@gmail.com
                </span>
              </Link>
            </GlowingStarsDescription>
            <div className="flex flex-col justify-center items-center">
              <FaRegCopy
                onClick={handleCopy}
                style={{ color: "white" }}
                className="cursor-pointer"
              />
              {copied && (
                <button className="text-sm lg:text-base font-bold bg-gradient-to-br rounded-lg from-green-400 via-green-500 to-green-600 m-2 p-2 hover:scale-75  shadow-inner shadow-white transform transition-transform duration-300">
                  Copied
                </button>
              )}
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
}
export function VortexDemoSecond() {
  return (
    <div className="absolute inset-y-1 lg:inset-y-10 w-full h-full overflow-hidden z-0">
      <Vortex
        rangeY={100}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      ></Vortex>
    </div>
  );
}

export default function ContactComponent() {
  return (
    <div className="relative w-full flex flex-col justify-center items-start gap-2 lg:gap-3 overflow-hidden bg-black" id="contact">
      {/* Vortex Background */}
      <VortexDemoSecond />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <span className="text-white lg:text-3xl text-xl lg:pb-10 font-bold pb-6">
          Get in Touch
        </span>
        <div className="flex items-center justify-evenly">
          <GlowingStarsBackgroundCardPreview />
        </div>
        <span className="text-white lg:text-3xl text-xl font-bold m-4 p-4">
          Stay Inspired!
        </span>
      </div>
    </div>
  );
}
