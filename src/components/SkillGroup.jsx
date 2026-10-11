import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { levels } from "../data/skills";

export default function SkillGroup({ group, index }) {
  const [open, setOpen] = useState(false);
  const Icon = group.icon;
  const panelId = `skill-${group.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      className="card flex flex-col p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold">{group.title}</h3>
      </div>

      <ul className="space-y-2.5">
        {group.items.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-3 text-sm">
            <span className="text-slate-200">{s.name}</span>
            <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
              <span className={`h-2 w-2 rounded-full ${levels[s.level]}`} aria-hidden="true" />
              {s.level}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex min-h-[44px] items-center gap-1 self-start text-sm text-accent hover:text-white"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div id={panelId} hidden={!open} className="text-sm leading-relaxed text-muted">{group.detail}</div>
    </motion.article>
  );
}
