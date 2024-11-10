import React from "react";
import { PinContainerGold } from "@/components/ui/3d-pinGold";
import { SparklesCore } from "@/components/ui/sparkles";

const data = [
  {
    title: "Programming Languages",
    list: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frameworks",
    list: ["ReactJs", "NextJs", "Springboot", "ExpressJs"],
  },
  {
    title: "Databases",
    list: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud",
    list: [
      "Azure App Services",
      "Azure AD (Entra ID)",
      "Azure Key Vault",
      "Azure WebJobs",
    ],
  },
  {
    title: "Other Tools",
    list: ["Git", "POSTMAN", "CI/CD", "Agile", "DevOps"],
  },
];

const StarsBg = () => {
  return (
    <div className=" h-screen absolute inset-0 w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage....."
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

const Pins = ({ title, list }) => {
  return (
    <div className="h-[22rem] min-w-[300px] flex items-center justify-center">
      <PinContainerGold title={title}>
        <div className="bg-gradient-to-br rounded-tl-full from-yellow-500 via-transparent to-transparent flex basis-full flex-col tracking-tight text-white sm:basis-1/2 w-[20rem] h-[20rem] ">
          {list.map((item, index) => {
            const maxPadding = list.length * 35 // Set the maximum padding based on list length
            const paddingDecrement = maxPadding / list.length; // Calculate how much to decrease padding for each item
            const paddingLeft = maxPadding - paddingDecrement * index;
            return (
              <div key={index} className="w-full">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-300">
                  <ul>
                    <li
                      style={{ paddingLeft: `${paddingLeft}px` }}
                      className="m-4"
                    >
                      {item}
                    </li>
                  </ul>
                </h3>
              </div>
            );
          })}

          <div className="flex flex-1 w-full rounded-lg  bg-transparent" />
        </div>
      </PinContainerGold>
    </div>
  );
};

const SkillsComponent = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative" id="skills">
      <StarsBg />
      <div className="text-3xl text-slate-300 z-10 mt-10">Skills <span className="text-sm">( scroll right & click )</span></div>
      <div className="pl-10  mt-5 flex overflow-hidden hover:overflow-x-scroll space-x-4 p-4 max-w-full gap-12 bg-transparent z-40" >
        {data.map((item, index) => (
          <Pins key={index} title={item.title} list={item.list} />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
