import { motion } from "framer-motion";

const ScrollProgress = () => {
  // Using framer-motion useScroll at component level
  const { scrollYProgress } = require("framer-motion").useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-0.5 z-[60]"
    >
      <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
    </motion.div>
  );
};

export default ScrollProgress;
