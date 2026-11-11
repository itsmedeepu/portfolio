import type { ResumeData } from "@/lib/types";
import avatar from "./avatar.jpg";

export const RESUME_DATA: ResumeData = {
  name: "Deepak S",
  location: "Bengaluru, Karnataka",
  locationLink: "https://maps.google.com/?q=Bengaluru%2C+Karnataka%2C+India",
  about: "Java Full Stack Developer",
  summary:
    "Detail-oriented Java Full Stack Developer with experience in designing, implementing, and supporting scalable applications. Proficient in Spring Boot and MERN stack with a strong foundation in engineering principles. Adept at collaborating with global teams to deliver high-quality technical solutions.",
  avatar,
  siteUrl: "https://github.com/deepaksdeep222",
  personalWebsiteUrl: "https://github.com/deepaksdeep222",
  contact: {
    email: "deepaksdeep222@gmail.com",
    tel: "+91 7899197774",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/itsmedeepu",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "CMR Institute of Technology, Bengaluru",
      degree: "Bachelor of Engineering (B.E) - CGPA: 7.80",
      // start: "2018",
      // end: "2022",
    },
  ],
  work: [
    {
      company: "Total Solutions Intec Pvt Ltd",
      link: "https://www.google.com/search?q=Total+Solutions+Intec+Pvt+Ltd",
      badges: ["Design", "Documentation", "NFPA", "NBC", "Support"],
      title: "Assistant Design Engineer",
      start: "April 2024",
      end: "March 2026",
      description:
        "Collaborated with project teams to analyze requirements and propose technical solutions for large-scale commercial projects.",
      highlights: [
        "Collaborated with project teams to analyze requirements and propose technical solutions for large-scale commercial projects.",
        "Managed complex technical documentation and design approvals, ensuring 100% compliance with NFPA/NBC standards.",
        "Provided technical support and resolved site-specific queries, demonstrating strong problem-solving skills in a high-pressure environment.",
      ],
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "Python (Basics)",
    "Spring Boot",
    "Express.js",
    "React JS (Basics)",
    "Node.js",
    "Hibernate/JPA",
    "HTML5",
    "CSS3",
    "MongoDB",
    "MySQL",
    "RESTful APIs",
    "MERN Stack",
    "JWT",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "VS Code",
    "JUnit",
    "Eclipse",
    "AutoCAD",
    "Java Full Stack Development (Industry Training)",
    "React JS - The Complete Guide (incl. Next.js, Redux)",
  ],
  projects: [
    {
      title: "User Management REST API",
      techStack: ["Java", "Spring Boot", "MySQL"],
      description:
        "Engineered a scalable RESTful backend service using Java and Spring Boot, implementing core business requirements and complex algorithms. Developed and executed unit test cases to ensure reliability and strictly adhered to coding standards and best practices.",
    },
    {
      title: "Agri Direct",
      techStack: ["MERN Stack", "JWT"],
      description:
        "Designed and developed a P2P marketplace bridging farmers and consumers, managing the delivery of modules from defined scope to high-quality deployment. Worked within a team environment to analyze potential new functionality and define technical requirements for real-time logistics coordination.",
    },
  ],
};

export const SECTION_TITLES = {
  summary: "About",
  work: "Work Experience",
  education: "Education",
  skills: "Skills",
  projects: "Side projects",
} satisfies Partial<Record<keyof ResumeData, string>>;
