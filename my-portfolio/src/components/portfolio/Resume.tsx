import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import resumeFile from "../../assets/Gaurav_resume.pdf";

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-14"
        >
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent-cyan glow">
              <FileText className="h-7 w-7 text-background" />
            </div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Grab my <span className="gradient-text">resume</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:text-base">
              A concise snapshot of my experience, skills, and impact — ready for your hiring funnel.
            </p>
            <a
              href={resumeFile}
              download="Gaurav_Kumar_Resume.pdf"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow"
            >
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}