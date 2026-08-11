"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Rocket,
} from "lucide-react";

const journey = [
  {
    year: "2023",
    title: "B.Tech in Computer Science",
    description:
      "Started my professional journey with a foundation in computer science and software development.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Started Building",
    description:
      "Focused on modern web development, React, JavaScript and building real-world applications.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "EVInsights Hub",
    description:
      "Built and launched an EV-focused platform with modern Next.js architecture and SEO.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Kratiq AI & Freelancing",
    description:
      "Building AI-powered products and turning development skills into client-focused solutions.",
    icon: BriefcaseBusiness,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-[5%] top-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            <span className="h-px w-8 bg-indigo-400" />
            About Me
          </div>

          <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Building.
            <br />
            Learning.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Shipping.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.02] to-purple-500/[0.05] p-7">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-[100px]" />

              {/* Avatar */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-8xl"
                >
                  👨‍💻
                </motion.div>
              </div>

              <div className="relative mt-7">
                <h3 className="text-2xl font-bold text-white">
                  Himanshu
                </h3>

                <p className="mt-1 text-sm text-indigo-400">
                  Full Stack / Next.js Developer
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  I enjoy turning ideas into useful digital products.
                  My focus is on modern web development, AI-powered
                  experiences and clean, high-performance interfaces.
                </p>
              </div>

              {/* Stats */}
              <div className="relative mt-7 grid grid-cols-2 gap-3">
                <MiniStat value="2+" label="Products Built" />
                <MiniStat value="Next.js" label="Primary Stack" />
              </div>

              {/* CTA */}
              <a
                href="#contact"
                data-cursor="open"
                className="group relative mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition hover:border-indigo-400/30 hover:bg-indigo-500/5"
              >
                Let's work together

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — JOURNEY */}
          <div className="relative">

            {/* Vertical line */}
            <div className="absolute bottom-5 left-[23px] top-5 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />

            <div className="space-y-10">
              {journey.map((item, index) => (
                <JourneyItem
                  key={item.year}
                  item={item}
                  index={index}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyItem({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      className="group relative flex gap-7"
    >
      {/* Timeline dot */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-400/20 bg-slate-950 text-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.08)] transition group-hover:border-indigo-400/50 group-hover:bg-indigo-500/10">
        <Icon size={19} />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold tracking-[0.15em] text-indigo-400">
            {item.year}
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>

        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{label}</p>
    </div>
  );
}