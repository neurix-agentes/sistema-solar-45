"use client";

import * as React from "react";
import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

type StarLayerProps = HTMLMotionProps<"div"> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
};

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#fff",
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState<string>("");

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn("absolute top-0 left-0 w-full h-[2000px] pointer-events-none", className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
};

export function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = "#fff",
  ...props
}: StarsBackgroundProps) {
  const prefersReduced = useReducedMotion();
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  // Responsive density for mobile performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mobileSpeed = isMobile ? speed * 1.5 : speed;
  const mobileCounts = isMobile ? [500, 200, 100] : [1000, 400, 200];

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (prefersReduced) return;
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor, prefersReduced],
  );

  return (
    <div
      data-slot="stars-background"
      className={cn(
        "relative w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black",
        className,
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div 
        style={{ 
          x: prefersReduced ? 0 : springX, 
          y: prefersReduced ? 0 : springY 
        }} 
        className="pointer-events-none will-change-transform z-0 select-none"
        aria-hidden="true"
      >
        <StarLayer
          count={mobileCounts[0]}
          size={1}
          transition={prefersReduced ? { duration: 0 } : { repeat: Infinity, duration: mobileSpeed, ease: "linear" }}
          starColor={starColor}
        />
        <StarLayer
          count={mobileCounts[1]}
          size={2}
          transition={prefersReduced ? { duration: 0 } : {
            repeat: Infinity,
            duration: mobileSpeed * 2,
            ease: "linear",
          }}
          starColor={starColor}
        />
        <StarLayer
          count={mobileCounts[2]}
          size={3}
          transition={prefersReduced ? { duration: 0 } : {
            repeat: Infinity,
            duration: mobileSpeed * 3,
            ease: "linear",
          }}
          starColor={starColor}
        />
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}