import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target, Handshake } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { site } from "../config";

const facts = [
  { icon: GraduationCap, label: "Education", value: "Computer Science, Kandahar University (final year)" },
  { icon: Target, label: "Focus", value: "Full-stack web development" },
  { icon: Handshake, label: "Open to", value: "Internships, freelance projects, junior roles" },
  { icon: MapPin, label: "Based in", value: site.location },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading id="about-title" title="About me" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-lg leading-relaxed text-muted"
          >
            <p>
              I&apos;m a final-year Computer Science student with a strong interest in full-stack web
              development. I enjoy turning real needs into working software, from the interface a
              person sees to the database that keeps their data organised.
            </p>
            <p>
              On the frontend I work with HTML, CSS, JavaScript and React. On the backend I know
              how REST APIs, authentication and relational databases fit together, and I keep
              widening that knowledge with Node.js, C# and ASP.NET Core.
            </p>
            <p>
              I care about maintainable code and practical solutions, and I&apos;m committed to
              learning continuously and sharpening my problem-solving. I&apos;m early in my career
              and looking for opportunities to contribute and grow.
            </p>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card h-fit space-y-6 p-6 sm:p-8"
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <Icon size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-0.5 text-white">{value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
