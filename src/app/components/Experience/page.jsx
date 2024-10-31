import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { SparklesCore } from "@/components/ui/sparkles";

const experienceData = [
  {
    title: "Graduate Software Developer",
    content: (
      <div>
        <div className="text-xl font-bold flex flex-row justify-between text-justify">
          <span className="lg:text-xl text-xs">MindQube Ltd, Ldn</span>
          <span className=" lg:text-base text-xs">Jan 2024 - Current</span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Developed and maintained responsive, user-centric applications
              using React and Spring Boot, ensuring seamless functionality
              across devices.
            </p>
          </li>
          <li>
            <p>
              Collaborated within a cross-functional Scrum team to deliver
              high-quality software solutions aligned with client requirements.
            </p>
          </li>
          <li>
            <p>
              Enhanced system security by implementing robust authentication and
              authorization methods, optimizing user access control.
            </p>
          </li>
          <li>
            <p>
              Streamlined CI/CD pipelines on Azure DevOps, improving deployment
              efficiency and supporting agile project delivery.
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
          <span className="lg:text-xl text-xs">House of Fraser, Ldn</span>
          <span className=" lg:text-base text-xs">
            Oct 2022 - Sept 2023
          </span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Delivered exceptional customer service, assisting customers with
              purchases and enhancing their in-store experience.
            </p>
          </li>
          <li>
            <p>
              Collaborated with team members to ensure smooth store operations
            </p>
          </li>
          <li>
            <p>
              Actively contributed to stock management, including sorting,
              replenishing, and organizing inventory
            </p>
          </li>
          <li>
            <p>
              Demonstrated leadership and flexibility, adapting to both team
              support and independent tasks to meet store standards effectively.
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
          <span className="lg:text-xl text-xs">Accenture Ltd, Hyd</span>
          <span className=" lg:text-base text-xs">
            Feb 2021 - Jul 2022
          </span>
        </div>
        <ol className="list-decimal">
          <li>
            <p>
              Worked extensively on creating and optimizing business processes
              like hiring and compensation to streamline HR functions.
            </p>
          </li>
          <li>
            <p>
              Contributed to the Workday Payment Election system for Accenture
              Philippines, improving payroll accuracy and employee experience.
            </p>
          </li>
          <li>
            <p>
              Demonstrated analytical and problem-solving skills by supporting
              complex integration tasks within the Workday platform, ensuring
              smooth data flow and compliance.
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
          <h1 className="text-center  text-xl lg:text-3xl font-bold text-slate-300 dark:text-white mb-12">
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
