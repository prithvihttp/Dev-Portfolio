import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import heroImage from "../../assets/hero-illustration.png";
import resumeFile from "../../assets/Gaurav_resume.pdf";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            Open to opportunities
            <span className="mx-1 h-3 w-px bg-border" />
            <MapPin className="h-3 w-3" /> Bangalore, India
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block">GAURAV</span>
            <span className="block gradient-text">KUMAR</span>
          </h1>

          <div className="mt-4 h-8 font-mono text-base text-muted-foreground md:text-lg">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Java Backend Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Microservices Architect",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Building scalable backend systems, cloud-native applications, and modern web
            solutions with Java, Spring Boot, Kafka, AWS, and React.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] glow"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={resumeFile}
              download="Gaurav_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-secondary/60"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary/40"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/Gaurav012221842" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/gaurav94" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="mailto:gaurav94174@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-accent-cyan/30 blur-2xl" />
          <div className="relative animate-float">
            <div className="overflow-hidden rounded-3xl glass p-2 shadow-elegant">
              <img
                src={heroImage}
                alt="Developer workspace illustration"
                width={1024}
                height={1024}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
