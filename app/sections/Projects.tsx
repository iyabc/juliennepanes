import React from 'react'
import Section from '../ui/Section'
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    link: string;
    img: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "Sadya 2022",
        description: "Ateneo de Davao University's U-Fest 2022 Website",
        link: "https://addu-sadya-2022.vercel.app/",
        img: '/projects/sadya-2022.png',
        tech: ['nextjs', 'tailwindcss']
    },
    {
        title: "Sadya 2023",
        description: "Ateneo de Davao University's U-Fest 2023 Website",
        link: "https://addu-sadya-2023.vercel.app/",
        img: '/projects/sadya-2023.png',
        tech: ['nextjs', 'tailwindcss']
    },
    {
        title: "Samahan At The Get Go",
        description: "Ateneo de Davao University's Student Government Website",
        link: "https://samahan-at-the-get-go.vercel.app/",
        img: '/projects/samahan.jpg',
        tech: ['nextjs', 'tailwindcss']
    },
    {
        title: "Blog Website",
        description: "A personal blog website built with Next.js and Tailwind CSS",
        link: "https://blog-website-beta-lime.vercel.app/#/home",
        img: '/projects/blog.png',
        tech: ['angular']
    },
    {
        title: "SmartCampus",
        description: "View availability and book campus facilities",
        link: "https://github.com/iyabc/smartcampus-frontend?tab=readme-ov-file#demo-video",
        img: '/projects/smartcampus.png',
        tech: ['reactnative']
    },
]

const ProjectCard = ({
    title,
    description,
    link,
    img,
    tech
}:
    Project
) => (
    <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-background relative block overflow-hidden rounded-lg shadow h-34 w-full md:h-48 md:w-96 hover:translate-y-[-2px] hover:shadow-[var(--button-shadow-hover)]
          hover:cursor-pointer transition-transform"
    >
        <Image
            src={img}
            alt={description}
            fill
            draggable={false}
            className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-background opacity-75 transition-opacity duration-500 group-hover:opacity-55" />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm font-medium text-gray-200">{description}</p>
            <div className='flex flex-row space-x-1'>
                {
                    tech.map((t, idx) => (
                        <Image
                            key={idx}
                            src={`/logos/${t}.svg`}
                            alt={`${t} logo`}
                            width={24}
                            height={24}
                            draggable={false}
                        />
                    ))
                }
            </div>
        </div>
    </Link>
);


const Projects = () => {
    return (
        <Section id="Projects" title="Projects" aria-label="Projects Section" className='flex-1 h-fit'>
            <div className="flex flex-wrap space-y-8 w-full md:gap-4 md:space-y-0 justify-center">
                {projects.map((exp, index) => (
                    <ProjectCard key={index} {...exp} />
                ))}
            </div>
        </Section>
    )
}

export default Projects
