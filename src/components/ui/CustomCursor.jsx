"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest(
        "a, button, [data-cursor]"
      );

      if (!target) {
        setCursorType("default");
        return;
      }

      setCursorType(
        target.getAttribute("data-cursor") || "hover"
      );
    };

    const handlePointerOut = (event) => {
      const relatedTarget = event.relatedTarget;

      if (
        relatedTarget &&
        relatedTarget.closest?.("a, button, [data-cursor]")
      ) {
        return;
      }

      setCursorType("default");
    };

    const handleMouseDown = () => {
      setCursorType("click");
    };

    const handleMouseUp = () => {
      setCursorType("default");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) return null;

  const isHover = cursorType !== "default";

  const label =
    cursorType === "click"
      ? ""
      : cursorType === "view"
        ? "VIEW"
        : cursorType === "open"
          ? "OPEN"
          : "";

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border border-indigo-400/60"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            cursorType === "click"
              ? 22
              : isHover
                ? 72
                : 38,

          height:
            cursorType === "click"
              ? 22
              : isHover
                ? 72
                : 38,

          backgroundColor:
            isHover
              ? "rgba(99,102,241,0.10)"
              : "rgba(99,102,241,0)",

          borderColor:
            isHover
              ? "rgba(129,140,248,0.85)"
              : "rgba(129,140,248,0.55)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[9px] font-bold tracking-[0.18em] text-indigo-200"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-1.5 w-1.5 rounded-full bg-indigo-300"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale:
            cursorType === "click"
              ? 0.5
              : isHover
                ? 0
                : 1,
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  );
}


// "use client";

// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [enabled, setEnabled] = useState(false);
//   const [mode, setMode] = useState("default");
//   const [clicking, setClicking] = useState(false);

//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

//   const ringX = useSpring(mouseX, {
//     stiffness: 420,
//     damping: 32,
//     mass: 0.45,
//   });

//   const ringY = useSpring(mouseY, {
//     stiffness: 420,
//     damping: 32,
//     mass: 0.45,
//   });

//   // Slightly slower trail
//   const trailX = useSpring(mouseX, {
//     stiffness: 120,
//     damping: 22,
//     mass: 0.7,
//   });

//   const trailY = useSpring(mouseY, {
//     stiffness: 120,
//     damping: 22,
//     mass: 0.7,
//   });

//   const rotateX = useTransform(
//     ringY,
//     [-500, 500],
//     [4, -4]
//   );

//   const rotateY = useTransform(
//     ringX,
//     [-500, 500],
//     [-4, 4]
//   );

//   useEffect(() => {
//     const media = window.matchMedia(
//       "(pointer: fine) and (min-width: 768px)"
//     );

//     const update = () => {
//       setEnabled(media.matches);
//     };

//     update();

//     media.addEventListener("change", update);

//     return () => {
//       media.removeEventListener("change", update);
//     };
//   }, []);

//   useEffect(() => {
//     if (!enabled) return;

//     const move = (event) => {
//       mouseX.set(event.clientX);
//       mouseY.set(event.clientY);
//     };

//     const pointerOver = (event) => {
//       const target = event.target.closest(
//         "a, button, [data-cursor]"
//       );

//       if (!target) {
//         setMode("default");
//         return;
//       }

//       const customMode =
//         target.getAttribute("data-cursor");

//       setMode(customMode || "hover");
//     };

//     const pointerOut = (event) => {
//       const next = event.relatedTarget;

//       if (
//         next &&
//         next.closest?.("a, button, [data-cursor]")
//       ) {
//         return;
//       }

//       setMode("default");
//     };

//     const mouseDown = () => {
//       setClicking(true);
//     };

//     const mouseUp = () => {
//       setClicking(false);
//     };

//     window.addEventListener("mousemove", move);
//     document.addEventListener("mouseover", pointerOver);
//     document.addEventListener("mouseout", pointerOut);
//     window.addEventListener("mousedown", mouseDown);
//     window.addEventListener("mouseup", mouseUp);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       document.removeEventListener("mouseover", pointerOver);
//       document.removeEventListener("mouseout", pointerOut);
//       window.removeEventListener("mousedown", mouseDown);
//       window.removeEventListener("mouseup", mouseUp);
//     };
//   }, [enabled, mouseX, mouseY]);

//   if (!enabled) return null;

//   const interactive = mode !== "default";

//   const label =
//     mode === "view"
//       ? "VIEW"
//       : mode === "open"
//         ? "OPEN"
//         : "";

//   return (
//     <>
//       {/* --------------------------------
//           TRAILING GLOW
//       -------------------------------- */}
//       <motion.div
//         className="pointer-events-none fixed left-0 top-0 z-[9996] rounded-full"
//         style={{
//           x: trailX,
//           y: trailY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         animate={{
//           width: interactive ? 90 : 55,
//           height: interactive ? 90 : 55,
//           opacity: interactive ? 0.16 : 0.08,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 180,
//           damping: 25,
//         }}
//       >
//         <div className="h-full w-full rounded-full bg-indigo-500 blur-2xl" />
//       </motion.div>

//       {/* --------------------------------
//           OUTER RING
//       -------------------------------- */}
//       <motion.div
//         className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full"
//         style={{
//           x: ringX,
//           y: ringY,
//           translateX: "-50%",
//           translateY: "-50%",
//           rotateX,
//           rotateY,
//         }}
//         animate={{
//           width: clicking
//             ? 25
//             : interactive
//               ? 76
//               : 40,

//           height: clicking
//             ? 25
//             : interactive
//               ? 76
//               : 40,

//           borderWidth: clicking
//             ? 1
//             : interactive
//               ? 1.5
//               : 1,

//           borderColor: clicking
//             ? "rgba(129,140,248,0.95)"
//             : interactive
//               ? "rgba(129,140,248,0.85)"
//               : "rgba(129,140,248,0.45)",

//           backgroundColor: interactive
//             ? "rgba(99,102,241,0.08)"
//             : "rgba(99,102,241,0)",
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 380,
//           damping: 24,
//         }}
//       >
//         {/* Label */}
//         {label && (
//           <motion.span
//             initial={{
//               opacity: 0,
//               scale: 0.5,
//               letterSpacing: "0.4em",
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               letterSpacing: "0.18em",
//             }}
//             className="text-[9px] font-bold text-indigo-100"
//           >
//             {label}
//           </motion.span>
//         )}
//       </motion.div>

//       {/* --------------------------------
//           CENTER DOT
//       -------------------------------- */}
//       <motion.div
//         className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full bg-indigo-300"
//         style={{
//           x: mouseX,
//           y: mouseY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         animate={{
//           width: clicking ? 3 : interactive ? 0 : 6,
//           height: clicking ? 3 : interactive ? 0 : 6,
//           boxShadow: clicking
//             ? "0 0 18px rgba(129,140,248,0.9)"
//             : "0 0 10px rgba(129,140,248,0.7)",
//         }}
//         transition={{
//           duration: 0.12,
//         }}
//       />

//       {/* --------------------------------
//           CLICK RIPPLE
//       -------------------------------- */}
//       {clicking && (
//         <motion.div
//           initial={{
//             opacity: 0.6,
//             scale: 0.4,
//           }}
//           animate={{
//             opacity: 0,
//             scale: 1.8,
//           }}
//           transition={{
//             duration: 0.45,
//             ease: "easeOut",
//           }}
//           className="pointer-events-none fixed left-0 top-0 z-[9997] h-10 w-10 rounded-full border border-indigo-400/60"
//           style={{
//             x: mouseX,
//             y: mouseY,
//             translateX: "-50%",
//             translateY: "-50%",
//           }}
//         />
//       )}
//     </>
//      );
// }