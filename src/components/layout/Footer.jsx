"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MoveUp,

} from "lucide-react";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// const socials = [
//   {
//     label: "GitHub",
//     href: "#",
//     icon: Github,
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: Linkedin,
//   },
//   {
//     label: "Email",
//     href: "mailto:your-email@example.com",
//     icon: Mail,
//   },
// ];

// const socials = [
//   {
//     label: "GitHub",
//     href: "https://github.com/YOUR_USERNAME",
//     short: "GH",
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/YOUR_USERNAME/",
//     short: "IN",
//   },
//   {
//     label: "Email",
//     href: "mailto:your-email@example.com",
//     short: "@",
//   },
// ];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Himanshu9907/",
    short: "GH",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/himanshu-prajapati-822205241/",
    short: "IN",
  },
  {
    label: "Email",
    href: "mailto:himanshu05119@gmail.com",
    short: "@",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_0.7fr_0.7fr]">

          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="inline-block text-2xl font-black tracking-tight text-white"
              whileHover={{ x: 3 }}
            >
              H<span className="text-indigo-400">.</span>
            </motion.a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Full Stack Developer focused on building modern web
              experiences, AI-powered products and digital solutions
              that solve real problems.
            </p>

            <a
              href="#contact"
              data-cursor="open"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
            >
              Let's build something

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect
            </p>

            {/* <div className="mt-5 flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    data-cursor="open"
                    className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <Icon
                      size={16}
                      className="transition-colors group-hover:text-indigo-400"
                    />

                    {social.label}
                  </a>
                );
              })}
            </div> */}

            <div className="mt-5 flex flex-col gap-3">
  {socials.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target={
        social.href.startsWith("mailto:")
          ? undefined
          : "_blank"
      }
      rel={
        social.href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
      data-cursor="open"
      className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-[10px] font-bold text-slate-500 transition-colors group-hover:border-indigo-400/30 group-hover:text-indigo-400">
        {social.short}
      </span>

      <span>{social.label}</span>
    </a>
  ))}
</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-600">
            © {currentYear} Himanshu. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span className="hidden text-xs text-slate-600 sm:block">
              Built with Next.js & React
            </span>

            <button
              onClick={scrollToTop}
              data-cursor="hover"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all hover:border-indigo-400/30 hover:text-indigo-400"
            >
              <MoveUp
                size={15}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}