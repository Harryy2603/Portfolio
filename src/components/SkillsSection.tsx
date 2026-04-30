import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const categories: Category[] = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "SQL"],
    color: "from-primary to-secondary",
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Bootstrap", "UI/UX Design"],
    color: "from-primary to-secondary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth"],
    color: "from-secondary to-accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "NoSQL", "Mongoose", "Prisma"],
    color: "from-accent to-primary",
  },
  {
    title: "DevOps and Deployment",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
    color: "from-primary to-accent",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["ML Integration", "AI-Powered Features"],
    color: "from-secondary to-primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[200px] translate-x-1/2" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="p-2.5 rounded-xl bg-primary/10 text-primary"
                  >
                    <cat.icon size={20} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground group-hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
