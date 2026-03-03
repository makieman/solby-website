import { Marquee } from "@/components/ui/marquee"
import { Hexagon, Triangle, Framer, Cloud } from "lucide-react"

const Logos = {
    tailwindcss: () => (
        <div className="flex items-center gap-2 font-bold text-xl text-cyan-500">
            <Hexagon className="h-[28px] w-auto" />
            <span>Tailwind</span>
        </div>
    ),
    nextjs: () => (
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Triangle className="h-[28px] w-auto fill-current" />
            <span>Next.js</span>
        </div>
    ),
    framer: () => (
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Framer className="h-[28px] w-auto" />
            <span>Motion</span>
        </div>
    ),
    aws: () => (
        <div className="flex items-center gap-2 font-bold text-xl dark:text-white text-gray-900">
            <Cloud className="h-[32px] w-auto" />
            <span>AWS</span>
        </div>
    ),
};

export function MarqueeDemo() {
    const arr = [Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws]

    return (
        <Marquee>
            {arr.map((Logo, index) => (
                <div
                    key={index}
                    className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
                >
                    <Logo />
                </div>
            ))}
        </Marquee>
    )
}
