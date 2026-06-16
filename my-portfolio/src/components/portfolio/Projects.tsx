import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import pmImg from "../../assets/projects/project-management.png";
import plmImg from "../../assets/projects/Windchill.png";
import cryptoImg from "../../assets/projects/crypto-tracker.png";

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
    github: "https://github.com/Gaurav012221842/Project-management",
    demo: "https://project-management-gk.vercel.app/login",
  },
  {
    title: "PLM Apps Windchill",
    description:
      "Enterprise AI search platform for Windchill PLM featuring RAG, NLP, vector search, document indexing, caching, observability, and microservices architecture.",
    tech: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "ELK Stack",
      "RAG",
      "Vector Database",
    ],
    image: plmImg,
    github: "https://github.com/Gaurav012221842",
    demo: null,
  },
  {
    title: "CryptoTracker",
    description:
      "Cryptocurrency analytics dashboard with real-time market data, interactive charts, filtering, ranking, and multi-currency support.",
    tech: [
      "React",
      "Chart.js",
      "Tailwind CSS",
      "REST APIs",
      "JavaScript",
    ],
    image: cryptoImg,
    github: "https://github.com/Gaurav012221842/CryptoTracker",
    demo: "https://crypto-tracker-two-gray.vercel.app/",
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
