"use client";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Rathlavath Ramesh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
