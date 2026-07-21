'use client';
import React from "react";
import { Clapperboard, Bot, CreditCard, Wand2 } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import { withBasePath } from "../../lib/basePath";

type Project = {
  title: string;
  description: string;
  icon: string | null; // app icon from the App Store, null for unreleased/client-internal apps
  glyph?: React.ReactNode; // fallback artwork when there is no store icon
  gradient?: string;
  tags: string[];
  appStore: string | null;
  playStore: string | null;
};

const projects: Project[] = [
  {
    title: "Math AI - Homework Helper",
    description:
      "Cross-platform Flutter app that helps students solve math problems, write essays with AI, and summarize PDFs. Built with GetX state management, Realm database, chat modules, and multi-API integrations.",
    icon: withBasePath("/images/apps/math-ai.jpg"),
    tags: ["Flutter", "Dart", "GetX", "Realm", "AI APIs", "PDF Summaries"],
    appStore: "https://apps.apple.com/us/app/apple-store/id6748338780",
    playStore:
      "https://play.google.com/store/apps/details?id=com.Mathai.homework.helper",
  },
  {
    title: "AI Video Editor",
    description:
      "AI-powered video editing and generation app. Integrated credit checks for live users, shipped new feature updates, and conducted R&D on AI video generation models including SeeDance Pro and Kling 1.6 Standard.",
    icon: null,
    glyph: <Clapperboard size={44} strokeWidth={1.5} />,
    gradient: "from-fuchsia-600/50 via-purple-700/40 to-blue-700/50",
    tags: ["AI Video Generation", "SeeDance Pro", "Kling 1.6", "Credit System"],
    appStore: null,
    playStore: null,
  },
  {
    title: "Meme Me: AI Selfie Maker",
    description:
      "Selfie-to-meme generator for iOS. Developed the camera and API modules, added local notifications, generation limits and watermarks, resolved Firebase crashes, and launched it on the App Store where it gained significant traction.",
    icon: withBasePath("/images/apps/meme-me.jpg"),
    tags: ["iOS", "Camera", "AI Meme Generation", "Firebase", "Notifications"],
    appStore: "https://apps.apple.com/us/app/meme-me-ai-selfie-maker/id6751577271",
    playStore: null,
  },
  {
    title: "Memes Photo Maker Video Editor",
    description:
      "Meme photo and video creation app for iOS. Developed new in-app screens and a referral code system, and improved the app's flow, stability, and overall user experience — driving high engagement on the App Store.",
    icon: withBasePath("/images/apps/memes.jpg"),
    tags: ["iOS", "Referral System", "Video Editing", "UX Flow"],
    appStore:
      "https://apps.apple.com/us/app/memes-photo-maker-video-editor/id1513382617",
    playStore: null,
  },
  {
    title: "Ripl: Invitation Maker & RSVP",
    description:
      "Invitation maker for iOS with custom templates, digital RSVPs, and seamless sharing. Delivered code improvements and crash fixes, and optimized key flows for a smooth user experience.",
    icon: withBasePath("/images/apps/ripl-invitation-maker.jpg"),
    tags: ["iOS", "Custom Templates", "Sharing", "Performance"],
    appStore:
      "https://apps.apple.com/us/app/invitation-maker-digital-rsvp/id1465210016",
    playStore: null,
  },
  {
    title: "Jeeves - AI Chat App",
    description:
      "AI chat assistant. Fixed AI response issues, integrated new models to enhance the app's AI capabilities, and improved overall performance and response accuracy.",
    icon: null,
    glyph: <Bot size={44} strokeWidth={1.5} />,
    gradient: "from-emerald-600/50 via-teal-700/40 to-cyan-700/50",
    tags: ["AI Chat", "LLM Integration", "Model Upgrades", "Performance"],
    appStore: null,
    playStore: null,
  },
  {
    title: "AI Photo Translator & Scanner",
    description:
      "iOS app for real-time photo translation, word-to-text, and PDF-to-text extraction. Implemented a new Realm model, tutor functions, and AI chat prompts for a more interactive translation experience.",
    icon: withBasePath("/images/apps/photo-translator.jpg"),
    tags: ["Swift", "UIKit", "Vision", "Google Translation API", "Realm"],
    appStore:
      "https://apps.apple.com/us/app/ai-photo-translator-scanner/id1583769542",
    playStore: null,
  },
  {
    title: "PDF Editor: Fill, Edit, e-Sign",
    description:
      "Comprehensive iOS PDF suite with two-way conversions (Word, Excel, PNG, JPG, SVG, PowerPoint), File Provider and Share extensions, AI-powered PDF chat with Core Data history, and Firebase analytics & crash reporting.",
    icon: withBasePath("/images/apps/pdf-editor.jpg"),
    tags: ["Swift", "PDFKit", "Action Extensions", "Core Data", "AI Chat"],
    appStore:
      "https://apps.apple.com/us/app/pdf-editor-fill-edit-e-sign/id1591585643",
    playStore: null,
  },
  {
    title: "Word Editor: Docs, Office & PDF",
    description:
      "iOS Word document editor with a hybrid native + TypeScript web-editor architecture. Built the Components, Editor, Navigation, and Services modules with document import/export, rich text editing, and file management.",
    icon: withBasePath("/images/apps/word-editor.jpg"),
    tags: ["Swift", "TypeScript", "Hybrid Architecture", "Rich Text"],
    appStore:
      "https://apps.apple.com/us/app/word-editor-docs-office-pdf/id6760694732",
    playStore: null,
  },
  {
    title: "PDF Scanner ~ Scan Document",
    description:
      "Advanced document manager in Swift 5 — scanning, annotations, text extraction, QR/barcode scanning and creation, signatures, Share and Widget extensions, deep linking, and in-app purchases. Published under Protools LLP.",
    icon: withBasePath("/images/apps/pdf-scanner.jpg"),
    tags: ["Swift 5", "VisionKit", "QR & Barcode", "Annotations", "Widgets"],
    appStore:
      "https://apps.apple.com/us/app/pdf-scanner-scan-document/id1469182761",
    playStore: null,
  },
  {
    title: "TEXT UP - 2nd Phone Number",
    description:
      "Cross-platform second-number app (formerly SecondLine) built in Flutter for Android, iOS, macOS, Windows, Linux, and Web. Architected clean modular layers and integrated APIs for number purchasing, credits, call logs, and messaging.",
    icon: withBasePath("/images/apps/text-up.jpg"),
    tags: ["Flutter", "Dart", "Cross-Platform", "VoIP", "Clean Architecture"],
    appStore: "https://apps.apple.com/us/app/apple-store/id6755144921",
    playStore:
      "https://play.google.com/store/apps/details?id=com.second.phonenumber.secondline",
  },
  {
    title: "Second Line: 2nd Phone Number",
    description:
      "Native iOS application enabling users to acquire alternate phone numbers. Features VoIP calling, messaging, and push notifications.",
    icon: withBasePath("/images/apps/second-line.jpg"),
    tags: ["Swift", "UIKit", "Telnyx API", "Core Data", "WebRTC", "CallKit"],
    appStore:
      "https://apps.apple.com/us/app/second-line-2nd-phone-number/id1645238377",
    playStore: null,
  },
  {
    title: "AI Cleaner: Duplicate Photos",
    description:
      "iOS phone-cleaning app (CleanMyPhone) built with SwiftUI. Reusable views, modular feature screens, Google OAuth and Firebase for auth and analytics, with smart cleaning features and a clean, intuitive UI.",
    icon: withBasePath("/images/apps/photo-cleaner.jpg"),
    tags: ["SwiftUI", "Google OAuth", "Firebase", "Smart Cleaning"],
    appStore:
      "https://apps.apple.com/us/app/duplicate-photos-cleaning-app/id6748720062",
    playStore: null,
  },
  {
    title: "Cancel Subscription Management",
    description:
      "Dedicated iOS app for managing and canceling user subscriptions. Structured into App, Core, Features, Resources, and Shared modules with unit tests and a clean, user-friendly cancellation flow.",
    icon: null,
    glyph: <CreditCard size={44} strokeWidth={1.5} />,
    gradient: "from-orange-600/50 via-rose-700/40 to-red-700/50",
    tags: ["iOS", "Swift", "Modular Architecture", "Unit Testing"],
    appStore: null,
    playStore: null,
  },
  {
    title: "Adgram / Story Maker",
    description:
      "iOS story and ad creation app with rich media editing — Core Data, Core ML, Metal filters, custom CALayer classes, resizable views, snap-line alignment, screenshot prevention, and Firebase App Events analytics.",
    icon: null,
    glyph: <Wand2 size={44} strokeWidth={1.5} />,
    gradient: "from-blue-600/50 via-indigo-700/40 to-violet-700/50",
    tags: ["Swift", "Core ML", "Metal", "Core Data", "Custom UI"],
    appStore: null,
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
            title="Apps"
            subtitle="Featured"
            description="Apps I've built, improved, and shipped to production — many live on the App Store and Google Play."
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
          Shipped 15+ production apps across iOS, Android, and cross-platform stacks.
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const CardArtwork = ({ project }: { project: Project }) => {
  return (
    <>
      {project.icon ? (
        <>
          {/* Blurred icon as ambient backdrop */}
          <Image
            fill
            loading="lazy"
            src={project.icon}
            alt=""
            aria-hidden
            className="object-cover scale-150 blur-2xl opacity-50 transition-transform duration-700 group-hover:scale-[1.7]"
          />
          <div className="absolute inset-0 bg-gray-950/40" />
          {/* Sharp app icon front and center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={project.icon}
              width={96}
              height={96}
              loading="lazy"
              alt={`${project.title} app icon`}
              className="rounded-[22%] shadow-2xl shadow-black/60 ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </>
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient ?? "from-gray-700/50 to-gray-900/50"} flex items-center justify-center`}
        >
          <div className="w-24 h-24 rounded-[22%] bg-white/10 ring-1 ring-white/20 shadow-2xl shadow-black/60 flex items-center justify-center text-white/90 transition-transform duration-500 group-hover:scale-110">
            {project.glyph}
          </div>
        </div>
      )}
    </>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const storeLink = project.appStore || project.playStore;

  return (
    <article className="h-full flex flex-col glass-effect text-gray-300 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/40 hover:border-white/20">
      {/* Artwork Section - Wrapped in link if appStore or playStore exists */}
      {storeLink ? (
        <a
          href={storeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden aspect-video cursor-pointer"
        >
          <CardArtwork project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="bg-blue-600 px-6 py-2 rounded-full text-white font-bold text-sm border border-blue-400/50 shadow-lg shadow-blue-500/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View App
            </span>
          </div>
        </a>
      ) : (
        <div className="block relative overflow-hidden aspect-video">
          <CardArtwork project={project} />
        </div>
      )}

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
        {(project.appStore || project.playStore) && (
          <div className="mt-auto flex gap-3 pt-4 border-t border-white/10">
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center py-2.5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-sm group/btn"
              >
                <FaApple size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
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
                <FaGooglePlay size={15} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                Play Store
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
