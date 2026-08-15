import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase } from "lucide-react";
const timeline = [
    {
        role: "Software Developer",
        company: "Infineon Technologies",
        location: "Bengaluru",
        period: "July 2025 – May 2026",
        points: [
            "Developed a RAG-powered chatbot for Windchill PLM workflows using Java, Spring Boot, React, Kafka, and ELK — improved semantic search accuracy by 40%.",
            "Orchestrated Kafka-driven indexing pipelines with vector search, improving document discovery by 70% across large datasets.",
            "Optimized backend services through asynchronous processing, indexing strategies, and query tuning, reducing search latency by 35%.",
        ],
        focus: ["Backend Development", "REST APIs", "System Design", "Microservices", "Cloud"],
    },
    {
        role: "Summer Intern",
        company: "Cipher Schools",
        location: "Ludhiana, Punjab",
        period: "June 2024 – August 2024",
        points: [
            "Engineered a high-performance Notes Maker app with React.js using lazy loading and DB optimizations.",
            "Achieved 40% faster load times, 50% improved query efficiency, and 20% boost in user retention.",
        ],
        focus: ["React", "Performance", "Database Optimization"],
    },
];
export function Experience() {
    return (<section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Experience" title="Professional journey" description="Roles where I shipped impact-driven software."/>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-accent-cyan/50 to-transparent md:left-1/2 md:-translate-x-1/2"/>

          {timeline.map((t, i) => (<motion.div key={t.role + i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative mb-10 grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 [direction:ltr]"}`}>
                <div className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-accent-cyan glow md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-4 w-4 text-background"/>
                </div>
                <div className="rounded-2xl glass p-6 [direction:ltr]">
                  <div className="font-mono text-xs uppercase tracking-widest text-accent-cyan">{t.period}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{t.role}</h3>
                  <div className="text-sm text-muted-foreground">
                    {t.company} · {t.location}
                  </div>
                  <ul className="mt-4 space-y-2 text-left text-sm text-muted-foreground">
                    {t.points.map((p, j) => (<li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-glow"/>
                        <span>{p}</span>
                      </li>))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.focus.map((f) => (<span key={f} className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {f}
                      </span>))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block"/>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
