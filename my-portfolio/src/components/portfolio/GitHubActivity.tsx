import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Github } from "lucide-react";

function generateGrid() {
  const weeks = 26;
  const days = 7;
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = Math.random();
      let level = 0;
      if (r > 0.4) level = 1;
      if (r > 0.6) level = 2;
      if (r > 0.78) level = 3;
      if (r > 0.92) level = 4;
      col.push(level);
    }
    grid.push(col);
  }
  return grid;
}

const intensity = [
  "bg-secondary/40",
  "bg-brand/25",
  "bg-brand/50",
  "bg-brand/75",
  "bg-gradient-to-br from-brand to-accent-cyan",
];

export function GitHubActivity() {
  const grid = generateGrid();
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Consistent contribution"
          description="Shipping code and learning in public."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl glass p-6 md:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent-cyan">
                <Github className="h-5 w-5 text-background" />
              </span>
              <div>
                <div className="font-display text-base font-semibold">@Gaurav012221842</div>
                <div className="text-xs text-muted-foreground">Last 6 months of contributions</div>
              </div>
            </div>
            <a
              href="https://github.com/Gaurav012221842"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass px-3 py-1.5 text-xs hover:bg-secondary/60"
            >
              View Profile →
            </a>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-1">
              {grid.map((col, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {col.map((lvl, d) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: (w * 7 + d) * 0.003 }}
                      className={`h-3 w-3 rounded-[3px] md:h-3.5 md:w-3.5 ${intensity[lvl]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            {intensity.map((c, i) => (
              <span key={i} className={`h-3 w-3 rounded-[3px] ${c}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}