import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";
const testimonials = [
    {
        quote: "Gaurav is an exceptional backend engineer. His grasp of distributed systems and ability to ship reliable services is impressive.",
        name: "Engineering Lead",
        role: "Infineon Technologies",
    },
    {
        quote: "A rare combination of strong fundamentals, pragmatic delivery, and curiosity. He raised the bar of our service quality.",
        name: "Senior Architect",
        role: "Enterprise Platform Team",
    },
    {
        quote: "Whether it's Spring Boot internals, Kafka pipelines, or AWS infra — Gaurav consistently delivers thoughtful, scalable solutions.",
        name: "Tech Mentor",
        role: "Open Source Collaborator",
    },
];
export function Testimonials() {
    return (<section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What people say" description="Voices from teammates, mentors, and collaborators."/>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (<motion.figure key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="relative rounded-2xl glass p-6">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-brand/30"/>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>))}
        </div>
      </div>
    </section>);
}
