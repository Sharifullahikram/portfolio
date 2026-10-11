import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ProjectVisual } from "./ProjectCard";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  const Block = ({ title, children }) => (
    <div className="mt-6">
      <h4 className="font-display text-sm font-semibold text-white">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="card max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-b-none sm:rounded-b-2xl"
      >
        <div className="relative">
          <ProjectVisual project={project} large />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="btn absolute right-3 top-3 !min-h-[40px] !px-3"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-line px-2.5 py-1 text-muted">{project.category}</span>
            <span className="rounded-full border border-gold/40 px-2.5 py-1 text-gold">{project.status}</span>
          </div>
          <h3 id="project-modal-title" className="mt-3 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-muted">{project.summary}</p>

          {project.problem && <Block title="The problem">{project.problem}</Block>}
          {project.contribution && <Block title="My contribution">{project.contribution}</Block>}
          {project.features?.length > 0 && (
            <Block title="Key features">
              <ul className="list-disc space-y-1 pl-5">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Block>
          )}
          {project.stack?.length > 0 && (
            <Block title="Technologies">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-md bg-ink px-2 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </Block>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary">
                <GithubIcon size={16} /> View code on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn">
                <ExternalLink size={16} aria-hidden="true" /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
