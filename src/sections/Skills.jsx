import SectionHeading from "../components/SectionHeading";
import SkillGroup from "../components/SkillGroup";
import { skillGroups, levels } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          title="Technical skills"
          intro="Grouped by what I use them for, with an honest view of how comfortable I am with each."
        />
        <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Skill level legend">
          {Object.entries(levels).map(([name, dot]) => (
            <li key={name} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" /> {name}
            </li>
          ))}
        </ul>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => <SkillGroup key={g.id} group={g} index={i} />)}
        </div>
      </div>
    </section>
  );
}
