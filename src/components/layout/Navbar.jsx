"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavigation = (href) => {
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-[100]"
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-5xl px-4 pt-3"
              : "max-w-7xl px-6 pt-5 lg:px-8"
          }`}
        >
          <div
            className={`flex items-center justify-between border transition-all duration-500 ${
              scrolled
                ? "rounded-full border-white/10 bg-slate-950/75 px-4 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-xl"
                : "border-transparent bg-transparent px-0 py-1"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNavigation("#home")}
              data-cursor="hover"
              className="group relative flex items-center"
            >
              <span className="text-xl font-black tracking-tight text-white">
                H
              </span>

              <span className="text-xl font-black text-indigo-400">
                .
              </span>

              <span className="ml-2 hidden text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-300 sm:block">
                Himanshu
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = active === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    data-cursor="hover"
                    className="relative rounded-full px-4 py-2 text-xs font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full bg-white/[0.06]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              data-cursor="open"
              onClick={(event) => {
                event.preventDefault();
                handleNavigation("#contact");
              }}
              className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white transition hover:border-indigo-400/30 hover:bg-indigo-500/10 md:flex"
            >
              Let's Talk

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen((value) => !value)}
              data-cursor="hover"
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 md:hidden"
            >
              {mobileOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[90] bg-slate-950/95 px-6 pt-28 backdrop-blur-2xl md:hidden"
          >
            <nav className="mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-3">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");

                  return (
                    <motion.button
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      onClick={() =>
                        handleNavigation(item.href)
                      }
                      className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition ${
                        active === sectionId
                          ? "bg-indigo-500/10 text-white"
                          : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      <span className="text-lg font-semibold">
                        {item.label}
                      </span>

                      <ArrowUpRight size={18} />
                    </motion.button>
                  );
                })}
              </div>

              <motion.a
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation("#contact");
                }}
                data-cursor="open"
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-slate-950"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}