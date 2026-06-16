import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, BookOpen, Trophy } from "lucide-react";

const certs = [
  {
    icon: Award,
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "Jan 2024 – Jul 2024",
    demo: "https://drive.google.com/file/d/1wZdxDou83Gksk4uOPCQhUdvcSYZHoP8L/view?usp=drive_link",
  },
  {
    icon: BookOpen,
    title: "Introduction to Large Language Models",
    issuer: "Coursera",
    date: "Jan 2024 – Jul 2024",
    demo: "https://drive.google.com/file/d/1i28Via0bpPjbvNi0PBaYlyzh40Awn3ec/view?usp=sharing",
  },
  {
    icon: Trophy,
    title: "LeetCode — 800+ Problems Solved",
    issuer: "DSA · DP · Graphs · Trees",
    date: "Ongoing",
    demo: "https://leetcode.com/u/Gaurav_leetcode6203/",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Credentials and achievements that reflect ongoing growth."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent-cyan glow">
                <c.icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-2 font-mono text-xs text-accent-cyan">{c.date}</p>
              {c.demo && (
                <a
                  href={c.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-brand hover:text-accent-cyan"
                >
                  {c.title === "LeetCode — 800+ Problems Solved" ? "View Profile" : "View Certificate"}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}