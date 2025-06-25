"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

export function ScrollAnimate({
  children,
  animation = "fadeIn",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = "",
}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  const variants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
