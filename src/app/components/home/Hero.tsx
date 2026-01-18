"use client";
import Image from "next/image";
import React from "react";
import "./hero.css";
import { BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={20} />,
    url: "https://linkedin.com/in/ananyakaul",
  },
  {
    name: "Email",
    icon: <MdMailOutline size={25} />,
    url: "mailto:kaul23ananya@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={20} />,
    url: "https://wa.me/+918968692390",
  },
  {
    name: "Instagram",
    icon: <BsInstagram size={20} />,
    url: "https://www.instagram.com/theluckylad",
  }
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-4 border-gray-800 group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
        >
          <Image
            src="/images/hero/IMG_4620.JPG"
            alt="Ananya Kaul - profile photo"
            fill
            className="grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <span>Hi, I&apos;m</span>
            <h1 className="font-display tracking-normal text-5xl font-medium text-gray-50">
              Ananya Kaul
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-xl tracking-wider text-center leading-relaxed">
            I&apos;m Ananya Kaul, a <span className="text-blue-400">Junior Mobile Developer</span> specializing in{" "}
            <span>high-performance <span className="bg-blue-900/60 px-1">iOS applications</span></span> and AI/ML solutions.
            Passionate about crafting scalable architectures and intuitive user experiences using Swift, Dart, Python, and CoreML.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
            <li
              key={link.name}
              className="transition-all duration-200 text-gray-400 hover:rotate-6 hover:scale-110 hover:text-gray-50"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
