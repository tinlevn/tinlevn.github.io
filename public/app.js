"use strict";
const resume = {
    fullName: "Tin Le",
    headline: "Software Engineer",
    contact: [
        { label: "Email", value: "tin.le@gmail.com", href: "mailto:tin.le@gmail.com" },
        { label: "Phone", value: "(401) 234-07369", href: "tel:+140123407369" },
        { label: "Address", value: "35 Moseley St, Dorchester, MA 02325" },
    ],
    summary: "Full-stack engineer proficient in C#, ASP.NET Core, Angular, JavaScript/TypeScript, SQL, and cloud workflows. " +
        "Experienced in production application modernizations and end-to-end feature delivery.",
    skills: ["C#", "ASP.NET Core", ".NET 5/6", "Angular", "JavaScript", "TypeScript", "SQL", "Azure", "Python"],
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
                "Owned Vietnamese student outreach through the university’s social media channels.",
                "Answered international admission questions and student support inquiries.",
            ],
        },
    ],
    education: [
        {
            institution: "Southeast Missouri State University",
            degree: "B.S. Computer Science, Minor in Mathematics (Summa Cum Laude)",
            period: "Fall 2017 – May 2021",
            details: "GPA: 3.94; in-major 4.0. Coursework highlights: Operating Systems, Software Engineering, Databases, Machine Learning, " +
                "Linear Algebra, Cryptography, Data Analysis.",
        },
    ],
    awards: ["Southeast Missouri State University Regent’s Scholarship (Full tuition)"],
    projects: [
        {
            name: "Smeexer - Cryptocurrency Private Seed Mixers",
            period: "2021 – 2022",
            description: "E-commerce prototype for mechanical keyboard products with cart and Stripe payment integration.",
            stack: "C#, ASP.NET 6 Web API, Angular 13",
        },
        {
            name: "Seed Phrase Scrambler Console App",
            period: "2021",
            description: "CLI tool that scrambles private seed phrases for secure offline and online storage.",
            stack: "Python",
        },
    ],
};
function createElement(tag, className, text) {
    const el = document.createElement(tag);
    if (className)
        el.className = className;
    if (text)
        el.textContent = text;
    return el;
}
function makeSection(title) {
    const section = createElement("section", "card");
    const h2 = createElement("h2", "", title);
    section.appendChild(h2);
    return section;
}
function renderResume(target, data) {
    const header = createElement("section", "card header");
    header.appendChild(createElement("h1", "title", data.fullName));
    header.appendChild(createElement("p", "subtitle", data.headline));
    const contactRow = createElement("div", "row");
    data.contact.forEach((item) => {
        const link = item.href ? createElement("a", "chip", `${item.label}: ${item.value}`) : createElement("span", "chip", `${item.label}: ${item.value}`);
        if (item.href)
            link.setAttribute("href", item.href);
        contactRow.appendChild(link);
    });
    header.appendChild(contactRow);
    header.appendChild(createElement("p", "", data.summary));
    target.appendChild(header);
    const skills = makeSection("Skills");
    const skillRow = createElement("div", "row");
    data.skills.forEach((skill) => skillRow.appendChild(createElement("span", "chip", skill)));
    skills.appendChild(skillRow);
    target.appendChild(skills);
    const exp = makeSection("Experience");
    data.experience.forEach((item) => {
        const title = createElement("h3", "", `${item.title} @ ${item.company}`);
        const meta = createElement("small", "", `${item.date} · ${item.location}`);
        const list = createElement("ul");
        item.bullets.forEach((bullet) => list.appendChild(createElement("li", "", bullet)));
        exp.appendChild(title);
        exp.appendChild(meta);
        exp.appendChild(list);
    });
    target.appendChild(exp);
    const edu = makeSection("Education");
    data.education.forEach((item) => {
        const title = createElement("h3", "", item.institution);
        const meta = createElement("small", "", `${item.degree} · ${item.period}`);
        const para = createElement("p", "", item.details);
        edu.appendChild(title);
        edu.appendChild(meta);
        edu.appendChild(para);
    });
    target.appendChild(edu);
    const projects = makeSection("Projects");
    data.projects.forEach((project) => {
        const title = createElement("h3", "", `${project.name} (${project.period})`);
        const details = createElement("p", "", project.description);
        const stack = createElement("small", "", `Stack: ${project.stack}`);
        projects.appendChild(title);
        projects.appendChild(details);
        projects.appendChild(stack);
    });
    target.appendChild(projects);
    const awards = makeSection("Awards");
    const list = createElement("ul");
    data.awards.forEach((award) => list.appendChild(createElement("li", "", award)));
    awards.appendChild(list);
    target.appendChild(awards);
}
const app = document.getElementById("app");
if (!app) {
    throw new Error("#app element not found");
}
renderResume(app, resume);
