"use client";

import HeroTerminal from "./HeroTerminal";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto grid max-w-6xl items-center gap-20 px-8 lg:grid-cols-2">
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
          <p className="mb-5 text-sm tracking-[0.2em] text-amber-400">
            PRODUCT MANAGER • BUILDER
          </p>

          <h1 className="text-5xl leading-tight font-bold lg:text-7xl">
            Building products where{" "}
            <span className="text-amber-400">technology</span> meets business.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            MBA candidate at IIM Indore, ex-JPMorgan engineer, and product
            intern building fleet intelligence systems.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#work"
              className="rounded-full bg-amber-400 px-6 py-3 font-medium text-black"
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
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
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
