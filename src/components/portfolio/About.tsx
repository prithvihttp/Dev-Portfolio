import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Brain, Server, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Server, title: "Backend Mastery", text: "Java, Spring Boot, Microservices, Kafka, REST APIs" },
  { icon: Brain, title: "System Design", text: "Distributed systems, scalability, event-driven architecture" },
  { icon: Sparkles, title: "AI Integration", text: "RAG pipelines, vector search, OpenAI APIs" },
  { icon: Zap, title: "Performance", text: "Optimized latency by 35%, search by 40%, indexing by 70%" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Passionate about scalable systems"
          description="I am a passionate Software Engineer with experience in Java, Spring Boot, Microservices, REST APIs, SQL, React, and System Design. I enjoy building scalable applications, solving complex problems, and continuously learning modern technologies."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-accent-cyan/30 text-brand-glow">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}