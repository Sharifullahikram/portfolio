const env = import.meta.env;

// Central, editable site configuration. Secrets never live here: use .env.
export const site = {
  name: "Sharifullah Ikram",
  role: "Full-Stack Developer",
  location: "Afghanistan",
  github: env.VITE_GITHUB_URL || "https://github.com/Sharifullahikram",
  linkedin: env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/sharifullah-ikram-368654354",
  whatsappNumber: "93707811661",
  email: env.VITE_CONTACT_EMAIL || "",
  cvUrl: env.VITE_CV_URL || "/Sharifullah-Ikram-CV.pdf",
  emailjs: {
    serviceId: env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: env.VITE_EMAILJS_PUBLIC_KEY || "",
  },
};

export const emailJsEnabled = Boolean(
  site.emailjs.serviceId && site.emailjs.templateId && site.emailjs.publicKey
);

export const whatsappLink = (text = "") =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
