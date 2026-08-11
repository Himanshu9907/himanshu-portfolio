"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    icon: MessageCircle,
    label: "Let's Talk",
    value: "Start a project",
    href: "mailto:your-email@example.com?subject=Project%20Inquiry",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/[0.09] via-white/[0.025] to-purple-500/[0.08] px-6 py-20 text-center sm:px-12 lg:px-20"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/[0.04]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full border border-white/[0.04]" />

          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400"
          >
            <Sparkles size={24} />
          </motion.div>

          <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Have a project in mind?
          </p>

          <h2 className="relative mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h2>

          <p className="relative mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Whether you need a modern website, an AI-powered product,
            or a completely custom web experience, let's turn your idea
            into something real.
          </p>

          {/* CTA */}
          <motion.a
            href="mailto:your-email@example.com?subject=Project%20Inquiry"
            data-cursor="open"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-indigo-500/10 transition hover:bg-slate-100"
          >
            Start a conversation

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* Contact options */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {contactOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                data-cursor="open"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-indigo-400/25 hover:bg-indigo-500/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors group-hover:border-indigo-400/20 group-hover:text-indigo-400">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}