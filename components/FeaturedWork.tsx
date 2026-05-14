"use client";

import * as motion from "motion/react-client";

const projects = [
  {
    title: "Fleet Intelligence Platform",
    role: "Product Management Intern • Motorq",

    problem:
      "Fleet managers lacked visibility into pre-delivery vehicle movement and exception handling.",

    approach:
      "Designed workflows for tracking, delay management, threshold configuration and intervention UX.",

    decision:
      "Prioritized actionable interventions over dashboard complexity.",

    impact:
      "Improved visibility into delivery journeys and surfaced operational bottlenecks.",

    tags: [
      "Product Strategy",
      "UX",
      "Analytics",
      "Fleet Tech",
    ],
  },

  {
    title: "PM Interview Simulator",
    role: "Side Project",

    problem:
      "PM candidates struggle to simulate realistic product interviews.",

    approach:
      "Built an interactive interview practice experience using Lovable.",

    decision:
      "Focused on structured PM thinking rather than generic answer generation.",

    impact:
      "Created realistic interview simulation for product candidates.",

    tags: [
      "AI",
      "Product Thinking",
      "UX",
      "Experimentation",
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-amber-400 text-sm tracking-[0.2em] mb-4">
            FEATURED WORK
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold">
            Products I've built &
            problems I've solved.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
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
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                border border-zinc-800
                rounded-[32px]
                p-8
                bg-zinc-900/40
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-zinc-700
              "
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8">

                {/* Left */}
                <div className="flex-1">
                  <p className="text-zinc-500 text-sm mb-3">
                    {project.role}
                  </p>

                  <h3 className="text-3xl font-semibold mb-8">
                    {project.title}
                  </h3>

                  <div className="space-y-6">
                    <InfoBlock
                      title="Problem"
                      text={project.problem}
                    />

                    <InfoBlock
                      title="Approach"
                      text={project.approach}
                    />

                    <InfoBlock
                      title="Key Decision"
                      text={project.decision}
                    />

                    <InfoBlock
                      title="Impact"
                      text={project.impact}
                    />
                  </div>
                </div>

                {/* Right */}
                <div className="lg:w-[280px] flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-3 py-1
                          rounded-full
                          bg-zinc-800
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                  suppressHydrationWarning
                    className="
                      mt-10
                      border border-amber-400/30
                      rounded-full
                      px-5 py-3
                      text-amber-400
                      hover:bg-amber-400/10
                      transition
                    "
                  >
                    View Case Study →
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-amber-400 text-sm mb-2">
        {title}
      </p>

      <p className="text-zinc-400 leading-7">
        {text}
      </p>
    </div>
  );
}