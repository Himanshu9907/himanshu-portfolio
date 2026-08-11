// "use client";

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowRight, Download } from "lucide-react";
// import { useEffect } from "react";

// const techStack = ["Next.js", "React", "JavaScript", "Tailwind", "Node.js"];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const item = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//     filter: "blur(8px)",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Hero() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothX = useSpring(mouseX, {
//     stiffness: 80,
//     damping: 20,
//   });

//   const smoothY = useSpring(mouseY, {
//     stiffness: 80,
//     damping: 20,
//   });

//   const glowX = useTransform(smoothX, [-500, 500], [-80, 80]);
//   const glowY = useTransform(smoothY, [-500, 500], [-80, 80]);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mouseX.set(event.clientX - window.innerWidth / 2);
//       mouseY.set(event.clientY - window.innerHeight / 2);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden pt-24"
//     >
//       {/* Animated background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           style={{
//             x: glowX,
//             y: glowY,
//           }}
//           className="absolute left-[15%] top-[15%] h-80 w-80 rounded-full bg-indigo-600/15 blur-[130px]"
//         />

//         <motion.div
//           style={{
//             x: useTransform(glowX, (value) => -value),
//             y: useTransform(glowY, (value) => -value),
//           }}
//           className="absolute right-[10%] top-[25%] h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]"
//         />

//         {/* Grid */}
//         <div
//           className="absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
//             backgroundSize: "55px 55px",
//             maskImage:
//               "linear-gradient(to bottom, black, transparent 85%)",
//           }}
//         />

//         {/* Moving light */}
//         <motion.div
//           animate={{
//             x: ["-20%", "120%"],
//             opacity: [0, 0.5, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
//         />
//       </div>

//       <div className="relative mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">

//         {/* LEFT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="relative z-10"
//         >
//           <motion.div
//             variants={item}
//             className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
//           >
//             <motion.span
//               animate={{ rotate: [0, 18, -8, 0] }}
//               transition={{
//                 duration: 1.8,
//                 repeat: Infinity,
//                 repeatDelay: 3,
//               }}
//             >
//               👋
//             </motion.span>

//             Hi, I'm Himanshu
//           </motion.div>

//           <motion.h1
//             variants={item}
//             className="max-w-3xl text-[3.6rem] font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[4.7rem] xl:text-[5.1rem]"
//           >
//             I build modern{" "}
//             <span className="relative">
//               <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
//                 web experiences
//               </span>

//               <motion.span
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{
//                   delay: 1.2,
//                   duration: 0.8,
//                   ease: "easeOut",
//                 }}
//                 className="absolute -bottom-1 left-0 h-1 origin-left w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60"
//               />
//             </span>{" "}
//             that make an impact.
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
//           >
//             I'm a Full Stack / Next.js Developer who loves creating fast,
//             responsive and SEO-friendly websites and web apps.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="mt-8 flex flex-wrap gap-4"
//           >
//             <a
//               href="#projects"
//               className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
//             >
//               View My Work

//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>

//             <a
//               href="/resume.pdf"
//               className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05]"
//             >
//               Download Resume
//               <Download size={17} />
//             </a>
//           </motion.div>

//           <motion.div variants={item} className="mt-10">
//             <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
//               Tech Stack
//             </p>

//             <div className="flex flex-wrap gap-2.5">
//               {techStack.map((tech, index) => (
//                 <motion.div
//                   key={tech}
//                   whileHover={{
//                     y: -4,
//                     scale: 1.04,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 20,
//                   }}
//                   className="cursor-default rounded-lg border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs text-slate-300"
//                 >
//                   {tech}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT VISUAL */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 60,
//             scale: 0.92,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.35,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="relative mx-auto w-full max-w-[560px]"
//         >
//           {/* Glow */}
//           <motion.div
//             animate={{
//               scale: [1, 1.12, 1],
//               opacity: [0.18, 0.28, 0.18],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute inset-10 rounded-full bg-indigo-600/20 blur-[100px]"
//           />

//           {/* Card */}
//           <motion.div
//             whileHover={{
//               rotateX: 2,
//               rotateY: -2,
//               scale: 1.015,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 150,
//               damping: 20,
//             }}
//             className="relative aspect-square overflow-hidden rounded-[30px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.08] via-slate-950/90 to-blue-500/[0.06] shadow-2xl shadow-indigo-950/40"
//           >
//             {/* Grid */}
//             <div
//               className="absolute inset-0 opacity-[0.06]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
//                 backgroundSize: "45px 45px",
//               }}
//             />

//             {/* Orbit rings */}
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10"
//             />

//             <motion.div
//               animate={{ rotate: -360 }}
//               transition={{
//                 duration: 18,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 border-dashed"
//             />

//             {/* Center */}
//             <motion.div
//               animate={{
//                 y: [0, -8, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/[0.07] shadow-[0_0_100px_rgba(99,102,241,0.12)]"
//             >
//               <div className="text-7xl">👨‍💻</div>
//             </motion.div>

//             {/* Next */}
//             <FloatingBadge
//               className="left-6 top-7"
//               icon="N"
//               text="Next.js"
//               delay={0}
//             />

//             {/* React */}
//             <FloatingBadge
//               className="right-6 top-24"
//               icon="⚛"
//               text="React"
//               delay={0.5}
//             />

//             {/* Tailwind */}
//             <FloatingBadge
//               className="bottom-7 left-6"
//               icon="≋"
//               text="Tailwind CSS"
//               delay={1}
//             />

//             {/* JS */}
//             <FloatingBadge
//               className="bottom-7 right-6"
//               icon="JS"
//               text="JavaScript"
//               delay={1.5}
//             />

//             {/* Orbit dot */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
//             >
//               <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.9)]" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Stats */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8"
//       >
//         <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
//           <Stat icon="🚀" value="10+" label="Projects Completed" />
//           <Stat icon="😊" value="5+" label="Happy Clients" />
//           <Stat icon="</>" value="20K+" label="Lines of Code" />
//           <Stat icon="⚡" value="95+" label="Performance" />
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// function FloatingBadge({ className, icon, text, delay }) {
//   return (
//     <motion.div
//       animate={{
//         y: [0, -7, 0],
//       }}
//       transition={{
//         duration: 4,
//         delay,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className={`absolute z-10 rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-slate-200 shadow-xl backdrop-blur-xl ${className}`}
//     >
//       <span className="mr-2 text-indigo-400">{icon}</span>
//       {text}
//     </motion.div>
//   );
// }

// function Stat({ icon, value, label }) {
//   return (
//     <motion.div
//       whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
//       className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0 sm:border-r lg:border-b-0"
//     >
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-lg">
//         {icon}
//       </div>

//       <div>
//         <p className="text-xl font-bold text-white">{value}</p>
//         <p className="mt-1 text-xs text-slate-500">{label}</p>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 sm:pt-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-[-15%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute right-[-15%] top-[35%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] sm:h-96 sm:w-96" />

      {/* Main container */}
      <div className="relative mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8">

        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300 sm:mb-7 sm:px-4 sm:py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for freelance work
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-400 sm:text-base"
          >
            <span>👋</span>
            Hi, I'm Himanshu
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-3xl text-[2.65rem] font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.7rem] xl:text-[5.1rem]"
          >
            I build modern
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              web experiences
            </span>

            <br />

            that make an impact.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:mt-7 sm:text-lg sm:leading-7"
          >
            Full Stack / Next.js Developer creating fast, responsive
            and visually engaging digital products with modern
            technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#projects"
              data-cursor="open"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500 sm:w-auto"
            >
              View My Work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              data-cursor="open"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05] sm:w-auto"
            >
              <Download size={16} />

              Download Resume
            </a>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 sm:mt-12"
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600 sm:text-xs">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-slate-400 transition hover:border-indigo-400/20 hover:text-slate-200 sm:px-4 sm:py-2 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 hidden items-center gap-3 text-xs text-slate-600 transition hover:text-slate-300 sm:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
              <ArrowDown size={13} />
            </span>

            Scroll to explore
          </motion.a>
        </motion.div>

        {/* =========================================================
            RIGHT VISUAL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-2 w-full max-w-[420px] sm:max-w-[500px] lg:mt-0 lg:max-w-[560px]"
        >
          {/* Main visual */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.08] via-slate-950/90 to-blue-500/[0.06] shadow-2xl shadow-indigo-950/40 sm:rounded-[30px]">

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[80px] sm:h-56 sm:w-56" />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10 sm:h-64 sm:w-64"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,.8)]" />
            </motion.div>

            {/* Second orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 sm:h-52 sm:w-52"
            >
              <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,.8)]" />
            </motion.div>

            {/* Center */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/[0.07] shadow-[0_0_100px_rgba(99,102,241,0.12)] sm:h-44 sm:w-44"
            >
              <div className="text-5xl sm:text-7xl">
                👨‍💻
              </div>
            </motion.div>

            {/* Floating badges */}

            <FloatingBadge
              className="left-3 top-4 px-3 py-2 text-xs sm:left-6 sm:top-7 sm:px-4 sm:py-3 sm:text-sm"
              icon="N"
              text="Next.js"
              delay={0}
            />

            <FloatingBadge
              className="right-3 top-16 px-3 py-2 text-xs sm:right-6 sm:top-24 sm:px-4 sm:py-3 sm:text-sm"
              icon="⚛"
              text="React"
              delay={0.5}
            />

            <FloatingBadge
              className="bottom-4 left-3 px-3 py-2 text-xs sm:bottom-7 sm:left-6 sm:px-4 sm:py-3 sm:text-sm"
              icon="≋"
              text="Tailwind CSS"
              delay={1}
            />

            <FloatingBadge
              className="bottom-4 right-3 px-3 py-2 text-xs sm:bottom-7 sm:right-6 sm:px-4 sm:py-3 sm:text-sm"
              icon="JS"
              text="JavaScript"
              delay={1.5}
            />
          </div>

          {/* Small status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-bottom-6 sm:px-5 sm:py-3.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <div className="whitespace-nowrap">
              <p className="text-[11px] font-semibold text-white sm:text-xs">
                Available for projects
              </p>

              <p className="text-[9px] text-slate-500 sm:text-[10px]">
                Let's build something great
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          STATS
      ========================================================= */}
      <div className="relative mx-auto mt-12 max-w-7xl px-5 pb-12 sm:mt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] lg:grid-cols-4"
        >
          <Stat
            icon="🚀"
            value="10+"
            label="Projects Built"
          />

          <Stat
            icon="😊"
            value="5+"
            label="Projects / Ideas"
          />

          <Stat
            icon="</>"
            value="20K+"
            label="Lines of Code"
          />

          <Stat
            icon="⚡"
            value="95+"
            label="Performance Score"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FLOATING BADGE
========================================================= */

function FloatingBadge({
  className,
  icon,
  text,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        scale: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 font-medium text-slate-300 shadow-xl backdrop-blur-xl ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.05] text-[10px] font-bold text-indigo-300 sm:h-8 sm:w-8">
        {icon}
      </span>

      {text}
    </motion.div>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  icon,
  value,
  label,
}) {
  return (
    <div className="flex items-center gap-3 border-b border-r border-white/10 p-4 last:border-b-0 sm:gap-4 sm:p-6 lg:border-b-0 lg:last:border-r-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm sm:h-11 sm:w-11">
        {icon}
      </div>

      <div>
        <p className="text-base font-bold text-white sm:text-lg">
          {value}
        </p>

        <p className="mt-0.5 text-[9px] text-slate-600 sm:text-[10px]">
          {label}
        </p>
      </div>
    </div>
  );
}