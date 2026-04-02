import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Harry Joshi. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/Harryy2603" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/harry-joshi-807a6b268/" },
          { icon: Mail, href: "mailto:harryjoshi2812@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
