"use client";
import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../constants/projects";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";

const Projects: FC = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                    <FaProjectDiagram className="inline mr-2 text-orange-700" />
                    Featured Projects
                </h2>
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-6">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-1"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
