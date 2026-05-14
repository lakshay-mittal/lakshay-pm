"use client";

import { motion } from "motion/react";

export default function HeroTerminal() {
  return (
    <div className="[perspective:1200px]">
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}

      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.02,
      }}

      style={{
        transformStyle: "preserve-3d",
      }}

      className="
        rounded-[28px]
        border border-zinc-800
        bg-zinc-900/70
        backdrop-blur-xl
        overflow-hidden
        shadow-2xl
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
          <p className="text-amber-400">
            $ whoami
          </p>

          <p className="text-zinc-200 mt-2">
            Lakshay Mittal
          </p>
        </div>

        {/* focus */}
        <div>
          <p className="text-amber-400">
            $ current_focus
          </p>

          <p className="text-zinc-300 mt-2 leading-7">
            Building products for fleet
            intelligence and vehicle
            tracking systems.
          </p>
        </div>

        {/* strengths */}
        <div>
          <p className="text-amber-400">
            $ strengths
          </p>

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