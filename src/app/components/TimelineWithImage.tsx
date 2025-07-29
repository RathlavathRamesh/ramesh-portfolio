"use client";
import { FC } from "react";

interface TimelineCardImageProps {
    imageUrl: string;
    title: string;
    institution: string;
    duration: string;
    description: string[];
}

const TimelineCardWithImage: FC<TimelineCardImageProps> = ({
    imageUrl,
    title,
    institution,
    duration,
    description,
}) => {
    return (
        <div className="relative pl-10 mb-10">
            {/* Timeline Dot */}
            <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5"></span>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
                    <img
                        src={imageUrl}
                        alt="logo"
                        className="w-8 h-8 object-contain rounded"
                    />
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {institution}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {duration}
                </span>
                <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
                    {description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineCardWithImage;
