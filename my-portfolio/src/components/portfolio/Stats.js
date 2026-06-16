import { motion } from "framer-motion";
import { FolderGit2, GraduationCap, Github as GithubIcon, Calendar } from "lucide-react";
const stats = [
    { icon: FolderGit2, value: "15+", label: "Projects Completed" },
    { icon: GraduationCap, value: "25+", label: "Technologies Learned" },
    { icon: GithubIcon, value: "30+", label: "GitHub Repositories" },
    { icon: Calendar, value: "1", label: "Year of Experience" },
];
export function Stats() {
    return (<section className="relative -mt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl glass p-8 md:p-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-accent-cyan/30">
                  <s.icon className="h-5 w-5 text-brand-glow"/>
                </div>
                <div className="font-display text-3xl font-bold gradient-text md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
              </motion.div>))}
          </div>
        </div>
      </div>
    </section>);
}
