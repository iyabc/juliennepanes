'use client';

import Section from '../ui/Section';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useOnInView } from 'react-intersection-observer';
import { useActiveSection } from '../contexts/ActiveSectionContext';

interface Project {
  title: string;
  description: string;
  link: string;
  img: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Sadya 2022',
    description: "Ateneo de Davao University's U-Fest 2022 Website",
    link: 'https://addu-sadya-2022.vercel.app/',
    img: '/projects/sadya-2022.png',
    tech: ['nextjs', 'tailwindcss'],
  },
  {
    title: 'Sadya 2023',
    description: "Ateneo de Davao University's U-Fest 2023 Website",
    link: 'https://addu-sadya-2023.vercel.app/',
    img: '/projects/sadya-2023.png',
    tech: ['nextjs', 'tailwindcss'],
  },
  {
    title: 'Samahan At The Get Go',
    description: "Ateneo de Davao University's Student Government Website",
    link: 'https://samahan-at-the-get-go.vercel.app/',
    img: '/projects/samahan.jpg',
    tech: ['nextjs', 'tailwindcss'],
  },
  {
    title: 'Blog Website',
    description: 'A personal blog website built with Next.js and Tailwind CSS',
    link: 'https://blog-website-beta-lime.vercel.app/#/home',
    img: '/projects/blog.png',
    tech: ['angular'],
  },
  {
    title: 'SmartCampus',
    description: 'View availability and book campus facilities',
    link: 'https://github.com/iyabc/smartcampus-frontend?tab=readme-ov-file#demo-video',
    img: '/projects/smartcampus.png',
    tech: ['reactnative'],
  },
];

const ProjectCard = ({ title, description, link, img, tech }: Project) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }
  };

  return (
    <Link
      ref={cardRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden rounded-xl h-36 w-full md:h-48 md:w-[calc(50%-8px)] xl:w-[calc(33.33%-12px)] border border-white/[0.06] hover:border-[var(--accent-hover)]/30 hover:shadow-[var(--button-shadow-hover)] cursor-pointer"
      style={{
        transition:
          'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={img}
          alt={description}
          fill
          draggable={false}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#050510] opacity-70 group-hover:opacity-50 transition-opacity duration-400" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs text-gray-300/70 mb-2 leading-snug">
          {description}
        </p>
        <div className="flex flex-row gap-1.5">
          {tech.map((t) => (
            <Image
              key={t}
              src={`/logos/${t}.svg`}
              alt={`${t} logo`}
              width={16}
              height={16}
              draggable={false}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const { setActiveSection } = useActiveSection();

  const inViewRef = useOnInView(
    (inView) => {
      if (inView) setActiveSection('#Projects');
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0.2, triggerOnce: false },
  );

  return (
    <Section title="Projects" aria-label="Projects Section" ref={inViewRef}>
      <div className="flex flex-wrap gap-4 w-full justify-start">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
