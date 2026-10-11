import { navLinks, site } from "../config";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
          <p className="mt-4 max-w-xs text-sm text-muted">Thanks for visiting. I'd love to hear about your project or opportunity.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a className="btn !px-3" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
          <a className="btn !px-3" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
        </div>
      </div>
      <p className="container-x mt-10 text-xs text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
