import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github?: string;
  live?: string;
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
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 flex flex-col gradient-border group"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-primary mb-4 font-medium">{project.subtitle}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {project.description.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                    • {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground">
                    <Github size={16} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`} className="p-2 rounded-lg glass-subtle hover:bg-card/60 transition-colors text-muted-foreground hover:text-foreground">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra mention */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          More projects: <span className="text-foreground font-medium">Jarvis AI Desktop Assistant</span> — voice-controlled productivity tool built with Python
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
