'use client';

import Section from '../ui/Section';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import useProjects, { Project } from '../hooks/useProjects';

const formatProjectName = (name: string) => {
  return name.replace('-', '').toWellFormed();
};

const ProjectCardSkeleton = () => (
  <div className="relative block overflow-hidden rounded-xl h-36 w-full md:h-48 md:w-[calc(50%-8px)] xl:w-[calc(33.33%-12px)] border border-white/[0.06] animate-pulse">
    <div className="w-full h-full bg-white/5" />
    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
      <div className="h-3 w-2/5 rounded bg-white/10" />
      <div className="h-2 w-3/4 rounded bg-white/[0.06]" />
      <div className="flex gap-1.5 pt-0.5">
        <div className="h-4 w-4 rounded bg-white/10" />
        <div className="h-4 w-4 rounded bg-white/10" />
      </div>
    </div>
  </div>
);

const ProjectCard = ({
  name,
  description,
  url,
  technologies,
  imageUrl,
  title,
}: Project) => {
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
      href={url ?? ''}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block rounded-xl h-36 w-full md:h-48 md:w-[calc(50%-8px)] xl:w-[calc(33.33%-12px)]
      border border-white/[0.06] hover:border-[var(--accent-hover)]/30 hover:shadow-[var(--button-shadow-hover)]"
      style={{
        transition:
          'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      draggable={false}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="relative w-full h-full bg-white/10">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={formatProjectName(name) ?? ''}
              fill
              draggable={false}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={false}
            />
          )}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 group-hover:opacity-40 transition-opacity duration-400" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div>
          {description && (
            <p
              className="text-xs text-white/90 leading-snug mb-1.5 opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,1)]"
            >
              {description}
            </p>
          )}
          <h3 className="text-sm font-bold text-white [text-shadow:0_1px_6px_rgba(0,0,0,1)]">
            {title ?? formatProjectName(name)}
          </h3>
        </div>
        <div className="flex flex-row gap-1.5 mt-2">
          {technologies &&
            technologies.map((t: string) => (
              <Image
                key={t}
                src={`/logos/${t.toLowerCase()}.svg`}
                alt={`${t} logo`}
                width={16}
                height={16}
                draggable={false}
                className="opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_1px_7px_rgba(255,255,255,0.5)]"
              />
            ))}
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <Section title="Projects" aria-label="Projects Section">
      <div className="flex flex-wrap gap-4 w-full justify-start">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))
          : projects.map((project: Project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
      </div>
    </Section>
  );
};

export default Projects;
