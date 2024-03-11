import React, { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";

const PageTransition = forwardRef(({ children }, ref) => {
  const variants = useMemo(
    () => ({
      initial: {
        opacity: 0.5,
      },
      animate: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }, // Smooth 0.5s transition
      },
      exit: {
        opacity: 0.5,
        transition: { duration: 0.5, ease: "easeOut" }, // Faster exit (0.3s) with easing out
      },
    }),
    []
  );

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
});

PageTransition.displayName = "PageTransition";

export default PageTransition;
