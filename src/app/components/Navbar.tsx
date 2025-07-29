'use client';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks } from '../constants/navbar_items';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Auto-close on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) closeMenu();
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
                    Ramesh
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.id}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                activeClass="text-blue-400 underline"
                                className="cursor-pointer transition hover:text-blue-400"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Dark Mode Toggle */}
                <div
                    className="hidden md:block text-white text-xl cursor-pointer"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? <FiSun /> : <FiMoon />}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex gap-4 items-center">
                    <div
                        className="text-white text-xl cursor-pointer"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </div>
                    <div
                        className="text-white text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col bg-black/90 px-4 pb-4 text-white font-medium">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.id}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                onClick={closeMenu}
                                activeClass="text-blue-400 underline"
                                className="block py-2 cursor-pointer transition hover:text-blue-400"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
