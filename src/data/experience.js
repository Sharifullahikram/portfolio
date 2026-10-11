import { GraduationCap, Briefcase, FolderGit2 } from "lucide-react";

// Add `period: "Month YYYY - Month YYYY"` and extra bullet points when you have exact details.
// Entries without a period simply hide the date line.
export const timeline = [
  {
    id: "education",
    type: "Education",
    icon: GraduationCap,
    title: "Computer Science",
    place: "Kandahar University",
    period: "Final-year student",
    points: [
      "Studying core computer science: programming, data structures, databases, operating systems and networking.",
      "Applying coursework in practical web and management-system projects.",
    ],
  },
  {
    id: "mof",
    type: "Practical experience",
    icon: Briefcase,
    title: "Ministry of Finance",
    place: "Financial management systems",
    points: [
      "Practical exposure to the Ministry Portal and Treasury Window financial management systems.",
    ],
  },
  {
    id: "personal",
    type: "Personal projects",
    icon: FolderGit2,
    title: "Self-directed development",
    place: "GitHub",
    points: [
      "Building and publishing management systems and websites in public repositories.",
    ],
  },
];

export const process = [
  { title: "Understand requirements", text: "Clarify who the users are and what the software must do." },
  { title: "Analyze the problem", text: "Break the work into data, workflows and edge cases." },
  { title: "Design interface and database", text: "Sketch screens and model the data before coding." },
  { title: "Implement", text: "Build reusable components and clear application logic." },
  { title: "Test", text: "Check functionality and responsiveness across screen sizes." },
  { title: "Debug and deploy", text: "Fix issues, improve, and prepare the project for release." },
];
