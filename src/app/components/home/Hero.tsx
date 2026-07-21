"use client";
import Image from "next/image";
import React from "react";
import "./hero.css";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { withBasePath } from "../../lib/basePath";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={20} />,
    url: "https://linkedin.com/in/ananyakaul",
    color: "#0077b5",
  },
  {
    name: "Email",
    icon: <MdMailOutline size={25} />,
    url: "mailto:kaul23ananya@gmail.com",
    color: "#EA4335",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20} />,
    url: "https://wa.me/+918968692390",
    color: "#25D366",
  },
  {
    name: "Instagram",
    icon: <BsInstagram size={20} />,
    url: "https://www.instagram.com/theluckylad",
    color: "#E4405F",
  }
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // custom ease-out-expo
            scale: { type: "spring", damping: 15, stiffness: 100 }
          }}
          className="border-2 border-white/10 group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full shadow-2xl shadow-black/50"
        >
          <Image
            src={withBasePath("/images/hero/IMG_4620.JPG")}
            alt="Ananya Kaul - profile photo"
            fill
            priority
            className="grayscale hover:grayscale-0 object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center">
            <span className="text-blue-400 font-medium tracking-[0.3em] uppercase text-xs mb-2">Hi, I&apos;m</span>
            <h1 className="font-display tracking-tight text-6xl sm:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Ananya Kaul
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={withBasePath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30"
            >
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-2xl border border-white/10 glass-effect bg-white/5 hover:bg-white/10 transition-all font-bold text-gray-200"
            >
              View Projects
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-effect px-6 py-2 rounded-full border border-white/5"
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-xl tracking-wide text-center leading-relaxed text-gray-400 max-w-2xl">
            I&apos;m Ananya Kaul, a <span className="text-blue-400 font-medium">Junior Mobile Developer</span> specializing in{" "}
            <span className="text-white border-b-2 border-blue-500/30">high-performance iOS applications</span> and AI/ML solutions.
            Passionate about crafting scalable architectures and intuitive user experiences.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// slider style come from hero.css file.
const SkillsSlider = () => {
  return (
    <div className="flex gap-2 justify-center items-baseline">
      <div>I&apos;m</div>
      <div className="slider">
        <div className="slides text-gray-300">
          <div>
            Mobile Developer
          </div>
          <div>
            iOS Developer
          </div>
          <div>
            Flutter Developer
          </div>
          <div>
            AI/ML Enthusiast
          </div>
          <div>
            Mobile Developer
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 justify-center items-center">
        {socialLinks.map((link) => {
          return (
            <motion.li
              key={link.name}
              whileHover={{
                scale: 1.1,
                rotate: 6,
                color: link.color,
                filter: "drop-shadow(0 0 8px currentColor)"
              }}
              className="transition-all duration-300 text-gray-400"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2"
              >
                {link.icon}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
