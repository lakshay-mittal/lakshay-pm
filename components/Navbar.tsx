"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import { useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { href: "#work", label: "Work" },
  { href: "#thinking", label: "Thinking" },
  { href: "#playground", label: "Playground" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? "h-16 border-b border-zinc-800 bg-zinc-950/80 shadow-lg backdrop-blur-xl"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="font-semibold tracking-[0.2em] text-amber-400"
          >
            LM_
          </Link>
        </motion.div>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-zinc-100"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <MagneticButton>
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-amber-400/30 px-4 py-2 text-sm text-amber-400 transition hover:bg-amber-400/10"
          >
            Resume ↗
          </a>
        </MagneticButton>
      </div>
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="absolute bottom-0 left-0 h-[1px] w-full bg-amber-400"
      />
    </motion.nav>
  );
}
