"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Hexagon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "@/contexts/ThemeContext"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
];

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="flex justify-center w-full py-6 px-4">
            <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-zinc-900 rounded-full shadow-lg w-full max-w-3xl relative z-10 border border-gray-100 dark:border-zinc-800">
                <div className="flex items-center">
                    <motion.div
                        className="mr-6 text-primary"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Hexagon className="w-8 h-8 fill-primary/20" strokeWidth={1.5} />
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((item) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link
                                to={item.href}
                                className={`text-sm transition-colors font-medium ${location.pathname === item.href
                                        ? "text-primary"
                                        : "text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <motion.div
                    className="hidden md:flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
                    <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white dark:bg-zinc-950 z-50 pt-24 px-6 md:hidden"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <motion.button
                            className="absolute top-6 right-6 p-2"
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                        </motion.button>
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-base font-medium ${location.pathname === item.href
                                                ? "text-primary"
                                                : "text-gray-900 dark:text-gray-100"
                                            }`}
                                        onClick={toggleMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="pt-6"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
                                    onClick={toggleMenu}
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { Navbar1 }
