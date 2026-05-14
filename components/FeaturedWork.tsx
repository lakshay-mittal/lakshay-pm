"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const projects = [
  {
    title: "Fleet Intelligence Platform",
    role: "Product Management Intern • Motorq",

    problem:
      "Fleet managers lacked visibility into pre-delivery vehicle movement and exception handling.",

    approach:
      "Designed workflows for tracking, delay management, threshold configuration and intervention UX.",

    decision: "Prioritized actionable interventions over dashboard complexity.",

    impact:
      "Improved visibility into delivery journeys and surfaced operational bottlenecks.",

    tags: ["Product Strategy", "UX", "Analytics", "Fleet Tech"],
  },

  {
    title: "PM Interview Simulator",
    role: "Side Project",

    problem: "PM candidates struggle to simulate realistic product interviews.",

    approach:
      "Built an interactive interview practice experience using Lovable.",

    decision:
      "Focused on structured PM thinking rather than generic answer generation.",

    impact: "Created realistic interview simulation for product candidates.",

    tags: ["AI", "Product Thinking", "UX", "Experimentation"],
  },
];

export default function FeaturedWork() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section id="work" className="px-8 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.2em] text-amber-400">
            FEATURED WORK
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Products I've built & problems I've solved.
          </h2>
        </div>

        {/* Cards */}
        <motion.div layout className="grid gap-8">
          {projects.map((project, i) => {
            const isExpanded = expanded === i;
            return (
              <motion.div
                layout
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  layout: {
                    duration: 0.45,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                className="cursor-pointer rounded-[32px] border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700"
              >
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                  {/* Left */}
                  <div className="flex-1">
                    <p className="mb-3 text-sm text-zinc-500">{project.role}</p>

                    <h3 className="mb-8 text-3xl font-semibold">
                      {project.title}
                    </h3>

                    <div className="space-y-6">
                      <InfoBlock title="Problem" text={project.problem} />

                      <InfoBlock title="Approach" text={project.approach} />

                      <InfoBlock title="Key Decision" text={project.decision} />

                      <InfoBlock title="Impact" text={project.impact} />
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between lg:w-[280px]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(isExpanded ? null : i);
                      }}
                      suppressHydrationWarning
                      className="mt-10 rounded-full border border-amber-400/30 px-5 py-3 text-amber-400 transition hover:bg-amber-400/10"
                    >
                      {isExpanded ? "Hide Case Study ↑" : "View Case Study →"}
                    </button>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-10 border-t border-zinc-800 pt-8">
                        <div>
                          <div className="space-y-10">
                            {/* PM Thinking */}
                            <div>
                              <p className="mb-5 text-sm tracking-[0.2em] text-amber-400">
                                PRODUCT THINKING
                              </p>

                              <div className="grid gap-6 md:grid-cols-2">
                                <CaseBlock
                                  title="Challenge"
                                  text="Fleet managers lacked proactive visibility into delayed deliveries and exception handling."
                                />

                                <CaseBlock
                                  title="Constraint"
                                  text="The solution had to work across fragmented OEM logistics systems and operational workflows."
                                />

                                <CaseBlock
                                  title="Tradeoff"
                                  text="Prioritized actionable interventions over excessive dashboard complexity."
                                />

                                <CaseBlock
                                  title="Outcome"
                                  text="Created a clearer operational workflow for pre-delivery tracking and exception management."
                                />
                              </div>
                            </div>

                            {/* Decision Framework */}
                            <div>
                              <p className="mb-5 text-sm tracking-[0.2em] text-amber-400">
                                MY DECISION FRAMEWORK
                              </p>

                              <div className="grid gap-4 md:grid-cols-4">
                                {[
                                  "Understand delivery friction",
                                  "Identify intervention points",
                                  "Reduce operational ambiguity",
                                  "Design for actionability",
                                ].map((step, index) => (
                                  <motion.div
                                    key={step}
                                    initial={{
                                      opacity: 0,
                                      y: 20,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                    }}
                                    transition={{
                                      delay: index * 0.08,
                                    }}
                                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
                                  >
                                    <p className="mb-3 text-sm text-amber-400">
                                      0{index + 1}
                                    </p>

                                    <p className="text-sm leading-6 text-zinc-300">
                                      {step}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Future Thinking */}
                            <div>
                              <p className="mb-4 text-sm tracking-[0.2em] text-amber-400">
                                WHAT I WOULD DO NEXT
                              </p>

                              <p className="max-w-3xl leading-8 text-zinc-400">
                                Introduce predictive delay intelligence, smarter
                                thresholds, and intervention recommendations to
                                reduce manual fleet monitoring effort.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
      <p className="mb-3 text-amber-400">{title}</p>

      <p className="leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="mb-2 text-sm text-amber-400">{title}</p>

      <p className="leading-7 text-zinc-400">{text}</p>
    </div>
  );
}
