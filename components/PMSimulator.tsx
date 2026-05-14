"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

const scenario = {
  question: "Support tickets increased by 40%. What should a PM do first?",

  options: [
    "Launch hotfix immediately",
    "Gather context first",
    "Escalate to engineering",
    "Email all customers",
  ],

  correct: 1,

  explanation:
    "Strong PMs first understand the context. Is this week-over-week? Customer-specific? A product launch issue? Severity matters before jumping to solutions.",

  framework: [
    "Clarify time frame",
    "Segment affected users",
    "Identify root cause",
    "Assess business impact",
  ],
};

export default function PMSimulator() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="playground" className="px-8 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.2em] text-amber-400">
            PM PLAYGROUND
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Think like a Product Manager.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            A small simulation inspired by real PM interview thinking.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          className="rounded-[36px] border border-zinc-800 bg-zinc-900/40 p-10 backdrop-blur-xl"
        >
          <p className="mb-10 text-xl text-zinc-300">{scenario.question}</p>

          {/* Options */}
          <div className="space-y-4">
            {scenario.options.map((option, index) => {
              const isSelected = selected === index;

              const isCorrect = index === scenario.correct;
              return (
                <button
                  key={option}
                  onClick={() => setSelected(index)}
                  suppressHydrationWarning
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? isCorrect
                        ? "border-green-500 bg-green-500/10"
                        : "border-red-500 bg-red-500/10"
                      : "border-zinc-800 hover:border-zinc-600"
                  } `}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Answer Reveal */}
          {selected !== null && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-10 border-t border-zinc-800 pt-8"
            >
              <p className="mb-4 font-medium text-amber-400">PM Thinking</p>

              <p className="mb-8 leading-8 text-zinc-300">
                {scenario.explanation}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {scenario.framework.map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
