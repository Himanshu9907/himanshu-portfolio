// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   ExternalLink,
//   Sparkles,
// } from "lucide-react";
// import { projects } from "@/data/projects";

// export default function FeaturedProjects() {
//   const featuredProjects = projects.filter(
//     (project) => project.featured
//   );

//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden py-28"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
//         >
//           <div>
//             <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
//               <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
//               Featured Projects
//             </div>

//             <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
//               Some Things I've Built
//             </h2>

//             <p className="mt-4 max-w-xl text-slate-400">
//               A selection of projects where design, engineering and
//               problem-solving come together.
//             </p>
//           </div>

//           <a
//             href="/projects"
//             className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
//           >
//             View all projects
//             <ArrowUpRight
//               size={17}
//               className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </motion.div>

//         {/* Projects */}
//         <div className="grid gap-6 lg:grid-cols-3">
//           {featuredProjects.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project, index }) {
//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         y: 60,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.12,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{
//         y: -8,
//       }}
//       className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 hover:border-indigo-500/30"
//     >
//       {/* Glow */}
//       <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100">
//         <div className="h-full w-full bg-indigo-600/10" />
//       </div>

//       {/* Preview */}
//       <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">

//         {/* Placeholder preview until real screenshots are added */}
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950/40" />

//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="h-full w-full"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
//               backgroundSize: "35px 35px",
//             }}
//           />
//         </div>

//         {/* Mock browser */}
//         <motion.div
//           className="absolute inset-x-7 top-8 bottom-0 overflow-hidden rounded-t-xl border border-white/10 bg-slate-950 shadow-2xl"
//           whileHover={{
//             scale: 1.04,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//         >
//           <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-3">
//             <span className="h-2 w-2 rounded-full bg-white/20" />
//             <span className="h-2 w-2 rounded-full bg-white/20" />
//             <span className="h-2 w-2 rounded-full bg-white/20" />
//           </div>

//           <div className="flex h-full items-center justify-center">
//             <div className="text-center">
//               <Sparkles className="mx-auto mb-3 text-indigo-400" size={28} />

//               <p className="text-lg font-bold text-white">
//                 {project.title}
//               </p>

//               <p className="mt-1 text-xs text-slate-500">
//                 {project.category}
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Featured badge */}
//         <div className="absolute right-4 top-4 rounded-full border border-indigo-400/20 bg-indigo-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
//           Featured
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative p-6">

//         <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
//           {project.category}
//         </p>

//         <h3 className="text-xl font-bold text-white">
//           {project.title}
//         </h3>

//         <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
//           {project.description}
//         </p>

//         {/* Technologies */}
//         <div className="mt-5 flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-400"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Links */}
//         <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white"
//           >
//             Live Demo

//             <ExternalLink
//               size={15}
//               className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
//             />
//           </a>


//           <a
//   href={project.githubUrl}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition hover:border-white/20 hover:text-white"
//   aria-label={`${project.title} GitHub`}
// >
//   <span className="text-xs font-bold">GH</span>
// </a>
//         </div>
//       </div>
//     </motion.article>
//   );
// }


"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
              Featured Projects
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Some Things I've Built
            </h2>

            <p className="mt-4 max-w-xl text-slate-400">
              A selection of projects where design, engineering and
              problem-solving come together.
            </p>
          </div>

          <a
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            View all projects

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors duration-500 hover:border-indigo-500/30"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100">
        <div className="h-full w-full bg-indigo-600/10" />
      </div>

      {/* Project Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">

        {/* Actual Screenshot */}
        <motion.img
          src={project.image}
          alt={`${project.title} website preview`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          whileHover={{
            scale: 1.045,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10 opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

        {/* Top shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />

        {/* Featured badge */}
        <div className="absolute right-4 top-4 rounded-full border border-indigo-400/20 bg-indigo-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
          Featured
        </div>

        {/* View project overlay */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100"
          aria-label={`Open ${project.title}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-transform duration-500 group-hover:scale-100 scale-90">
            View Project
            <ArrowUpRight size={16} />
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="relative p-6">

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-400 transition-colors hover:border-indigo-400/20 hover:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

          {/* Live Demo */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300"
          >
            Live Demo

            <ExternalLink
              size={15}
              className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>

          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-3 py-2 text-slate-400 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            aria-label={`${project.title} GitHub`}
          >
            <span className="text-xs font-bold">
              GH
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}