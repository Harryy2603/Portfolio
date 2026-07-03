import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github?: string;
  live?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "API Forge",
    subtitle: "Multi-Tenant SaaS API Generator",
    description: [
      "Multi-tenant SaaS platform that converts natural language into live, callable REST APIs via LLMs - cutting backend mock setup from hours to under 10 seconds",
      "Designed and shipped solo, from data model through production deployment - JWT auth, tenant isolation, rate limiting, and an async BullMQ/Redis pipeline for concurrent request handling, fully containerized with Docker",
      "Built the core natural-language-to-live-API abstraction as a repeatable system rather than a one-off demo, holding up across different inputs and tenants in real usage",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "LLM APIs",
    ],
    github: "https://github.com/Harryy2603/API-Forge",
    live: "https://api-forge-ui.onrender.com",
    accent: "from-primary to-secondary",
  },
  {
    title: "RocketMan AI",
    subtitle: "Adaptive Learner Memory System",
    description: [
      "Owned end-to-end: mapped the workflow, designed the data model, built the agent behavior, then ran it against real conversations and fixed what broke - the build-inspect-fix loop this role runs on",
      "Designed an agent loop that decouples real-time response generation from background evaluation - the AI replies instantly while a separate task extracts structured state (mastery scores, confidence, evidence) via Zod-enforced schemas and writes it to Postgres",
      "Built a persistent memory layer that injects a user's full history into every interaction, so agent behavior compounds and personalizes over time instead of resetting each session",
      "Benchmarked model providers under real latency and rate-limit constraints and switched the production pipeline based on the results - treating model choice as an engineering decision, not a default",
    ],
    tech: [
      "Next.js",
      "Vercel AI SDK",
      "Groq (Llama 3.3 70B)",
      "PostgreSQL",
      "Supabase",
      "Zod",
      "TypeScript",
    ],
    github: "https://github.com/Harryy2603/rocketman-tutor",
    live: "https://rocketman-tutor.vercel.app",
    accent: "from-secondary to-accent",
  },
  {
    title: "J.A.R.V.I.S.",
    subtitle: "Multi-Modal AI Desktop Assistant",
    description: [
      "Tri-Tier Hybrid Architecture routing simple OS commands to a local, offline model for zero-latency execution while complex conversational tasks go to Groq's Llama-3 for heavy lifting",
      "Trained a Bi-Directional LSTM for local intent classification with a 90% confidence gate — anything less confident falls back safely to the cloud LLM tier",
      "Solved a native Windows audio-mixer crash by ripping out pygame for playsound, letting TTS audio play natively and concurrently without locking the audio thread",
      "Fully multithreaded: speech recognition, TTS generation, and the customtkinter UI run on separate daemon threads so the app never freezes mid-response",
    ],
    tech: [
      "Python",
      "TensorFlow/Keras",
      "Groq",
      "LSTM",
      "customtkinter",
      "Speech Recognition",
      "Multithreading",
    ],
    github: "https://github.com/Harryy2603/Jarviss",
    accent: "from-accent to-primary",
  },
];

const moreProjects: Project[] = [
  {
    title: "Mojo",
    subtitle: "Mood Journal with AI",
    description: [
      "Full-stack mood journaling app with ML-based recommendations",
      "Improved suggestion accuracy by ~35%",
      "Personalized dashboard with streak tracking",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Machine Learning",
      "REST APIs",
      "Docker",
      "CI/CD",
      "Cloud Deployment",
    ],
    github: "https://github.com/Harryy2603/MoJo",
    live: "https://mojo-frontend-services.onrender.com",
    accent: "from-primary to-secondary",
  },
  {
    title: "Food Delivery App",
    subtitle: "Full-Stack MERN Platform",
    description: [
      "Secure Stripe payments integration",
      "Role-based authentication system",
      "Admin dashboard with scalable MERN architecture",
    ],
    tech: [
      "React",
      "Express",
      "MongoDB",
      "Node.js",
      "Stripe",
      "JWT",
      "REST APIs",
      "Docker",
      "Cloud Deployment",
    ],
    github: "https://github.com/Harryy2603/foodDelivery",
    live: "https://fooddelivery-frontend-fm4p.onrender.com",
    accent: "from-secondary to-accent",
  },
  {
    title: "AI Prompt Playground",
    subtitle: "LLM Prompt Testing Sandbox",
    description: [
      "Interactive sandbox for writing, running, and comparing prompts across different model configurations side by side",
      "Built with a Next.js app router frontend so iterating on a prompt and inspecting the response is a tight, fast loop",
      "Fully containerized with Docker for consistent, reproducible deployment",
    ],
    tech: ["Next.js", "TypeScript", "Docker", "Tailwind CSS", "LLM APIs"],
    github: "https://github.com/Harryy2603/ai-prompt-playground-app",
    live: "https://ai-playground-ucgm.onrender.com",
    accent: "from-accent to-primary",
  },
];

const TiltCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="glass rounded-2xl p-6 flex flex-col relative group cursor-default"
    >
      {/* Animated top gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity`}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 60px hsl(var(--primary) / 0.05), 0 0 40px hsl(var(--primary) / 0.08)",
        }}
      />

      <div className="flex items-start justify-between mb-1">
        <h3 className="font-display text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + (index % 3) * 0.15, type: "spring" }}
          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono"
        >
          0{index + 1}
        </motion.span>
      </div>
      <p className="text-sm text-primary mb-4 font-medium">
        {project.subtitle}
      </p>
      <ul className="space-y-2 mb-6 flex-1">
        {project.description.map((d, i) => (
          <li
            key={i}
            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
          >
            <span className="text-primary mt-1">▹</span> {d}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub`}
            className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground"
          >
            <Github size={16} />
          </motion.a>
        )}
        {project.live && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Live Demo`}
            className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground"
          >
            <ExternalLink size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -translate-x-1/2" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {moreProjects.map((project, i) => (
                  <TiltCard
                    key={project.title}
                    project={project}
                    index={projects.length + i}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowMore((prev) => !prev)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-subtle text-sm font-medium text-foreground hover:bg-card/60 transition-colors"
          >
            {showMore ? "Show less" : "See more projects"}
            <motion.span
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
