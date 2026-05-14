"use client";
import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "PRD", "Research", "Teardown", "Case Study"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div className="min-h-screen pt-14">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-display mb-2 text-xs tracking-widest text-amber-400">
          ALL WORK
        </p>
        <h1 className="font-display mb-10 text-3xl text-zinc-100">
          Projects & case studies
        </h1>

        {/* Filter bar */}
        <div className="mb-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              suppressHydrationWarning
              onClick={() => setActive(f)}
              className={`font-display rounded border px-4 py-2 text-xs transition-colors ${
                active === f
                  ? "border-amber-400 bg-amber-400 text-zinc-950"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-lg border border-zinc-800 p-5 transition-colors hover:border-amber-400/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display rounded border border-amber-400/30 px-2 py-0.5 text-xs text-amber-400">
                  {p.type}
                </span>
                <span className="text-xs text-zinc-600">{p.company}</span>
              </div>
              <h2 className="font-display mb-3 text-sm text-zinc-100 transition-colors group-hover:text-amber-400">
                {p.title}
              </h2>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500">
                {p.summary}
              </p>
              <div className="mb-4 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                  >
                    {m}
                  </span>
                ))}
              </div>
              {(p.figmaLink || p.pdfLink) && (
                <div className="mt-4 flex gap-3 border-t border-zinc-800 pt-4">
                  {p.figmaLink && (
                    <a
                      href={p.figmaLink}
                      target="_blank"
                      className="text-xs text-amber-400 hover:underline"
                    >
                      Figma ↗
                    </a>
                  )}
                  {p.pdfLink && (
                    <a
                      href={p.pdfLink}
                      target="_blank"
                      className="text-xs text-amber-400 hover:underline"
                    >
                      PDF ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
