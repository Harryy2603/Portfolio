import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingTerminal from "./FloatingTerminal";

const roles = [
  "Full-Stack Engineer",
  "Frontend Developer",
  "Backend Architect",
  "Cloud Builder",
  "AI Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Counter animation
  useEffect(() => {
    const controls = animate(count, 3, { duration: 2, delay: 1 });
    return controls.stop;
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </motion.div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 gradient-text leading-tight">
                Harry Joshi
              </h1>

              <div className="h-8 mb-6">
                <span className="font-mono text-lg md:text-xl text-primary">
                  {">"} {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
                  />
                </span>
              </div>

              <p className="max-w-xl text-base md:text-lg text-muted-foreground mb-8 text-balance leading-relaxed mx-auto lg:mx-0">
                Building scalable, AI-driven web applications with clean UI &amp; powerful backend systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group relative px-7 py-3 rounded-lg font-medium text-primary-foreground text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-secondary/50 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-medium glass hover:bg-card/80 transition-all text-sm text-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:border-primary/30"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/Harryy2603", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/harry-joshi-807a6b268/", label: "LinkedIn" },
                { icon: FileText, href: "/resume.pdf", label: "Resume", download: true },
              ].map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Resume" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  download={label === "Resume"}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="p-3 rounded-xl glass-subtle hover:bg-card/50 transition-colors text-muted-foreground hover:text-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-10"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "40%", label: "Usability Boost" },
                { value: "35%", label: "Accuracy Gain" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Terminal */}
          <motion.div
            className="flex-shrink-0 hidden md:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FloatingTerminal />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
