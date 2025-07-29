"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-6 bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden pt-20 md:pt-0"
        >
            {/* 🟣 Floating Blobs */}
            <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />

            {/* 🟢 Text Content */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="md:w-1/2 text-center md:text-left z-10 space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Hi, I'm{" "}
                    <span className="text-blue-400">
                        Ramesh Nayak Rathlavath
                    </span>
                </h1>

                <p className="text-xl text-gray-300">
                    <Typewriter
                        words={[
                            "Associate AI Engineer",
                            "GenAI Enthusiast",
                            "RAG Architect",
                            "Full-Stack & ML Developer",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 px-6 py-2 rounded text-white transition duration-300"
                    >
                        Projects <FaArrowRight className="text-sm" />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        Contact <FaEnvelope className="text-sm" />
                    </a>
                </div>
            </motion.div>

            {/* 🔵 Image with Glow & Circle Animation */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10"
            >
                {/* Glowing Ring Behind Image */}
                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-2xl opacity-20 animate-pulse" />

                <div className="w-80 h-80 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-500">
                    <Image
                        src="/my-application-photo.jpg"
                        alt="Ramesh Profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
