"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import TypingText from "./TypingText";

export default function HeroTerminal() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue =
      ((mouseX - width / 2) / width) * 15;

    const rotateXValue =
      -((mouseY - height / 2) / height) * 15;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  return (
    <div
  className="[perspective:1400px]"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
    >
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}

      whileHover={{
        scale: 1.02,
      }}

      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}

      className="
        rounded-[28px]
        border border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        overflow-hidden
        shadow-2xl
        shadow-black/50
        hover:shadow-amber-500/10
        will-change-transform
        transition-shadow
        duration-300
        hover:shadow-amber-500/10
      "
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="p-6 space-y-6 font-mono text-sm">
        {/* whoami */}
        <div>
          <TypingText
            text="$ whoami"
            delay={0.2}
          />

          <p className="text-zinc-200 mt-2">
            Lakshay Mittal
          </p>
        </div>

        {/* focus */}
        <div>
          <TypingText
            text="$ current_focus"
            delay={0.6}
          />

          <p className="text-zinc-300 mt-2 leading-7">
            Building products for fleet
            intelligence and vehicle
            tracking systems.
          </p>
        </div>

        {/* strengths */}
        <div>
          <TypingText
            text="$ strengths"
            delay={1}
          />

          <div className="space-y-4 mt-4">
            <SkillBar
              label="Technical Depth"
              width="95%"
            />

            <SkillBar
              label="Product Thinking"
              width="88%"
            />

            <SkillBar
              label="Execution"
              width="90%"
            />
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

function SkillBar({
  label,
  width,
}: {
  label: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-zinc-300">
          {label}
        </span>
      </div>

      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="h-full bg-amber-400 rounded-full"
        />
      </div>
    </div>
  );
}