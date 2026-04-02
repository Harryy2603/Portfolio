import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              {
                icon: Mail,
                label: "harryjoshi2812@gmail.com",
                href: "mailto:harry@example.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/harry-joshi-807a6b268/",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/Harryy2603",
              },
            ].map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 rounded-xl glass-subtle hover:bg-card/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                  {label}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}

            <motion.a
              href="/resume.pdf"
              download="Harry_Joshi_Resume.pdf"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium glass hover:bg-card/80 transition-all text-foreground mt-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              <FileText size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4 relative overflow-hidden"
          >
            {/* Animated border glow on focus */}
            <div
              className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${focused ? "opacity-100" : "opacity-0"}`}
              style={{ boxShadow: "inset 0 0 40px hsl(var(--primary) / 0.05)" }}
            />

            {["name", "email", "message"].map((field) => {
              const isTextarea = field === "message";
              const Component = isTextarea ? "textarea" : "input";
              return (
                <div key={field} className="relative">
                  <Component
                    type={field === "email" ? "email" : "text"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                    maxLength={
                      field === "message" ? 1000 : field === "email" ? 255 : 100
                    }
                    {...(isTextarea ? { rows: 4 } : {})}
                    value={form[field as keyof typeof form]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 rounded-lg bg-muted border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                      focused === field ? "border-primary/30" : "border-border"
                    } ${isTextarea ? "resize-none" : ""}`}
                  />
                </div>
              );
            })}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-secondary/50 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <Send size={16} /> Send Message
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
