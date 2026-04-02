import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "const developer = {", color: "text-primary" },
  { text: '  name: "Harry Joshi",', color: "text-secondary" },
  { text: '  role: "Full-Stack Engineer",', color: "text-secondary" },
  { text: "  skills: [", color: "text-primary" },
  { text: '    "React", "Node.js", "TypeScript"', color: "text-accent" },
  { text: "  ],", color: "text-primary" },
  { text: '  passion: "Building the future"', color: "text-secondary" },
  { text: "};", color: "text-primary" },
];

const FloatingTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="glass rounded-xl overflow-hidden max-w-md w-full border border-border/50"
      style={{ perspective: "1000px" }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-destructive/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">developer.ts</span>
      </div>

      {/* Code */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={line.color}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < codeLines.length && (
          <span className={`inline-block w-2 h-4 bg-primary ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
        )}
      </div>
    </motion.div>
  );
};

export default FloatingTerminal;
