"use client"

import * as React from "react"
import { motion } from "motion/react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const CtaCard = () => {
    return (
        <div className="flex justify-center w-full px-4">
            <motion.div
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-gray-100 dark:border-zinc-800 px-8 py-16 md:px-16 md:py-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Decorative blurred gradient blobs */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl"
                />

                {/* Badge */}
                <div className="flex justify-center mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        Ready to Transform?
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center leading-tight mb-4">
                    Streamline Your Business with Solby
                </h2>

                {/* Subtext */}
                <p className="text-base md:text-lg text-gray-500 dark:text-zinc-400 text-center mb-10 leading-relaxed max-w-2xl mx-auto">
                    Join 800+ businesses that trust Solby to run leaner and grow faster.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors group shadow-lg shadow-black/10"
                        >
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                            Request Demo
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export { CtaCard }
