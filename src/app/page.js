"use client";
import Image from "next/image";
import Intro from "./components/Intro/Intro";
import About from "./components/About/page";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Projects from "./components/Projects/page";
import SkillsComponent from "./components/Skills/page";
import ContactComponent from "./components/Contact/page";
import Skeleton from "./components/Skeleton/page";
import { useEffect, useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
  ];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <FloatingNav navItems={navItems} />
      <Intro />
      <About />
      <Projects />
      <SkillsComponent />
      <ContactComponent />
    </div>
  );
}
