"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

const scenario = {
  question:
    "Support tickets increased by 40%. What should a PM do first?",

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
  const [selected, setSelected] =
    useState<number | null>(null);

  return (
    <section
      id="playground"
      className="py-32 px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-amber-400 text-sm tracking-[0.2em] mb-4">
            PM PLAYGROUND
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold">
            Think like a Product Manager.
          </h2>

          <p className="text-zinc-400 mt-5 text-lg max-w-2xl">
            A small simulation inspired by
            real PM interview thinking.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          whileHover={{
            y: -4,
          }}
          className="
            rounded-[36px]
            border border-zinc-800
            bg-zinc-900/40
            backdrop-blur-xl
            p-10
          "
        >
          <p className="text-zinc-300 text-xl mb-10">
            {scenario.question}
          </p>

          {/* Options */}
          <div className="space-y-4">
            {scenario.options.map(
              (option, index) => {
                const isSelected =
                  selected === index;

                const isCorrect =
                  index === scenario.correct;
                return (
                  <button
                    key={option}
                    onClick={() =>
                      setSelected(index)
                    }
                    suppressHydrationWarning
                    className={`
                      w-full
                      rounded-2xl
                      border
                      p-5
                      text-left
                      transition-all
                      duration-300
                      
                      ${
                        isSelected
                          ? isCorrect
                            ? "border-green-500 bg-green-500/10"
                            : "border-red-500 bg-red-500/10"
                          : "border-zinc-800 hover:border-zinc-600"
                      }
                    `}
                  >
                    {option}
                  </button>
                );
              }
            )}
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
              className="
                mt-10
                border-t
                border-zinc-800
                pt-8
              "
            >
              <p className="text-amber-400 mb-4 font-medium">
                PM Thinking
              </p>

              <p className="text-zinc-300 leading-8 mb-8">
                {scenario.explanation}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {scenario.framework.map(
                  (step) => (
                    <div
                      key={step}
                      className="
                        rounded-2xl
                        border border-zinc-800
                        p-4
                        bg-zinc-900
                      "
                    >
                      {step}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}