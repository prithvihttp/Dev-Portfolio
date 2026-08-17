import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import pmImg from "../../assets/projects/project-management.png";
import cryptoImg from "../../assets/projects/barista.png";
import urlShortenerImg from "../../assets/projects/urlshortner.png";

const projects = [
  {
    title: "AI-Powered Project Management Tool",
    description:
      "Jira-inspired project management platform with workspaces, sprint planning, Kanban boards, real-time collaboration, AI task assistance, and analytics dashboards.",
    tech: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "OpenAI",
      "AWS S3",
      "Docker",
    ],
    image: pmImg,
    github: "https://github.com/prithvihttp/Project-management",
    demo: "https://project-management-beta-rosy.vercel.app/projects",
  },
   {
    title: "URL Shortener",
    description:
      "Full-stack URL shortening service built with Spring Boot and React, using Neon PostgreSQL for persistent storage and Upstash Redis for high-performance caching and fast URL redirection.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Neon PostgreSQL",
      "Upstash Redis",
      "Docker",
    ],
    image: urlShortenerImg,
    github: "https://github.com/prithvihttp/URL-Shortener",
    demo: "https://url-shortner-psi-sooty.vercel.app/",
  },
  {
    title: "Barista",
    description:
      "Developed a full-stack coffee shop ordering platform using Java, Spring Boot, React.js, and REST APIs, enabling online ordering with real-time three-barista order processing and status tracking.",
    tech: [
      "React",
      "Java-Spring Boot",
      "Tailwind CSS",
      "REST APIs",
      "JavaScript",
    ],
    image: cryptoImg,
    github: "https://github.com/prithvihttp/Barista",
    demo: "https://barista-a9rw.vercel.app/cashier",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A glimpse of systems I've designed, built, and shipped."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-black/40 backdrop-blur-md px-2 py-1 text-[10px] font-mono text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:border-cyan-400"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source Code
                  </a>

                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 text-sm font-medium text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
