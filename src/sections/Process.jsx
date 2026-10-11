import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { process } from "../data/experience";

export default function Process() {
  return (
    <section id="process" className="section border-t border-line" aria-labelledby="process-title">
      <div className="container-x">
        <SectionHeading id="process-title" title="How I build software" intro="The steps I follow on every project, from first idea to release." />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="card p-6"
            >
              <span className="font-display text-sm font-semibold text-gold">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
