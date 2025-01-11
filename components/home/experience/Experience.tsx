import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "VN-Consulting",
    position: "Senior Software Engineer (Contract)",
    time: "Aug 2023 - Sep 2024",
    location: "Remote",
    description:
      "Led the development of interactive dashboards, automated data import processes, and implemented scalable architectures to improve performance and user engagement. Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "React.js",
      "Ant-Design",
      "Next.js",
      "Node.js",
      "Redux-Toolkit",
      "Chart.js",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "ILI.Digital",
    position: "Software Engineer",
    time: "Jan 2022 - Jul 2023",
    location: "Lahore, Pakistan",
    description:
      "Designed and developed multiple enterprise-level applications, migrated Gecco2 to TypeScript with a feature-based architecture, and enhanced app performance by 30%. Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySql",
      "MongoDB",
      "TypeScript",
      "Redux-Toolkit",
      "Vite",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "DevDistrict",
    position: "Frontend Developer",
    time: "Feb 2020 - Dec 2021",
    location: "Remote, Pakistan",
    description:
      "Developed responsive user interfaces and integrated multiple third-party APIs to streamline workflows and improve user experiences.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "servicesproviders.pk",
    position: "Frontend Developer Intern",
    time: "Sep 2019 - Dec 2019",
    location: "Lahore, Pakistan",
    description:
      "Designed an e-commerce application, focusing on a clean and user-friendly interface using foundational web development tools.",
    tech: ["HTML", "CSS", "JavaScript", "Git", "Github"],
  },
];
