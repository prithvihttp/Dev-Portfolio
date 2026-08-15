import { motion } from "framer-motion";
export function SectionHeading({ eyebrow, title, description, }) {
    return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-3 inline-flex rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-accent-cyan">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
        {title.split(" ").map((w, i, arr) => i === arr.length - 1 ? (<span key={i} className="gradient-text"> {w}</span>) : (<span key={i}>{i === 0 ? "" : " "}{w}</span>))}
      </h2>
      {description && (<p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>)}
    </motion.div>);
}
