"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Hexagon, ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "@/contexts/ThemeContext"

const navLinks = [
    {
        name: "Features",
        href: "/features",
        items: [
            { name: "Solby ERP", href: "/products/erp" },
            { name: "Solby Supply Chain", href: "/products/supply-chain" },
            { name: "Solby Accounting", href: "/products/accounting" },
            { name: "Solby Bar & Restaurant", href: "/products/bar-restaurant" },
            { name: "Solby HR", href: "/products/hr" },
        ]
    },
    { name: "Industries", href: "/industries" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
];

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="flex justify-center w-full py-6 px-3 sm:px-4 overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white dark:bg-zinc-900 rounded-full shadow-lg w-full max-w-3xl relative z-10 border border-gray-100 dark:border-zinc-800 min-w-0">
                <div className="flex items-center">
                    <Link to="/">
                        <motion.div
                            className="mr-6 text-primary flex items-center"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            whileHover={{ rotate: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Hexagon className="w-8 h-8 fill-primary/20" strokeWidth={1.5} />
                        </motion.div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    to={item.href}
                                    className={`text-sm transition-colors font-medium flex items-center gap-1 ${location.pathname === item.href || (item.items?.some(sub => location.pathname === sub.href))
                                            ? "text-primary"
                                            : "text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
                                        }`}
                                >
                                    {item.name}
                                    {item.items && (
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                                    )}
                                </Link>
                            </motion.div>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.items && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-48 z-50"
                                    >
                                        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden py-2 backdrop-blur-xl">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className={`block px-4 py-2 text-xs font-medium transition-colors hover:bg-gray-50 dark:hover:bg-zinc-800 ${location.pathname === subItem.href ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                                        }`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                        className="fixed inset-0 bg-white dark:bg-zinc-950 z-50 pt-24 px-6 md:hidden overflow-y-auto"
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
                        <div className="flex flex-col space-y-6 pb-12">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.1 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex flex-col space-y-3"
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-lg font-semibold ${location.pathname === item.href
                                                ? "text-primary"
                                                : "text-gray-900 dark:text-gray-100"
                                            }`}
                                        onClick={toggleMenu}
                                    >
                                        {item.name}
                                    </Link>
                                    
                                    {item.items && (
                                        <div className="flex flex-col space-y-3 pl-4 border-l border-gray-100 dark:border-zinc-800">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    className={`text-sm font-medium ${location.pathname === subItem.href
                                                            ? "text-primary"
                                                            : "text-gray-500 dark:text-gray-400"
                                                        }`}
                                                    onClick={toggleMenu}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
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
