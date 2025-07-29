"use client";
import { FC } from "react";
import TimelineCard from "../components/TimelineCard";
import { FaGraduationCap } from "react-icons/fa";
import { educationData } from "../constants/educationData";
import Image from "next/image";

const Education: FC = () => {
    return (
        <section
            id="education"
            className="relative py-20 px-6 bg-gray-100 dark:bg-gray-900 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/Assets/rgukt_logo_light.jpeg"
                    alt="RGUKT Basar Campus"
                    className="w-full h-full object-cover opacity-10 dark:opacity-20"
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                    <FaGraduationCap className="inline mr-2 text-yellow-500" />
                    Education
                </h2>

                <div className="space-y-4 max-w-4xl mx-auto px-6 relative border-l border-gray-300 dark:border-gray-700 ml-4">
                    {educationData.map((edu, index) => (
                        <TimelineCard
                            key={index}
                            icon={<edu.icon/>}
                            title={edu.title}
                            institution={edu.institution}
                            duration={edu.duration}
                            description={edu.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
