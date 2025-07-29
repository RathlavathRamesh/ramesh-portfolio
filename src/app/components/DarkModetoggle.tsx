"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // On mount, check localStorage
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="fixed bottom-4 right-4 p-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-md z-50"
        >
            {isDark ? <FaSun /> : <FaMoon />}
        </button>
    );
}