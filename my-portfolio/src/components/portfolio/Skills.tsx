import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Cloud, Code, Database, Layers, Wrench } from "lucide-react";

type Skill = { name: string; level: number };

const groups = [
  {
    title: "Backend",
    icon: Layers,
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Spring Security", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 90 },
      { name: "JWT Authentication", level: 90 },
    ],
  },

  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 88 },
      { name: "WebSockets", level: 82 },
      { name: "Chart.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },

  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 90 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "Kotlin", level: 72 },
    ],
  },

  {
    title: "Database & Caching",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 88 },
      { name: "Vector Databases", level: 80 },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 92 },
      { name: "CI/CD", level: 88 },
    ],
  },

  {
    title: "Messaging & Observability",
    icon: Wrench,
    skills: [
      { name: "Apache Kafka", level: 85 },
      { name: "ELK Stack", level: 82 },
      { name: "Observability", level: 80 },
      { name: "Monitoring", level: 82 },
    ],
  },

  {
    title: "AI Engineering",
    icon: Wrench,
    skills: [
      { name: "Generative AI", level: 88 },
      { name: "RAG", level: 85 },
      { name: "NLP", level: 82 },
      { name: "OpenAI APIs", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Vector Search", level: 82 },
    ],
  },

  {
    title: "Computer Science",
    icon: Wrench,
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "System Design", level: 88 },
      { name: "DBMS", level: 90 },
      { name: "Operating Systems", level: 85 },
      { name: "Computer Networks", level: 85 },
      { name: "OOP", level: 92 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & expertise"
          description="A curated set of technologies I use to ship production-grade software."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="rounded-2xl glass p-6 hover:border-brand/30"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand/30 to-accent-cyan/30">
                  <g.icon className="h-5 w-5 text-brand-glow" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-3.5">
                {g.skills.map((s, i) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-brand via-brand-glow to-accent-cyan"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}