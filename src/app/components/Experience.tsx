"use client";
import { FC } from "react";
import TimelineCardWithImage from "./TimelineWithImage";
import { experiences } from "../constants/experiences";
import { FaBriefcase } from "react-icons/fa";

const Experience: FC = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                <FaBriefcase className="inline mr-2 text-green-500" />
                Experience
            </h2>
            <div className="max-w-4xl mx-auto relative border-l border-gray-300 dark:border-gray-700 ml-4">
                {experiences.map((exp, index) => (
                    <TimelineCardWithImage
                        key={index}
                        imageUrl={exp.iconUrl}
                        title={exp.title}
                        institution={exp.institution}
                        duration={exp.duration}
                        description={exp.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
