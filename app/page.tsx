import Link from "next/link";
import { projects, stats } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="pt-14">

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-24">
        <p className="font-display text-amber-400 text-sm tracking-widest mb-6">
          &gt; LAKSHAY MITTAL
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-zinc-100 leading-tight mb-6">
          I build products at the{" "}
          <span className="text-amber-400">intersection</span>
          <br />of code and strategy.
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mb-10 leading-relaxed">
          MBA candidate at IIM Indore · Ex-JPMorgan Software Engineer ·
          Product Management Intern at Motorq. I bring engineering depth to
          product decisions and business clarity to technical tradeoffs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="bg-amber-400 text-zinc-950 font-display text-sm px-6 py-3 rounded hover:bg-amber-300 transition-colors"
          >
            View my work
          </Link>
          
          <a
            href="mailto:lakshaymittal.work@gmail.com"
            className="border border-zinc-700 text-zinc-300 font-display text-sm px-6 py-3 rounded hover:border-zinc-500 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-zinc-800 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-amber-400 mb-2">
                {s.value}{s.suffix}
              </p>
              <p className="text-zinc-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <p className="font-display text-amber-400 text-xs tracking-widest mb-2">
          FEATURED WORK
        </p>
        <h2 className="text-2xl font-display text-zinc-100 mb-12">
          Selected projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div
              key={p.id}
              className="border border-zinc-800 rounded-lg p-6 hover:border-amber-400/40 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-display text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded">
                  {p.type}
                </span>
                <span className="text-xs text-zinc-600">{p.company}</span>
              </div>
              <h3 className="text-zinc-100 font-display text-sm mb-3 group-hover:text-amber-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.metrics.map((m) => (
                  <span key={m} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.figmaLink && (
                  <a href={p.figmaLink} target="_blank" className="text-xs text-amber-400 hover:underline">
                    Figma ↗
                  </a>
                )}
                {p.pdfLink && (
                  <a href={p.pdfLink} target="_blank" className="text-xs text-amber-400 hover:underline">
                    PDF ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/projects" className="font-display text-sm text-amber-400 hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

    </div>
  );
}