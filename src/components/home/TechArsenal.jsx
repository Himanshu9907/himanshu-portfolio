"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Braces,
  Bot,
  Database,
  Globe,
  Layers3,
  Palette,
  Server,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const technologies = [
  {
    name: "Next.js",
    short: "NEXT",
    icon: Globe,
    category: "Frontend Framework",
    level: "Advanced",
    description:
      "Building production-ready websites and applications with App Router, server components, dynamic routing and SEO-focused architecture.",
    tools: ["App Router", "Server Components", "SSR", "SEO"],
  },
  {
    name: "React",
    short: "REACT",
    icon: Braces,
    category: "UI Library",
    level: "Advanced",
    description:
      "Creating reusable, interactive and scalable interfaces using modern React patterns and component-driven architecture.",
    tools: ["Components", "Hooks", "State", "Reusable UI"],
  },
  {
    name: "JavaScript",
    short: "JS",
    icon: Braces,
    category: "Programming Language",
    level: "Advanced",
    description:
      "Writing modern JavaScript for interactive interfaces, APIs, data handling and full-stack application logic.",
    tools: ["ES6+", "Async/Await", "APIs", "DOM"],
  },
  {
    name: "Tailwind CSS",
    short: "TW",
    icon: Palette,
    category: "Styling",
    level: "Advanced",
    description:
      "Designing responsive, modern interfaces with utility-first styling, custom animations and scalable design systems.",
    tools: ["Responsive UI", "Animations", "Dark UI", "Design Systems"],
  },
  {
    name: "Node.js",
    short: "NODE",
    icon: Server,
    category: "Backend",
    level: "Intermediate",
    description:
      "Building backend logic, APIs and server-side functionality for modern web applications.",
    tools: ["REST APIs", "Server Logic", "API Integration"],
  },
  {
    name: "AI",
    short: "AI",
    icon: Bot,
    category: "Artificial Intelligence",
    level: "Intermediate",
    description:
      "Integrating AI capabilities into applications to create intelligent tools, automation and content-generation workflows.",
    tools: ["AI APIs", "Automation", "AI Tools"],
  },
  {
    name: "Cloudinary",
    short: "CLD",
    icon: Layers3,
    category: "Media Infrastructure",
    level: "Intermediate",
    description:
      "Managing and optimizing images and media for fast, scalable web experiences.",
    tools: ["Image Optimization", "CDN", "Transformations"],
  },
  {
    name: "APIs",
    short: "API",
    icon: Database,
    category: "Integration",
    level: "Intermediate",
    description:
      "Connecting applications with external services and building data-driven product experiences.",
    tools: ["REST", "JSON", "Third-party APIs"],
  },
];

export default function TechArsenal() {
  const [active, setActive] = useState(0);

  const selected = technologies[active];
  const Icon = selected.icon;

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[5%] top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            <Sparkles size={15} />
            Tech Arsenal
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Tools I use to
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              bring ideas to life.
            </span>
          </h2>
        </motion.div>

        {/* Main */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Technology selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-3"
          >
            {technologies.map((technology, index) => {
              const TechIcon = technology.icon;
              const isActive = index === active;

              return (
                <button
                  key={technology.name}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="relative flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tech"
                      className="absolute inset-0 rounded-xl bg-indigo-500/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition ${
                      isActive
                        ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-400"
                        : "border-white/10 bg-white/[0.025] text-slate-500"
                    }`}
                  >
                    <TechIcon size={18} />
                  </span>

                  <span className="relative flex-1">
                    <span
                      className={`block text-sm font-semibold ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    >
                      {technology.name}
                    </span>

                    <span className="mt-0.5 block text-[11px] text-slate-600">
                      {technology.category}
                    </span>
                  </span>

                  <span className="relative text-[10px] font-bold tracking-wider text-slate-600">
                    {technology.short}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.07] via-white/[0.02] to-purple-500/[0.05] p-8 sm:p-10"
          >
            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            {/* Glow */}
            <motion.div
              key={selected.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-600/15 blur-[100px]"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative"
              >
                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400">
                  <Icon size={30} />
                </div>

                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  {selected.category}
                </p>

                {/* Name */}
                <h3 className="mt-3 text-4xl font-black text-white sm:text-5xl">
                  {selected.name}
                </h3>

                {/* Level */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs text-slate-500">
                    Experience
                  </span>

                  <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold text-indigo-300">
                    {selected.level}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  {selected.description}
                </p>

                {/* Tools */}
                <div className="mt-9">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    What I use it for
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative code */}
                <div className="mt-12 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-4 font-mono text-xs text-slate-600">
                  <span className="text-indigo-400">&lt;</span>
                  <span className="text-slate-400">
                    build
                  </span>{" "}
                  <span className="text-purple-400">
                    technology
                  </span>
                  <span className="text-indigo-400">&gt;</span>

                  <span className="ml-2 text-slate-500">
                    {selected.name}
                  </span>

                  <span className="text-indigo-400">
                    &lt;/
                  </span>
                  <span className="text-slate-400">
                    build
                  </span>
                  <span className="text-indigo-400">&gt;</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}