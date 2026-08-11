"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Gauge,
  SearchCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites and web applications built with Next.js and React, focused on clean architecture, responsiveness and scalability.",
    tags: ["Next.js", "React", "JavaScript"],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Integration",
    description:
      "AI-powered features, intelligent tools and automation integrated into websites and applications using modern AI APIs.",
    tags: ["AI APIs", "Automation", "AI Tools"],
  },
  {
    number: "03",
    icon: Gauge,
    title: "UI & Performance",
    description:
      "Premium responsive interfaces with smooth interactions, animations and performance optimization across devices.",
    tags: ["UI/UX", "Animations", "Performance"],
  },
  {
    number: "04",
    icon: SearchCheck,
    title: "SEO & Deployment",
    description:
      "SEO-friendly websites with optimized metadata, performance, structured content and production deployment.",
    tags: ["SEO", "Vercel", "Optimization"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute right-[10%] top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            <span className="h-px w-8 bg-indigo-400" />
            What I Do
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            I build digital products
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              that actually work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From polished interfaces to AI-powered applications, I focus on
            building products that look great, perform well and solve real
            problems.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={card}
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-500 hover:border-indigo-500/30 sm:p-8"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-600/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

      {/* Number */}
      <div className="absolute right-7 top-7 text-sm font-semibold tracking-widest text-slate-700 transition-colors duration-500 group-hover:text-indigo-500/40">
        {service.number}
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: -5,
          scale: 1.08,
        }}
        className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400"
      >
        <Icon size={22} />
      </motion.div>

      {/* Content */}
      <h3 className="relative text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="relative mt-4 max-w-lg text-sm leading-7 text-slate-400">
        {service.description}
      </p>

      {/* Tags */}
      <div className="relative mt-7 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] text-slate-400 transition-colors group-hover:border-indigo-500/20 group-hover:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom link */}
      <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-xs font-medium text-slate-500">
          Let's build something
        </span>

        <motion.div
          whileHover={{
            x: 4,
            y: -4,
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors group-hover:border-indigo-400/30 group-hover:text-indigo-400"
        >
          <ArrowUpRight size={17} />
        </motion.div>
      </div>
    </motion.article>
  );
}