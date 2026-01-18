// "use client";
// import React from "react";
// import SectionHeader from "../ui/SectionHeader";
// import { motion } from "framer-motion";

// const Education = () => {
//     return (
//         <section className="w-full mt-25 px-6" id="education">
//             <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     viewport={{ once: true }}
//                 >
//                     <SectionHeader
//                         title="Education"
//                         subtitle="Academic"
//                         description="My educational background."
//                     />
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     viewport={{ once: true }}
//                     className="w-full max-w-4xl mt-6 border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl hover:border-blue-500/50 transition-colors"
//                 >
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
//                         <div>
//                             {/* <h3 className="text-xl font-bold text-gray-100">Vellore Institute of Technology, Bhopal</h3> */}
//                             <h3 className="text-xl font-bold text-gray-100">Vellore Institute of Technology</h3>
//                             <p className="text-blue-400 mt-1">B.Tech in Computer Science Engineering with Specialisation in Artificial Intelligence and Machine Learning</p>
//                         </div>
//                         <div className="text-right">
//                             <span className="block text-gray-400">08/2020 - 07/2024</span>
//                             <span className="block text-gray-300 font-medium mt-1">CGPA - 8.81/10</span>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Education;

"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section className="w-full mt-25 px-6" id="education">
            <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <SectionHeader
                        title="Education"
                        subtitle="Academic"
                        description="My educational background."
                    />
                </motion.div>

                {/* VIT Education Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mt-6 border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl hover:border-blue-500/50 transition-colors"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-gray-100">Vellore Institute of Technology</h3>
                            <p className="text-blue-400 mt-1">
                                B.Tech in Computer Science Engineering with Specialisation in Artificial Intelligence and Machine Learning
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="block text-gray-400">08/2020 - 07/2024</span>
                            <span className="block text-gray-300 font-medium mt-1">CGPA - 8.81/10</span>
                        </div>
                    </div>
                </motion.div>

                {/* Shivalik Public School Education Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mt-6 border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl hover:border-blue-500/50 transition-colors"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-gray-100">Shivalik Public School, Chandigarh</h3>
                            <p className="text-blue-400 mt-1">Senior Secondary Education</p>
                        </div>
                        <div className="text-right">
                            <span className="block text-gray-400">Graduated - 07/2020</span>
                            <span className="block text-gray-300 font-medium mt-1">CGPA - 9.0/10</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
