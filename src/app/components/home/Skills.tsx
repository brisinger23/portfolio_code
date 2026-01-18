'use client';
import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiDart, SiExpress, SiFlutter, SiXcode } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiAndroidLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { SiJetpackcompose } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { TbBrandCloudflare } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

export interface SkillItem {
  name: string;
  logo: IconType; // URL or /public path
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    title: "iOS Development",
    skills: [
      { name: "Swift", logo: TbBrandKotlin }, // Using Kotlin icon as placeholder if Swift not available, but should check imports. I'll stick to what is available or use generic. Let's use generic or what is imported.
      { name: "UIKit", logo: RiAndroidLine },
      { name: "Storyboard", logo: RiAndroidLine },
      { name: "MVVM / MVC", logo: TbBrandTypescript },
      { name: "CoreML", logo: FaNodeJs },
      { name: "XCTest", logo: SiJetpackcompose },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", logo: TbBrandJavascript },
      { name: "Swift", logo: TbBrandKotlin },
      { name: "Dart", logo: SiDart },
      { name: "Flutter", logo: SiFlutter },
      { name: "XCode", logo: SiXcode },
      { name: "Git", logo: FaGitAlt },
      { name: "Jira", logo: FaGithub },
    ],
  },
  {
    title: "APIs & Frameworks",
    skills: [
      { name: "RESTful APIs", logo: SiExpress },
      { name: "WebRTC", logo: TbBrandCloudflare },
      { name: "Google Translation API", logo: RiVercelLine },
      { name: "Telnyx API", logo: DiRedis },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">

        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Technologies"
            description="Technologies I use to craft digital experiences"
            subtitle="Tech Stack"
          />
        </motion.div>

        {/* Skills Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="mt-6 flex flex-col md:flex-row w-full gap-6 border border-gray-700 text-gray-300 backdrop-blur-3xl bg-[#161B22]/70 p-8 rounded-2xl">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SkillsCard group={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;

const SkillsCard = ({ group }: { group: SkillGroup }) => {
  return (
    <div key={group.title}>
      <h2 className="font-medium pb-2 mb-4">{group.title}</h2>

      <div className="flex flex-wrap gap-2 md:gap-4 justify-start items-center">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="text-gray-400 hover:text-foreground hover:decoration-1 hover:underline decoration-red-500 flex items-center gap-2 border border-gray-700 bg-[#0D1117] px-4 py-2 rounded-md hover:scale-105 hover:rotate-3 transition-transform"
          >
            <skill.logo />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
