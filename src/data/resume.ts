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
  headline: "Full-Stack .NET / Angular Developer",
  contact: [
    { label: "Email", value: "thanhtin.le.vn@gmail.com", href: "mailto:thanhtin.le.vn@gmail.com" },
    { label: "Location", value: "Ho Chi Minh City / Remote" },
    { label: "LinkedIn", value: "linkedin.com/in/thanhtinle", href: "https://www.linkedin.com/in/thanhtinle/" },
    { label: "GitHub", value: "github.com/tinlevn", href: "https://github.com/tinlevn" },
  ],
  summary:
    "Full-stack developer with 4+ years shipping scalable, cloud-native web applications using C#, ASP.NET Core (.NET 6–10), and Angular (14–22) across fintech, aviation, and public-sector environments. " +
    "Deep expertise in Entity Framework Core, LINQ, and relational database design (SQL Server, PostgreSQL, MySQL), with a strong architectural foundation in SOLID principles, Clean/Onion Architecture, Domain-Driven Design, and the Repository pattern. " +
    "Hands-on with cloud and DevOps tooling: Azure App Services, Azure Data Factory, Azure DevOps Pipelines, AWS, Docker, and Terraform for Infrastructure as Code. " +
    "Proven Agile/Scrum collaborator delivering for an ASX-listed wealth management platform (Netwealth), a major U.S. airline (American Airlines), and a public water utility (MWRA).",
  skills: [
    "C#",
    "TypeScript",
    "Python",
    "SQL",
    "ASP.NET Core (Web API & MVC)",
    ".NET 6–10",
    "Entity Framework Core",
    "LINQ",
    "Angular 14–22",
    "Angular Material",
    "RxJS",
    "SQL Server",
    "PostgreSQL",
    "MySQL",
    "Azure (App Service, Data Factory, Functions)",
    "Azure DevOps",
    "AWS",
    "Terraform",
    "Docker",
    "IIS",
    "GitHub Actions",
    "CI/CD",
    "xUnit",
    "NUnit",
    "Vitest",
    "Postman",
    "Git",
    "JIRA",
    "Confluence",
    "Dataedo",
    "Agile/Scrum",
  ],
  experience: [
    {
      title: "Full Stack Software Developer",
      company: "Orient Software · Client: Netwealth Australia (ASX: NWL)",
      location: "Ho Chi Minh City, Vietnam",
      date: "Jun 2025 – Present",
      bullets: [
        "Technologies: .NET 10, Angular 22, TypeScript, Azure Cloud, Azure DevOps, SSMS.",
        "Build and maintain enterprise applications in C# and ASP.NET Core (MVC, Web API, REST) following SOLID, Clean Architecture, and Domain-Driven Design.",
        "Design and deploy microservices on Azure Cloud Services with a focus on scalability and reliability.",
        "Optimize data access layers using EF Core against SQL Server, including query and indexing tuning.",
        "Drive Agile/Scrum ceremonies — sprint planning, code reviews, and retrospectives — to ship high-quality releases.",
        "Maintain test coverage through unit and integration testing, and manage version control and CI/CD workflows across the team.",
      ],
    },
    {
      title: "Software Developer",
      company: "Officience",
      location: "Ho Chi Minh City, Vietnam",
      date: "Jun 2024 – Jun 2025",
      bullets: [
        "Technologies: .NET 8, Angular 16+, PostgreSQL, Power Automate, AWS, Terraform.",
        "Led client-side migration of a Web API backend from .NET 6 to .NET 8.",
        "Managed application secrets and configuration using Terraform for Infrastructure as Code.",
        "Built and maintained CI/CD pipelines in Azure DevOps for automated API deployment.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "American Airlines",
      location: "Dallas, TX",
      date: "Mar 2024 – Jun 2024",
      bullets: [
        "Technologies: .NET 6–8, PostgreSQL, Angular 16+, Azure Data Factory.",
        "Partnered with technical and non-technical stakeholders to translate business requirements into working solutions.",
        "Designed and integrated front-end UI with cloud-based back-end services and APIs.",
        "Hardened application responsiveness and security; triaged and resolved production bugs and logic errors.",
        "Improved deployment frequency and quality as part of the release pipeline.",
        "Built scalable, reusable frameworks for data ingestion, including event-driven/stream processing with Azure Data Factory.",
        "Implemented Infrastructure as Code (Terraform, Azure DevOps, GitHub Actions) for storage and network provisioning.",
      ],
    },
    {
      title: "Application Developer",
      company: "Massachusetts Water Resources Authority (MWRA)",
      location: "Chelsea, MA",
      date: "Mar 2022 – Jan 2024",
      bullets: [
        "Technologies: VB.NET, .NET 6, T-SQL, ASP.NET Core MVC, Angular 14+.",
        "Supported MWRA, a public authority delivering wholesale water and sewer services to 3M+ residents across eastern and central Massachusetts.",
        "Used SSMS 2019 to debug application errors and stored procedure logic, and ran SSMS-based ETL across internal servers.",
        "Built a full-stack employee information portal with EF Core (Database First) on a .NET 6 Web API and Angular 14+ front end.",
        "Implemented route guards, centralized controller error handling, and a factory-pattern DI setup between data and domain layers to improve decoupling and security.",
        "Authored and validated API endpoints in Postman as living documentation.",
        "Wrote LINQ queries against a linked SQL Server for infrastructure-layer data access to meet business requirements.",
        "Built Angular Material 14+ components (reactive forms, tables, buttons) and NgServices for CRUD operations against SQL Server.",
        "Handled feature requests directly from end users and integrated them into production applications.",
        "Deployed and troubleshot applications on IIS (6.0–10), and produced comprehensive database documentation in Dataedo.",
        "Managed source control in Azure DevOps and helped build CI/CD pipelines for internal applications.",
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
