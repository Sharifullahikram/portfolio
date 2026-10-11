import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { categories, projects } from "../data/projects";
import { site } from "../config";
import { GithubIcon } from "../components/Icons";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section border-t border-line" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          title="Featured projects"
          intro="Real work from my GitHub. Open any project to see the code."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`min-h-[44px] rounded-full border px-4 text-sm transition ${
                filter === c ? "border-accent bg-accent text-ink" : "border-line text-muted hover:border-accent hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="card p-8 text-center text-muted">No projects in this category yet.</p>
        ) : (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="mt-10">
          <a href={`${site.github}?tab=repositories`} target="_blank" rel="noreferrer" className="btn">
            <GithubIcon size={16} /> See all repositories on GitHub
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
