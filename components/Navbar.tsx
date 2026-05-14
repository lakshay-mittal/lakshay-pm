"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#thinking", label: "Thinking" },
  { href: "#playground", label: "Playground" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300
      ${
        scrolled
            ? "backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800 h-16 shadow-lg"
            : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            >
            <Link
                href="/"
                className="text-amber-400 font-semibold tracking-[0.2em]"
            >
                LM_
            </Link>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                        group
                        relative
                        text-zinc-400
                        hover:text-zinc-100
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        "
            >
              {link.label}

              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="
                    border border-amber-400/30
                    px-5 py-2
                    rounded-full
                    text-sm
                    text-amber-400
                    hover:bg-amber-400/10
                    hover:shadow-lg
                    hover:shadow-amber-500/10
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    "
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}