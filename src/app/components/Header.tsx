"use client";
import { FolderClosedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { withBasePath } from "../lib/basePath";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center justify-center fixed top-0 left-0 right-0 z-50 px-4"
    >
      <NavBar />
    </motion.header>
  );
};

export default Header;

const NavBar = () => {
  const handleProjectSection = () => {
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mx-2 md:mx-0 flex-1 grow max-w-4xl text-gray-400 glass-effect mt-6 p-4 px-6 md:px-12 rounded-2xl flex justify-between items-center shadow-xl shadow-black/20">
      <Link
        href="/"
        className="font-medium font-display text-gray-50 flex gap-2 justify-center items-center group"
      >
        <div className="flex items-center gap-1.5 font-mono text-blue-400 font-bold group-hover:rotate-12 transition-transform duration-300">
          <span className="text-gray-500 font-light">{"{"}</span>
          <span className="text-blue-400 tracking-tighter">AK</span>
          {/* <span className="text-blue-400 tracking-tighter">02</span> */}
          {/* <span className="text-blue-400 tracking-tighter">0223</span> */}
          <span className="text-gray-500 font-light">{"}"}</span>
        </div>
        <span className="tracking-widest uppercase text-sm ml-1">ANANYA KAUL</span>
      </Link>
      <nav className="flex gap-4 items-center">
        <ul className="flex gap-2 text-sm font-medium items-center">
          <li>
            <button
              type="button"
              title="Projects"
              onClick={handleProjectSection}
              className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10 px-4 py-2 rounded-xl group"
            >
              <FolderClosedIcon size={18} className="group-hover:scale-110 transition-transform text-blue-400/80" />
              Projects
            </button>
          </li>
          <li className="ml-2">
            <a
              href={withBasePath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
