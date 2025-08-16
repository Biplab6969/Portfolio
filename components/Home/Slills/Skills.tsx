"use client";

import React, { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface CardProps {
  skil: Skill;
  i: number;
}

const Language: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
];

const Frontend: Skill[] = [
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
];

const Backend: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const Tools: Skill[] = [
  { name: "VS Code", icon: <VscVscode /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Card: React.FC<CardProps> = ({ skil, i }) => (
  <Tilt scale={1.2} transitionSpeed={400}>
    <div
      data-aos="flip-right"
      data-aos-anchor-placement="top-center"
      data-aos-delay={i * 100}
      className="bg-[#14134145] text-center w-28 h-36 rounded-2xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
    >
      <div className="text-3xl mb-2 text-gray-300">{skil.icon}</div>
      <p className="text-sm text-purple-400 mt-1">{skil.name}</p>
    </div>
  </Tilt>
);

const Skills: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white pt-16 pb-16">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      {/* Programming Language */}
      <div className="text-white pt-4 pb-4 ">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          <span className="text-cyan-300">Programming Language</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {Language.map((skil, i) => (
            <Card key={skil.name} skil={skil} i={i} />
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="text-white pt-4 pb-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          <span className="text-cyan-300">Frontend</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {Frontend.map((skil, i) => (
            <Card key={skil.name} skil={skil} i={i} />
          ))}
        </div>
      </div>

      {/* Backend & Database */}
      <div className="text-white pt-4 pb-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          <span className="text-cyan-300">Backend & Database</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {Backend.map((skil, i) => (
            <Card key={skil.name} skil={skil} i={i} />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="text-white pt-4 pb-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
          <span className="text-cyan-300">Tools</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {Tools.map((skil, i) => (
            <Card key={skil.name} skil={skil} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
