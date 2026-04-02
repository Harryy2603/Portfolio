import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, type MouseEvent } from "react";

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
    subtitle: "GenAI-Native API Workspace",
    description: [
      "AI-powered mock API generation with live routing",
      "Simulated responses for rapid prototyping",
      "Developer productivity tool emphasizing innovation & system design",
    ],
    tech: ["React", "Node.js", "GenAI", "REST APIs"],
    github: "#",
    live: "#",
    accent: "from-primary to-secondary",
  },
  {
    title: "Mojo",
    subtitle: "Mood Journal with AI",
    description: [
      "Full-stack journaling app with ML-based recommendations",
      "Improved suggestion accuracy by ~35%",
      "Personalized dashboard with streak tracking",
    ],
    tech: ["React", "Node.js", "MongoDB", "ML"],
    github: "#",
    live: "#",
    accent: "from-secondary to-accent",
  },
  {
    title: "Food Delivery App",
    subtitle: "Full-Stack MERN Platform",
    description: [
      "Secure Stripe payments integration",
      "Role-based authentication system",
      "Admin dashboard with scalable MERN architecture",
    ],
    tech: ["React", "Express", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    accent: "from-accent to-primary",
  },
];

const TiltCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="glass rounded-2xl p-6 flex flex-col relative group cursor-default"
    >
      {/* Animated top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "inset 0 0 60px hsl(var(--primary) / 0.05), 0 0 40px hsl(var(--primary) / 0.08)" }}
      />

      <div className="flex items-start justify-between mb-1">
        <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono"
        >
          0{index + 1}
        </motion.span>
      </div>
      <p className="text-sm text-primary mb-4 font-medium">{project.subtitle}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {project.description.map((d, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1">▹</span> {d}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium hover:text-foreground hover:bg-muted/80 transition-colors">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground">
            <Github size={16} />
          </motion.a>
        )}
        {project.live && (
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`} className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground">
            <ExternalLink size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          More projects:{" "}
          <motion.span
            whileHover={{ color: "hsl(var(--primary))" }}
            className="text-foreground font-medium cursor-default"
          >
            Jarvis AI Desktop Assistant
          </motion.span>{" "}
          — voice-controlled productivity tool built with Python
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
