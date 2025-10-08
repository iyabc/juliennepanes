import React from 'react'
import Section from '../ui/Section'
import Image from 'next/image';
import Link from 'next/link';

const experiences = [
    {
        title: "Sadya 2022",
        description: "Ateneo de Davao University's U-Fest 2022 Website",
        link: "https://addu-sadya-2022.vercel.app/",
        img: '/projects/sadya-2022.png'
    },
    {
        title: "Sadya 2023",
        description: "Ateneo de Davao University's U-Fest 2023 Website",
        link: "https://addu-sadya-2023.vercel.app/",
        img: '/projects/sadya-2023.png'
    },
    {
        title: "Samahan At The Get Go",
        description: "Ateneo de Davao University's Student Government Website",
        link: "https://samahan-at-the-get-go.vercel.app/",
        img: '/projects/samahan.jpg'
    },
    {
        title: "Blog Website",
        description: "A personal blog website built with Next.js and Tailwind CSS",
        link: "https://blog-website-beta-lime.vercel.app/#/home",
        img: '/projects/blog.png'
    },
]

const ProjectCard = ({
    title,
    description,
    link,
    img,
}: {
    title: string;
    description: string;
    link: string;
    img: string;
}) => (
    <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-foreground relative block overflow-hidden rounded-lg shadow h-24 w-full md:h-48 md:w-96 hover:translate-y-[-2px] hover:shadow-[var(--button-shadow-hover)]
          hover:cursor-pointer transition-transform"
    >
        <Image
            src={img}
            alt={description}
            fill
            draggable={false}
            className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-[var(--button)] opacity-70 transition-opacity duration-500 group-hover:opacity-10" />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>
        </div>
    </Link>
);


const Projects = () => {
    return (
        <Section id="Projects" title="Projects" aria-label="Projects Section" className='flex-1 h-full'>
            <div className="flex flex-wrap space-y-8 w-full md:gap-4 md:space-y-0 justify-center">
                {experiences.map((exp, index) => (
                    <ProjectCard key={index} {...exp} />
                ))}
            </div>
        </Section>
    )
}

export default Projects
