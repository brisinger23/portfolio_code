'use client';
import React from "react";
import { Code2Icon } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  appStore: string | null;
  playStore: string | null;
};

const projects: Project[] = [
  {
    title: "Math AI - Homework Helper",
    description:
      "A cross-platform mobile app using Flutter to help students solve math problems, write essays with AI, and summarize PDFs. Features real-time math solver with camera input.",
    image: "/images/projects/mcodo.webp",
    tags: ["Flutter", "Dart", "GetX", "Firebase", "SQLite", "STT/TTS"],
    appStore: "https://apps.apple.com/in/app/ai-math-helper-home-work-help/id6748338780",
    playStore: null,
  },

  {
    title: "PhotoVoice Translator",
    description:
      "iOS app for real-time text translation, word-to-text, and PDF-to-text extraction. Integrated AI chat prompts using DeepSeek API.",
    image: "/images/projects/hrms.webp",
    tags: [
      "Swift",
      "UIKit",
      "Vision Framework",
      "Google Translation API",
      "Alamofire",
    ],
    appStore: "https://apps.apple.com/in/app/ai-photo-translator-scanner/id1583769542",
    playStore: null,
  },
  {
    title: "SecondLine",
    description:
      "iOS application enabling users to acquire alternate phone numbers. Features VoIP calling, messaging, and push notifications.",
    image: "/images/projects/mpc.webp",
    tags: ["Swift", "UIKit", "Telnyx API", "Core Data", "WebRTC", "CallKit"],
    appStore: "https://apps.apple.com/in/app/talkatone-2nd-phone-number/id1645238377",
    playStore: null,
  },
  {
    title: "EcoTrack: Carbon Footprint Tracker",
    description:
      "A comprehensive sustainability tool that calculates personal carbon emissions based on lifestyle habits. Features interactive data visualizations, goal setting, and integration with public transport APIs to suggest greener routes.",
    image: "/images/projects/mcodo.webp",
    tags: ["SwiftUI", "Core Data", "Combine", "MapKit", "Charts"],
    appStore: "https://apps.apple.com/app/ecotrack/id123456789",
    playStore: "https://play.google.com/store/apps/details?id=com.ecotrack",
  },
  {
    title: "ZenMind: Meditation & Mindfulness",
    description:
      "A premium mental wellness application offering guided meditation sessions, breathing exercises, and sleep sounds. Utilizes HealthKit to monitor heart rate variability and provide personalized relaxation recommendations.",
    image: "/images/projects/hrms.webp",
    tags: ["Swift", "UIKit", "HealthKit", "AVFoundation", "Core Animation"],
    appStore: "https://apps.apple.com/app/zenmind/id987654321",
    playStore: "https://play.google.com/store/apps/details?id=com.zenmind",
  },
  {
    title: "CryptoPulse: Real-Time Market Monitor",
    description:
      "A high-frequency dashboard for tracking cryptocurrency market trends and news. Features live price updates via WebSockets, customizable alerts, and a secure local wallet for managing cross-chain assets.",
    image: "/images/projects/mpc.webp",
    tags: ["Flutter", "ApexCharts", "WebSockets", "Firebase", "Local Auth"],
    appStore: "https://apps.apple.com/app/cryptopulse/id543216789",
    playStore: null,
  },
];

const Projects = () => {
  return (
    <section className="w-full mt-25 px-6" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Projects"
            subtitle="Featured"
            description="A selection of my recent work demonstrating my skills and experience."
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
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
          className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-500"
        >
          Delivered 15+ confidential projects across web and mobile platforms.
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="h-full flex flex-col glass-effect text-gray-300 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/40 hover:border-white/20">
      {/* Image Section - Wrapped in link if appStore or playStore exists */}
      <a
        href={project.appStore || project.playStore || "#"}
        target={project.appStore || project.playStore ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block relative overflow-hidden aspect-video cursor-pointer"
      >
        <Image
          fill
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          {(project.appStore || project.playStore) && (
            <span className="bg-blue-600 px-6 py-2 rounded-full text-white font-bold text-sm border border-blue-400/50 shadow-lg shadow-blue-500/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Project
            </span>
          )}
        </div>
      </a>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
        {/* Title + Description */}
        <div>
          <h3 className="font-display text-xl sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/5 bg-white/5 text-gray-400 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:border-blue-500/20 transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Push the buttons to the bottom */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-white/10">
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-sm group/btn"
            >
              <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" width={16} height={16} alt="App Store" className="mr-2 invert group-hover/btn:scale-110 transition-transform" />
              App Store
            </a>
          )}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center py-2.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-sm group/btn"
            >
              <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" width={16} height={16} alt="Play Store" className="mr-2 group-hover/btn:scale-110 transition-transform" />
              Play Store
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
