"use client";
import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import React, { useEffect } from "react";

export const Circle = ({ className, idx, ...rest }: any) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.02, duration: 0.4, ease: "easeOut" }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200 dark:border-neutral-800",
        className
      )}
    />
  );
};

export const Radar = ({
  className,
  opacity = 1,
  oneShot = false,
}: {
  className?: string;
  opacity?: number;
  oneShot?: boolean;
}) => {
  const circles = new Array(8).fill(1);
  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 0.5 }}
      className={twMerge(
        "relative flex items-center justify-center rounded-full pointer-events-none h-full w-full",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes radar-spin-once {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 0.8s linear infinite;
        }
        .animate-radar-spin-once {
          animation: radar-spin-once 0.8s linear 1 forwards;
        }
      `}</style>
      {/* Rotating sweep line */}
      <div
        style={{ transformOrigin: "right center" }}
        className={twMerge(
          "absolute right-1/2 top-1/2 z-40 flex h-[2px] w-1/2 items-end justify-center overflow-hidden bg-transparent",
          oneShot ? "animate-radar-spin-once" : "animate-radar-spin"
        )}
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-l from-primary/60 to-transparent" />
      </div>
      {/* Concentric circles */}
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 12.5}%`,
            width: `${(idx + 1) * 12.5}%`,
            border: `1px solid rgba(148, 163, 184, ${0.15 - (idx + 1) * 0.015})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  icon,
  text,
  desc,
  delay,
  color = "#3b82f6",
  triggered,
  onClick,
  labelSide = "right",
}: {
  icon?: React.ReactNode;
  text?: string;
  desc?: string;
  delay?: number;
  color?: string;
  triggered?: boolean;
  onClick?: () => void;
  labelSide?: "left" | "right";
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (triggered) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.25, ease: "easeInOut" },
      });
    }
  }, [triggered, controls]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.15,
        delay: delay ?? 0,
        type: "spring",
        damping: 20,
        stiffness: 400,
      }}
      whileHover={{
        y: -8,
        scale: 1.1,
        rotateX: 8,
        rotateY: 8,
      }}
      onClick={onClick}
      className="relative z-50 flex flex-col items-center cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      {/* Desktop side callout — left or right */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 hidden md:flex flex-col pointer-events-none group-hover:opacity-100 opacity-80 transition-opacity duration-200
          ${labelSide === "right" 
            ? "left-[66px] items-start" 
            : "right-[66px] items-end"
          }
        `}
        style={{ width: 120 }}
      >
        <motion.div
          initial={{ opacity: 0, x: labelSide === "right" ? -8 : 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: (delay ?? 0) + 0.15, duration: 0.3 }}
          className="w-max max-w-[140px]"
        >
          <p 
            className="text-[11px] font-semibold leading-tight"
            style={{ color: color }}
          >
            {text}
          </p>
          <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">
            {desc}
          </p>
        </motion.div>
      </div>

      {/* Icon circle — always visible */}
      <motion.div
        animate={controls}
        className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 transition-all duration-300 shadow-sm group-hover:shadow-lg"
        style={{
          background:
            "linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(241, 245, 249, 0.9) 100%)",
          backdropFilter: "blur(12px)",
          boxShadow: triggered
            ? `0 0 0 3px ${color}66, 0 0 20px 6px ${color}55`
            : "0 1px 1px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05)",
          borderColor: triggered ? color : "transparent",
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          className="transition-colors duration-300"
          style={{ color: `${color}cc` }}
        >
          {icon}
        </div>
      </motion.div>

      {/* Mobile label — shown below icon on small screens */}
      <div className="mt-1 flex flex-col items-center md:hidden" style={{ width: 80 }}>
        <p className="text-[10px] font-semibold text-center leading-tight transition-colors duration-300"
           style={{ color: color }}>
          {text}
        </p>
        <p className="text-[9px] text-muted-foreground text-center leading-snug mt-0.5">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
