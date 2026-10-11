import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "../config";

export default function Contact() {
  const row = "flex min-h-[44px] items-center gap-3 text-slate-200 hover:text-white";
  return (
    <section id="contact" className="section border-t border-line" aria-labelledby="contact-title">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="contact-title"
            title="Let's work together"
            intro="Have an internship, freelance project or junior role in mind? Send a message and I'll get back to you."
          />
          <ul className="space-y-2">
            {site.email && (
              <li><a className={row} href={`mailto:${site.email}`}><Mail size={18} className="text-accent" aria-hidden="true" /> {site.email}</a></li>
            )}
            <li>
              <a className={row} href={whatsappLink("Hello Sharifullah, I found your portfolio.")} target="_blank" rel="noreferrer">
                <MessageCircle size={18} className="text-accent" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li><a className={row} href={site.linkedin} target="_blank" rel="noreferrer"><span className="text-accent"><LinkedinIcon /></span> LinkedIn</a></li>
            <li><a className={row} href={site.github} target="_blank" rel="noreferrer"><span className="text-accent"><GithubIcon /></span> GitHub</a></li>
            <li className="flex min-h-[44px] items-center gap-3 text-muted"><MapPin size={18} className="text-accent" aria-hidden="true" /> {site.location}</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
