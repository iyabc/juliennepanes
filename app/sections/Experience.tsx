import React from "react";
import Section from "../ui/Section";

const experiences = [
    {
        title: "Software Developer",
        company: "Alliance Software Inc.",
        period: "Aug 2024 – Oct 2025",
        details: [
            "Led the database upgrade research and supported migration.",
            "Investigated and resolved production issues, providing RCA with simple diagrams for clarity.",
            "Collaborated with client’s dev team to present updates and align technical solutions with their needs.",
            "Resolved 20+ CVE vulnerabilities enhancing security compliance."
        ]
    },
    {
        title: "Freelance & Remote Clients",
        company: "Self-Employed",
        period: "Nov 2022 – Present",
        details: [
            "Built and maintained cross-platform mobile applications using React Native.",
            "Translated UI/UX wireframes into production-ready code aligned with client branding and usability standards."
        ]
    },
    {
        title: "Lead Front-End Developer",
        company: "Samahan Systems Development (School Org)",
        period: "Aug 2022 – Apr 2024",
        details: [
            "Led peers and facilitated internal workshops to improve coding standards and collaboration."
        ]
    },
    {
        title: "Front-End Intern",
        company: "Mugna Technologies Inc.",
        period: "Apr 2023 – Jun 2023",
        details: [
            "Developed the front-end of a company product using React, Next.js, and Chakra UI, ensuring a responsive and user-friendly interface."
        ]
    }
];

const Experience = () => {
    return (
        <Section id="Experience" title="Experience" aria-label="Experience Section">
            <div className="flex flex-col space-y-8">
                {experiences.map((exp, idx) => (
                    <div key={idx}>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-lg font-semibold text-foreground">
                                {exp.title}
                            </h3>
                            <span className="text-sm text-foreground/70">{exp.period}</span>
                        </div>

                        <p className="text-sm text-foreground/80 italic">{exp.company}</p>

                        <ul className="mt-2 list-disc list-inside text-sm text-foreground/80 space-y-1">
                            {exp.details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
