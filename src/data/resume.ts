export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface ResumeData {
  fullName: string;
  headline: string;
  contact: ContactItem[];
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  awards: string[];
}

export const resume: ResumeData = {
  fullName: "Tin Le",
  headline: "Software Engineer",
  contact: [
    { label: "Email", value: "tin.le@gmail.com", href: "mailto:tin.le@gmail.com" },
    { label: "Phone", value: "(401) 234-07369", href: "tel:+140123407369" },
    { label: "Address", value: "35 Moseley St, Dorchester, MA 02325" },
    { label: "GitHub", value: "github.com/tinlevn", href: "https://github.com/tinlevn" },
  ],
  summary:
    "Full-stack engineer proficient in C#, ASP.NET Core, Angular, JavaScript/TypeScript, SQL, and cloud workflows. " +
    "Experienced in production application modernizations and end-to-end feature delivery.",
  skills: [
    "C#",
    "ASP.NET Core",
    ".NET 5/6",
    "Angular",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Azure",
    "Python",
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Itlize Global, LLC",
      location: "Remote",
      date: "Nov 2021 – Current",
      bullets: [
        "Developed and maintained full-stack web applications with Angular and ASP.NET Core.",
        "Migrated legacy code bases to modern framework versions, improving stability and performance.",
        "Implemented CI/CD pipelines in Azure and increased delivery throughput by up to 20%.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "FPT USA Corp",
      location: "Cape Girardeau, MO",
      date: "Jun 2021 – Dec 2021",
      bullets: [
        "Automated internal user workflows with Selenium and created a library management proof-of-concept system.",
        "Participated in agile team ceremonies and version control workflows.",
      ],
    },
    {
      title: "Social Media Ambassador",
      company: "Southeast Missouri State University",
      location: "Cape Girardeau, MO",
      date: "Fall 2019 – Spring 2021",
      bullets: [
        "Owned Vietnamese student outreach through the university's social media channels.",
        "Answered international admission questions and student support inquiries.",
      ],
    },
  ],
  education: [
    {
      institution: "Southeast Missouri State University",
      degree: "B.S. Computer Science, Minor in Mathematics (Summa Cum Laude)",
      period: "Fall 2017 – May 2021",
      details:
        "GPA: 3.94; in-major 4.0. Coursework highlights: Operating Systems, Software Engineering, Databases, Machine Learning, " +
        "Linear Algebra, Cryptography, Data Analysis.",
    },
  ],
  awards: ["Southeast Missouri State University Regent's Scholarship (Full tuition)"],
};
