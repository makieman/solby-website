"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface CTAProps {
    badge?: {
        text: string
    }
    title: string
    description?: string
    action: {
        text: string
        href: string
        variant?: "default" | "glow" | "outline" | "secondary" | "ghost" | "link" | "destructive"
    }
    withGlow?: boolean
    className?: string
}

export function CTASection({
    badge,
    title,
    description,
    action,
    withGlow = true,
    className,
}: CTAProps) {
    return (
        <section className={cn("overflow-hidden pt-0 md:pt-0 pb-12", className)}>
            <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24 bg-card/50 backdrop-blur-sm rounded-3xl border border-border shadow-2xl">
                {/* Glow Effect */}
                {withGlow && (
                    <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-3xl shadow-glow opacity-100 animate-scale-in" />
                )}

                <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
                    {/* Badge */}
                    {badge && (
                        <Badge
                            variant="outline"
                            className="opacity-0 animate-fade-in-up delay-100 bg-brand/10 border-brand/20 text-brand"
                        >
                            <span className="">{badge.text}</span>
                        </Badge>
                    )}

                    {/* Title */}
                    <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl opacity-0 animate-fade-in-up delay-200 text-foreground tracking-tight">
                        {title}
                    </h2>

                    {/* Description */}
                    {description && (
                        <p className="text-muted-foreground opacity-0 animate-fade-in-up delay-300 max-w-2xl text-lg">
                            {description}
                        </p>
                    )}

                    {/* Action Button */}
                    <div className="opacity-0 animate-fade-in-up delay-500">
                        <Button
                            variant={action.variant === "glow" ? "default" : (action.variant || "default")}
                            size="lg"
                            className={cn(
                                "group h-12 px-8 text-base",
                                action.variant === "glow" && "bg-gradient-to-r from-brand to-brand-foreground shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5 transition-all"
                            )}
                            asChild
                        >
                            <a href={action.href}>
                                {action.text}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
