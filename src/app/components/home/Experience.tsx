"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section className="w-full mt-25 px-6" id="experience">
            <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <SectionHeader
                        title="Experience"
                        subtitle="Career"
                        description="My professional journey and contributions."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mt-6 border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl"
                >
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between flex-wrap gap-2">
                            <h3 className="text-xl font-bold text-gray-100">Junior Mobile Developer</h3>
                            <span className="text-gray-400">Current</span>
                        </div>
                        <h4 className="text-lg text-blue-400">iApp Technologies LLP</h4>
                        <ul className="list-disc list-outside ml-5 mt-4 text-gray-300 space-y-2 leading-relaxed">
                            <li>Engineered and maintained high-performance iOS applications with scalable architecture, optimized for App Store deployment.</li>
                            <li>Boosted app performance and stability across core modules, directly improving user satisfaction and retention; recognized as the youngest recipient of the “Rising Star of the Company” award.</li>
                            <li>Designed modular iOS SDKs emphasizing reusability and future-proofing, accelerating team productivity by reducing code redundancy.</li>
                            <li>Developed and integrated VoIP calling and messaging using Telnyx API, CallKit, and PushKit in SecondLine, scaling to 6,000+ active users.</li>
                            <li>Led UI overhaul of the core calling interface in collaboration with product/design teams, resulting in a 40% boost in DAUs and 25% increase in average call duration.</li>
                            <li>Implemented advanced features in PhotoVoice Translator, including AI chat, real-time translation, and text/PDF extraction using DeepSeek API and Vision Framework.</li>
                            <li>Built MathAi, an AI-powered cross-platform homework assistant with real-time math solving, voice interaction, and in-app monetization.</li>
                            <li>Conducted comprehensive code reviews, unit testing (XCTest), and debugging to ensure stability, compliance, and optimal UX.</li>
                            <li>Authored detailed internal documentation and followed MVC principles, ensuring team-wide consistency and faster onboarding of new developers.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
