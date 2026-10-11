import { Layers, Server, Database, Code2, Terminal } from "lucide-react";

// level: "Proficient" | "Familiar" | "Learning". Adjust to match what you can demonstrate.
export const levels = {
  Proficient: "bg-accent",
  Familiar: "bg-gold",
  Learning: "bg-slate-500",
};

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layers,
    detail: "Responsive interfaces built with component-based React and utility-first CSS.",
    items: [
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Familiar" },
      { name: "Responsive Web Design", level: "Proficient" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    detail: "Server-side logic, REST APIs and authentication fundamentals for web applications.",
    items: [
      { name: "Node.js & Express", level: "Familiar" },
      { name: "C#", level: "Familiar" },
      { name: "ASP.NET Core", level: "Learning" },
      { name: "REST APIs & authentication basics", level: "Familiar" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    detail: "Designing schemas and querying data for management systems.",
    items: [
      { name: "MongoDB", level: "Familiar" },
      { name: "MySQL", level: "Familiar" },
      { name: "Oracle Database", level: "Learning" },
      { name: "SQL & relational design", level: "Familiar" },
    ],
  },
  {
    id: "cs",
    title: "Computer Science",
    icon: Code2,
    detail: "Programming foundations from my Computer Science degree.",
    items: [
      { name: "C", level: "Familiar" },
      { name: "C++", level: "Familiar" },
      { name: "Java", level: "Familiar" },
      { name: "Python", level: "Familiar" },
      { name: "Data Structures & Algorithms", level: "Familiar" },
      { name: "Object-Oriented Programming", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Knowledge",
    icon: Terminal,
    detail: "Everyday tooling and supporting knowledge for building and debugging software.",
    items: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "API integration & debugging", level: "Familiar" },
      { name: "Operating Systems", level: "Familiar" },
      { name: "Computer Networking", level: "Learning" },
    ],
  },
];
