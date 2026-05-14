"use client";

import { motion } from "motion/react";

type TypingTextProps = {
  text: string;
  delay?: number;
};

export default function TypingText({
  text,
  delay = 0,
}: TypingTextProps) {
  return (
    <div className="flex items-center text-amber-400 font-mono">
      <motion.p
        initial={{ width: 0 }}
        animate={{ width: "fit-content" }}
        transition={{
          duration: 1,
          delay,
          ease: "easeInOut",
        }}
        className="
          overflow-hidden
          whitespace-nowrap
        "
      >
        {text}
      </motion.p>

      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  );
}