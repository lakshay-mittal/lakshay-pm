"use client";
import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "PRD", "Research", "Teardown", "Case Study"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div className="pt-14 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <p className="font-display text-amber-400 text-xs tracking-widest mb-2">
          ALL WORK
        </p>
        <h1 className="text-3xl font-display text-zinc-100 mb-10">
          Projects & case studies
        </h1>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              suppressHydrationWarning
              onClick={() => setActive(f)}
              className={`font-display text-xs px-4 py-2 rounded border transition-colors ${
                active === f
                  ? "bg-amber-400 text-zinc-950 border-amber-400"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="border border-zinc-800 rounded-lg p-5 hover:border-amber-400/40 transition-colors group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-display text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded">
                  {p.type}
                </span>
                <span className="text-xs text-zinc-600">{p.company}</span>
              </div>
              <h2 className="text-sm font-display text-zinc-100 mb-3 group-hover:text-amber-400 transition-colors">
                {p.title}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span key={m} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                    {m}
                  </span>
                ))}
              </div>
              {(p.figmaLink || p.pdfLink) && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-800">
                  {p.figmaLink && <a href={p.figmaLink} target="_blank" className="text-xs text-amber-400 hover:underline">Figma ↗</a>}
                  {p.pdfLink && <a href={p.pdfLink} target="_blank" className="text-xs text-amber-400 hover:underline">PDF ↗</a>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}