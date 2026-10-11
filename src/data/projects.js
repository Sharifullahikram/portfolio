// Projects come from github.com/Sharifullahikram. Edit freely.
// Optional fields (only shown when present): problem, contribution, features, stack, image, live.
// Add real screenshots to /public/projects and set image: "/projects/name.png".
const gh = (repo) => `https://github.com/Sharifullahikram/${repo}`;

export const categories = ["All", "Management Systems", "Websites", "Other"];

export const projects = [
  {
    id: "hostel-ms",
    title: "Hostel Management System",
    category: "Management Systems",
    status: "Public repository",
    summary: "A hostel management system built for KDR University.",
    features: ["Built for a real university context", "Source code available on GitHub"],
    stack: [],
    repo: gh("Hostel-management-system"),
    featured: true,
  },
  {
    id: "carpet-ms",
    title: "Carpet MS",
    category: "Management Systems",
    status: "Public repository",
    summary: "A management system for a carpet business.",
    stack: [],
    repo: gh("Carpet-MS"),
  },
  {
    id: "construction-site",
    title: "Construction Company Website",
    category: "Websites",
    status: "Public repository",
    summary: "A company website for a construction business.",
    stack: ["HTML"],
    repo: gh("constracion-company"),
  },
  {
    id: "huddle",
    title: "Huddle Landing Page",
    category: "Websites",
    status: "Public repository",
    summary: "A responsive landing page project styled with CSS.",
    stack: ["CSS"],
    repo: gh("Huddle-By-Ikram-"),
  },
  {
    id: "awcc",
    title: "AWCC",
    category: "Other",
    status: "Public repository",
    summary: "A project repository on GitHub. Open the code to see how it works.",
    stack: [],
    repo: gh("AWCC"),
  },
  {
    id: "remote",
    title: "Remote",
    category: "Other",
    status: "Public repository",
    summary: "A project repository on GitHub. Open the code to see how it works.",
    stack: [],
    repo: gh("remote-"),
  },
];
