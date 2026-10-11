import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line" aria-labelledby="exp-title">
      <div className="container-x">
        <SectionHeading id="exp-title" title="Experience & education" intro="Education, practical experience and personal projects, kept separate." />
        <ol className="relative max-w-3xl space-y-8 border-l border-line pl-8">
          {timeline.map(({ id, icon: Icon, type, title, place, period, points }, i) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-accent">
                <Icon size={16} aria-hidden="true" />
              </span>
              <div className="card p-6">
                <p className="text-xs text-gold">{type}</p>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted">{place}{period ? ` · ${period}` : ""}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
