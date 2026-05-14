"use client";

import * as motion from "motion/react-client";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] left-[-8%] h-[550px] w-[550px] rounded-full bg-amber-500/22 blur-[90px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] right-[-8%] h-[500px] w-[500px] rounded-full bg-orange-500/18 blur-[100px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[25%] h-[420px] w-[420px] rounded-full bg-amber-300/14 blur-[90px]"
      />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.045]" />
    </div>
  );
}
