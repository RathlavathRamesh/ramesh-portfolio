"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* 🔵 Left Side – Image */}
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="w-72 h-72 relative rounded-lg overflow-hidden shadow-lg shadow-blue-500/20">
                        <Image
                            src="/my-application-photo.jpg"
                            alt="Ramesh Nayak Rathlavath"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* 🟢 Right Side – Text */}
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-5"
                >
                    <h2 className="text-3xl font-bold text-blue-600 dark:text-indigo-400">
                        About Me
                    </h2>

                    <p className="text-md leading-relaxed">
                        I’m <span className="font-semibold">Ramesh Nayak Rathlavath</span>, an Associate AI Engineer with a passion for building meaningful AI solutions that create real impact. I come from a strong Computer Science background from RGUKT Basar, where I mastered the fundamentals of programming, data structures, and algorithms.
                    </p>

                    <p className="text-md leading-relaxed">
                        During my academic journey, I actively engaged in hands-on learning and real-world projects through platforms like NxtWave CCBP 4.0. This helped me sharpen my skills in both **Full-Stack Development (MERN)** and **Machine Learning**. I further expanded into **GenAI**, **RAG pipelines**, and **LangChain**.
                    </p>

                    <p className="text-md leading-relaxed">
                        Currently, I’m working at <span className="font-medium text-blue-500 dark:text-indigo-300">Centific</span> on high-impact AI workflows including document processing, vector DB integration, and backend pipelines — preparing myself for the next wave of AI innovation.
                    </p>

                    <p className="text-md leading-relaxed">
                        I’m an enthusiastic learner, passionate team player, and excited about pushing boundaries in the **Generative AI** and **Applied ML** space. Let’s innovate together!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
