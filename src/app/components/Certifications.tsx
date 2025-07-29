"use client";
import { FC } from "react";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../constants/certifications";

const Certifications: FC = () => {
    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                <FaCertificate className="inline mr-2 text-yellow-500" />
                Certifications & Achievements
            </h2>
            <ul className="space-y-4 mx-w-4xl mx-auto">
                {certifications.map((cert, index) => (
                    <li
                        key={index}
                        className="bg-white grid gap-10 sm:grid-cols-1 md:grid-cols-2 dark:bg-gray-800 p-6 mr-10 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {cert.issuer} • {cert.year}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{cert.description}</p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 text-sm mt-1 hover:underline"
                            >
                                View Certificate
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Certifications;
