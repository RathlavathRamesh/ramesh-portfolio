"use client";
import React from "react";

import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { skills } from "../constants/skills"; // Adjust the import path as necessary
// 🔹 Skill categories

const Skills = () => {
    return (
        <section id="skills" className="relative py-20 px-6 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Background Decorative SVG (optional) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/Assets/skills_logo.jpg"
                        alt="RGUKT Basar Campus"
                        className="w-full h-full object-cover opacity-10 dark:opacity-20"
                    />
                </div>
               {/*  <Image
                    
                    alt="Decorative"
                    fill
                    className="object-cover"
                /> */}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                <FaCode className="inline mr-2 text-pink-500" />
                    My Technical Skills
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(skills).map(([category, items], i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                                {category}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                {items.map((skill, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        {skill.icon ? (
                                            <skill.icon className="text-2xl text-blue-500 dark:text-blue-300" />
                                        ) : (
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={24}
                                                height={24}
                                                className="rounded-sm"
                                            />
                                        )}
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
