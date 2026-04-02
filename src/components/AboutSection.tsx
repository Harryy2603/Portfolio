import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Full-stack engineer specializing in React, Node.js, and cloud deployment.
              Passionate about building scalable, high-performance applications with seamless
              UI/UX and intelligent backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love turning complex problems into elegant, user-friendly solutions.
              Currently focused on AI-driven applications and developer tooling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: "React / TypeScript", value: 92 },
              { label: "Node.js / Express", value: 85 },
              { label: "Cloud / DevOps", value: 75 },
              { label: "AI / ML Integration", value: 70 },
            ].map((skill, i) => (
              <div key={skill.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{skill.label}</span>
                  <span className="text-muted-foreground">{skill.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: "var(--gradient-primary)",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
