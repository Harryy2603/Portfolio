import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full-stack engineer specializing in React, Node.js, and cloud deployment. 
            Passionate about building scalable, high-performance applications with seamless 
            UI/UX and intelligent backend systems. I love turning complex problems into 
            elegant, user-friendly solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
