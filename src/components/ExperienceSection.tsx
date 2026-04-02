import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="absolute left-[17px] top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            />

            <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-[0_0_40px_hsl(var(--primary)/0.08)] transition-shadow duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">Frontend Developer Intern</h3>
                    <p className="text-primary text-sm font-medium">Growthzi</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>Recent</span>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Improved platform usability by 40% through UI/UX enhancements",
                  "Built dynamic, data-driven dashboards for real-time analytics",
                  "Integrated REST APIs for seamless frontend-backend communication",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-primary mt-0.5">▹</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
