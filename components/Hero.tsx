"use client";

import HeroTerminal from "./HeroTerminal";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="text-amber-400 tracking-[0.2em] mb-5 text-sm">
            PRODUCT MANAGER • BUILDER
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Building products where{" "}
            <span className="text-amber-400">
              technology
            </span>{" "}
            meets business.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl">
            MBA candidate at IIM Indore,
            ex-JPMorgan engineer,
            and product intern building
            fleet intelligence systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#work"
              className="
                bg-amber-400
                text-black
                px-6 py-3
                rounded-full
                font-medium
              "
            >
              Explore Work
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#playground"
              className="
                border border-zinc-700
                px-6 py-3
                rounded-full
                hover:border-zinc-500
                transition
              "
            >
              Try PM Simulator
            </motion.a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <HeroTerminal />
      </div>
    </section>
  );
}