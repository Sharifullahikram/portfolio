import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectVisual({ project, large = false }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className={`w-full object-cover ${large ? "h-56 sm:h-72" : "h-44"}`}
      />
    );
  }
  const initials = project.title.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#16203a] via-ink-soft to-ink ${large ? "h-56 sm:h-72" : "h-44"}`}
      role="img"
      aria-label={`${project.title} project illustration`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#202942_1px,transparent_1px),linear-gradient(90deg,#202942_1px,transparent_1px)] [background-size:28px_28px]" />
      <span className="relative font-display text-5xl font-bold text-accent/80">{initials}</span>
      <Folder size={18} className="absolute bottom-4 right-4 text-gold/70" aria-hidden="true" />
    </div>
  );
}

export default function ProjectCard({ project, onOpen }) {
  const featured = project.featured;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`card group flex flex-col overflow-hidden transition hover:border-accent/60 ${
        featured ? "md:col-span-2 lg:col-span-2 border-gold/40" : ""
      }`}
    >
      <ProjectVisual project={project} large={featured} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-line px-2.5 py-1 text-muted">{project.category}</span>
          <span className="rounded-full border border-gold/40 px-2.5 py-1 text-gold">{project.status}</span>
        </div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.stack?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((t) => (
              <li key={t} className="rounded-md bg-ink px-2 py-1 text-xs text-slate-300">{t}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={() => onOpen(project)} className="btn btn-primary" aria-haspopup="dialog">
            View Details <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn" aria-label={`${project.title} on GitHub`}>
              <GithubIcon size={16} /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn" aria-label={`${project.title} live demo`}>
              <ExternalLink size={16} aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
