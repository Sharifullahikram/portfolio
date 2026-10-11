import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, MapPin } from "lucide-react";
import { site } from "../config";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-16 pt-28" aria-labelledby="hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to internships, freelance work and junior roles
          </motion.p>

          <motion.h1 variants={item} id="hero-title" className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Building Digital Experiences That Solve Real Problems.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m {site.name}, a Computer Science student and aspiring Full-Stack Developer.
            I build web applications and management systems, focusing on clean frontend work,
            backend fundamentals and well-structured databases.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              Explore My Projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            {site.cvUrl && (
  <>
    <a href={site.cvUrl} target="_blank" rel="noreferrer" className="btn">
      <Eye size={16} aria-hidden="true" /> View CV
    </a>
    <a href={site.cvUrl} download className="btn">
      <Download size={16} aria-hidden="true" /> Download CV
    </a>
  </>
)}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 hover:text-white">
              <GithubIcon /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 hover:text-white">
              <LinkedinIcon /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> {site.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="card overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
{`const developer = {
  name: "`}<span className="text-gold">{site.name}</span>{`",
  education: "`}<span className="text-gold">Computer Science, Kandahar University</span>{`",
  stack: [`}<span className="text-accent">"React"</span>{`, `}<span className="text-accent">"Node.js"</span>{`,
          `}<span className="text-accent">"Express"</span>{`, `}<span className="text-accent">"MongoDB"</span>{`],
  focus: "`}<span className="text-gold">Full-stack web applications</span>{`",
  openTo: [`}<span className="text-accent">"Internships"</span>{`, `}<span className="text-accent">"Freelance"</span>{`,
           `}<span className="text-accent">"Junior roles"</span>{`],
};`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
