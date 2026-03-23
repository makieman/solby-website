"use client";
import React, { useEffect, useRef, useState } from "react";
import { Radar, IconContainer } from "../ui/radar-effect";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiDocumentText, HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";

// Shortest angular distance between two angles
function angleDiff(a: number, b: number): number {
  return Math.abs(((a - b + 540) % 360) - 180);
}

const getLabelSide = (angle: number): "left" | "right" => {
  const normalized = ((angle % 360) + 360) % 360;
  if (normalized > 270 || normalized < 90) return "right";
  return "left";
};

const useContainerSize = () => {
  const [size, setSize] = useState(460);
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 400) setSize(280);
      else if (vw < 640) setSize(340);
      else if (vw < 768) setSize(400);
      else setSize(460);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
};

const DURATION = 800;

export default function ProductGridSection() {
  const navigate = useNavigate();
  const containerSize = useContainerSize();
  const radius = containerSize * 0.4;

  const products = [
    { 
      text: "Solby ERP", 
      desc: "Run your entire business in one place",
      icon: <HiDocumentText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,     
      href: "/products/erp",           
      color: "#3b82f6", 
      angle: 270 
    },
    { 
      text: "Solby Accounting", 
      desc: "Invoices, reports & tax compliance",
      icon: <AiFillDollarCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />, 
      href: "/products/accounting",     
      color: "#10b981", 
      angle: 330 
    },
    { 
      text: "Solby HR", 
      desc: "Payroll, staff & leave management",
      icon: <BsClipboardDataFill className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
      href: "/products/hr",             
      color: "#8b5cf6", 
      angle: 30  
    },
    { 
      text: "Solby Multibranch", 
      desc: "Manage all locations from one dashboard",
      icon: <HiOutlineOfficeBuilding className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />, 
      href: "/features",          
      color: "#06b6d4", 
      angle: 90  
    },
    { 
      text: "Solby Bar & Restaurant", 
      desc: "Orders, tables & kitchen workflows",
      icon: <BiSolidReport className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,      
      href: "/products/bar-restaurant", 
      color: "#ef4444", 
      angle: 150 
    },
    { 
      text: "Solby Supply Chain", 
      desc: "Stock, suppliers & procurement",
      icon: <HiMiniDocumentArrowUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />, 
      href: "/products/supply-chain", 
      color: "#f59e0b", 
      angle: 210 
    },
  ];

  const [revealed, setRevealed] = useState<boolean[]>(new Array(products.length).fill(false));
  const [glowing, setGlowing]   = useState<boolean[]>(new Array(products.length).fill(false));
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showRadar, setShowRadar]       = useState(false);
  const [radarVisible, setRadarVisible] = useState(false);

  const sectionRef    = useRef<HTMLDivElement>(null);
  const revealedRef   = useRef<boolean[]>(new Array(products.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          setShowRadar(true);
          setRadarVisible(true);
          revealedRef.current = new Array(products.length).fill(false);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered, products.length]);

  useEffect(() => {
    if (!showRadar) return;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const angle = ((elapsed / DURATION) * 360 + 270) % 360;

      products.forEach((product, i) => {
        const diff = angleDiff(angle, product.angle);
        if (diff < 40 && !revealedRef.current[i]) {
          revealedRef.current[i] = true;
          setRevealed(prev => { const n = [...prev]; n[i] = true; return n; });
          setGlowing(prev => { const n = [...prev]; n[i] = true; return n; });
          setTimeout(() => {
            setGlowing(prev => { const n = [...prev]; n[i] = false; return n; });
          }, 200);
        }
      });

      if (elapsed >= DURATION + 100) {
        clearInterval(interval);
        setRadarVisible(false);
        setTimeout(() => setShowRadar(false), 300);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [showRadar, products]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 bg-white dark:bg-[#0b1222] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] dark:opacity-[0.15] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Integrated <span className="gradient-text">Product Suite</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Every tool your business needs, seamlessly connected.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center px-4">
          <div 
            className="relative mx-auto pb-8 md:pb-0"
            style={{ 
              width: containerSize, 
              height: containerSize,
            }}
          >
            {showRadar && (
              <motion.div
                animate={{ opacity: radarVisible ? 0.45 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Radar 
                  className="h-full w-full"
                  oneShot={true}
                  opacity={radarVisible ? 0.45 : 0}
                />
              </motion.div>
            )}

            {products.map((product, i) => {
              const angleRad = (product.angle * Math.PI) / 180;
              const cx = containerSize / 2 + Math.cos(angleRad) * radius;
              const cy = containerSize / 2 + Math.sin(angleRad) * radius;
              
              return (
                <motion.div
                  key={product.text}
                  initial={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%" }}
                  animate={{
                    opacity: revealed[i] ? 1 : 0,
                    scale: revealed[i] ? 1 : 0.6,
                    x: "-50%",
                    y: "-50%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1,
                  }}
                  style={{
                    position: 'absolute',
                    left: cx,
                    top: cy,
                    zIndex: 10,
                  }}
                >
                  <IconContainer
                    text={product.text}
                    desc={product.desc}
                    icon={product.icon}
                    color={product.color}
                    triggered={glowing[i]}
                    labelSide={getLabelSide(product.angle)}
                    onClick={() => navigate(product.href)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
