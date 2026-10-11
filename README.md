# Sharifullah Ikram: Developer Portfolio

React + JavaScript + Vite + Tailwind CSS + Framer Motion + Lucide + React Hook Form.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Make it yours (all optional)

1. Copy `.env.example` to `.env`.
2. **Email:** set `VITE_CONTACT_EMAIL`. It appears in the Contact section.
3. **CV:** put your PDF in `public/` (for example `public/Sharifullah-Ikram-CV.pdf`) and set `VITE_CV_URL=/Sharifullah-Ikram-CV.pdf`. The "Download CV" button appears only when this is set, so there is never a dead link.
4. **Contact form:** without EmailJS the form opens WhatsApp with the message, and it never claims a message was sent. For real email delivery, create an account at emailjs.com and fill the three `VITE_EMAILJS_*` values. The template can use `{{from_name}}`, `{{reply_to}}` and `{{message}}`.
5. **Projects:** edit `src/data/projects.js`. Add `stack`, `problem`, `contribution`, `features`, `image` (screenshot in `public/projects/`) and `live` for each project. Only fields you fill in are displayed.
6. **Skills levels:** edit `src/data/skills.js` (Proficient / Familiar / Learning). Keep only what you can discuss in an interview. To add PHP/Laravel, add items to the Backend group.
7. **Experience:** edit `src/data/experience.js`. Add exact dates (`period`) and real responsibilities for the Ministry of Finance entry.

## Deploy

- **Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output directory `dist`. Add the `VITE_*` variables in the dashboard.
- **GitHub Pages:** build, then publish the `dist` folder (set `base` in `vite.config.js` if the site is served from a sub-path).

## Structure

```
src/
  components/  Navbar, Footer, SectionHeading, SkillGroup, ProjectCard, ProjectModal, ContactForm, Icons
  sections/    Hero, About, Skills, Projects, Experience, Process, Contact
  data/        projects.js, skills.js, experience.js
  hooks/       useActiveSection.js
  config.js    links, contact settings, navigation
```
