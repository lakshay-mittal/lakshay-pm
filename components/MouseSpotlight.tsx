"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 220,
        y: position.y - 220,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 120,
        mass: 0.5,
      }}
      className="pointer-events-none fixed z-0 hidden h-[440px] w-[440px] rounded-full bg-amber-400/[0.045] blur-[90px] lg:block"
    />
  );
}
