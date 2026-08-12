// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Mail,
//   MessageCircle,
//   Sparkles,
// } from "lucide-react";

// const contactOptions = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "your-email@example.com",
//     href: "mailto:your-email@example.com",
//   },
//   {
//     icon: MessageCircle,
//     label: "Let's Talk",
//     value: "Start a project",
//     href: "mailto:your-email@example.com?subject=Project%20Inquiry",
//   },
// ];

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden py-32"
//     >
//       {/* Ambient background */}
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Main CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/[0.09] via-white/[0.025] to-purple-500/[0.08] px-6 py-20 text-center sm:px-12 lg:px-20"
//         >
//           {/* Decorative circles */}
//           <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/[0.04]" />
//           <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full border border-white/[0.04]" />

//           <motion.div
//             animate={{
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="relative mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400"
//           >
//             <Sparkles size={24} />
//           </motion.div>

//           <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
//             Have a project in mind?
//           </p>

//           <h2 className="relative mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
//             Let's build something
//             <br />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
//               amazing together.
//             </span>
//           </h2>

//           <p className="relative mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
//             Whether you need a modern website, an AI-powered product,
//             or a completely custom web experience, let's turn your idea
//             into something real.
//           </p>

//           {/* CTA */}
//           <motion.a
//             href="mailto:your-email@example.com?subject=Project%20Inquiry"
//             data-cursor="open"
//             whileHover={{
//               scale: 1.03,
//             }}
//             whileTap={{
//               scale: 0.97,
//             }}
//             className="group relative mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-indigo-500/10 transition hover:bg-slate-100"
//           >
//             Start a conversation

//             <ArrowUpRight
//               size={18}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </motion.a>
//         </motion.div>

//         {/* Contact options */}
//         <div className="mt-6 grid gap-4 sm:grid-cols-2">
//           {contactOptions.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 data-cursor="open"
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                 }}
//                 whileHover={{
//                   y: -4,
//                 }}
//                 className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-indigo-400/25 hover:bg-indigo-500/[0.04]"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-colors group-hover:border-indigo-400/20 group-hover:text-indigo-400">
//                     <Icon size={19} />
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-500">
//                       {item.label}
//                     </p>

//                     <p className="mt-1 text-sm font-semibold text-white">
//                       {item.value}
//                     </p>
//                   </div>
//                 </div>

//                 <ArrowUpRight
//                   size={17}
//                   className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
//                 />
//               </motion.a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "himanshu05119@gmail.com",
    href: "mailto:himanshu05119@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Let's Talk",
    value: "Start a project",
    href: "mailto:himanshu05119@gmail.com?subject=Project%20Inquiry",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-400">
            <Sparkles size={24} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Whether you need a modern website, an AI-powered
            product, or a completely custom web experience, let's
            turn your idea into something real.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-indigo-950/20 sm:p-8 lg:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                maxLength={100}
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                maxLength={150}
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you're building..."
                required
                maxLength={5000}
                rows={6}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10"
              />

              <p className="mt-2 text-right text-xs text-slate-600">
                {formData.message.length}/5000
              </p>
            </div>

            {/* Status */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                    : "border-red-400/20 bg-red-400/5 text-red-300"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                )}

                <span>{status.message}</span>
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact options */}
        <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
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