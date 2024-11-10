import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { SparklesCore } from "@/components/ui/sparkles";

const experienceData = [
  {
    title: "Graduate Software Developer",
    content: (
      <div>
        <div className="text-xl font-bold flex flex-row justify-between text-justify">
          <span className="lg:text-xl text-sm">MindQube Ltd, Ldn</span>
          <span className=" lg:text-base text-sm">Jan 2024 - Current</span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Built responsive, user-focused applications with React and Spring
              Boot, ensuring cross-device functionality.
            </p>
          </li>
          <li>
            <p>
              Worked in a cross-functional Scrum team to deliver client-focused,
              high-quality software solutions.
            </p>
          </li>
          <li>
            <p>
              Strengthened system security with robust authentication and
              authorization, enhancing user access control.
            </p>
          </li>
          <li>
            <p>
              Optimized CI/CD pipelines on Azure DevOps, boosting deployment
              efficiency and enabling agile delivery.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Sales Assistant",
    content: (
      <div>
        <div className="text-xl font-bold flex flex-row justify-between text-justify">
          <span className="lg:text-xl text-sm">House of Fraser, Ldn</span>
          <span className=" lg:text-base text-sm">Oct 2022 - Sept 2023</span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Provided outstanding customer service, assisting with purchases
              and elevating the in-store experience.
            </p>
          </li>
          <li>
            <p>
              Collaborated with team members to ensure smooth store operations.
            </p>
          </li>
          <li>
            <p>
              Played a key role in stock management by sorting, replenishing,
              and organizing inventory.
            </p>
          </li>
          <li>
            <p>
              Exhibited leadership and adaptability by balancing team support
              and independent tasks to uphold store standards.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Workday Integration Consultant",
    content: (
      <div>
        <div className="text-xl font-bold flex flex-row justify-between text-justify">
          <span className="lg:text-xl text-sm">Accenture Ltd, Hyd</span>
          <span className=" lg:text-base text-sm">Feb 2021 - Jul 2022</span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Streamlined HR functions by designing and optimizing business
              processes for hiring and compensation.
            </p>
          </li>
          <li>
            <p>
              Improved payroll accuracy and employee experience via Workday
              Payment Election system enhancements.
            </p>
          </li>
          <li>
            <p>
              Ensured smooth data flow and compliance by solving complex Workday
              integration challenges.
            </p>
          </li>
        </ol>
      </div>
    ),
  },
];

const Expereince = () => {
  return (
    <div className="relative w-full bg-black dark:bg-gray-900  overflow-hidden">
      {/* Container for Sparkles and Timeline */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Sparkles Background */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage."
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Timeline Content */}
        <div className="relative z-10 w-full max-w-5xl p-6">
          <h1 className="text-center  text-xl lg:text-3xl font-bold text-slate-300 dark:text-white mt-12">
            Professional Journey
          </h1>

          {/* Timeline Component */}
          <Timeline data={experienceData} />
        </div>
      </div>
    </div>
  );
};

export default Expereince;
