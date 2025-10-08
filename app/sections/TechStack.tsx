import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';

type TechStackListType = {
    name: string;
    description: string;
    icon: string;
};

const TechStackList: TechStackListType[] = [
    {
        name: "Java Spring",
        description: "Experienced in building robust backend services using Java Spring framework.",
        icon: "/logos/spring.svg"
    },
    {
        name: "Angular",
        description: "Skilled in creating dynamic web applications using Angular framework.",
        icon: "/logos/angular.svg"
    },
    {
        name: "Next.js",
        description: "Proficient in developing server-side rendered React applications with Next.js.",
        icon: "/logos/nextjs.svg"
    },
    {
        name: "Tailwind CSS",
        description: "Adept at designing responsive and modern UIs using Tailwind CSS.",
        icon: "/logos/tailwindcss.svg"
    },
    {
        name: "PostgreSQL",
        description: "Experienced in managing and optimizing relational databases with PostgreSQL.",
        icon: "/logos/pgsql.svg"
    },
    {
        name: "MySQL",
        description: "Skilled in database design and querying using MySQL.",
        icon: "/logos/mysql.svg"
    },
    {
        name: "Git",
        description: "Proficient in version control and collaboration using Git.",
        icon: "/logos/git.svg"
    },
    {
        name: "Figma",
        description: "Experienced in UI/UX design and prototyping using Figma.",
        icon: "/logos/figma.svg"
    }
];

const TechStack = () => {
    return (
        <Section id="TechStack" title="Tech Stack" aria-label="Tech Stack Section" className='flex-1'>
            <ul className='flex flex-wrap md:space-x-4 md:space-y-4 justify-center items-center w-10/12 mx-auto'>
                {TechStackList.map((tech, index) => (
                    <li key={index} className='relative flex w-10 h-10 md:w-18 md:h-18 justify-between items-center' >
                        <Image src={tech.icon} alt={`${tech.name} logo`} className='absolute' fill />
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default TechStack
