'use client';

import React, { useState } from 'react';
import Section from '../ui/Section';
import { FaChevronDown } from 'react-icons/fa6';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import { useOnInView } from 'react-intersection-observer';

type ExperienceType = {
  title: string;
  company: string;
  period?: string;
  details: string[];
};

const experiences: ExperienceType[] = [
  {
    title: 'Full-stack Developer',
    company: 'CP Health Innovations, Inc.',
    period: 'Jan 2026 – Apr 2026',
    details: [
      'Develop and maintain full-stack features with a focus on performance, scalability, and usability',
      'Collaborate with team to iterate on user feedback, resolve issues, and implement secure, standards-compliant solutions.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Alliance Software Inc.',
    period: 'Aug 2024 – Oct 2025',
    details: [
      'Led the database upgrade research and supported migration.',
      'Investigated and resolved production issues, providing RCA with simple diagrams for clarity.',
      'Collaborated with client\u2019s dev team to present updates and align technical solutions with their needs.',
      'Resolved 20+ CVE vulnerabilities enhancing security compliance.',
    ],
  },
  {
    title: 'Lead Front-End Developer',
    company: 'Samahan Systems Development (School Org)',
    period: 'Aug 2022 – Apr 2024',
    details: [
      'Led peers and facilitated internal workshops to improve coding standards and collaboration.',
    ],
  },
  {
    title: 'Front-End Intern',
    company: 'Mugna Technologies Inc.',
    period: 'Apr 2023 – Jun 2023',
    details: [
      'Developed the front-end of a company product using React, Next.js, and Chakra UI, ensuring a responsive and user-friendly interface.',
    ],
  },
  {
    title: 'Freelance & Remote Clients',
    company: 'Self-Employed',
    period: 'Nov 2022',
    details: [
      'Built and maintained cross-platform mobile applications using React Native.',
      'Translated UI/UX wireframes into production-ready code aligned with client branding and usability standards.',
    ],
  },
];

const ExperienceItem = ({
  title,
  company,
  period,
  details,
  isLast,
}: ExperienceType & { isLast: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-9">
      {/* Timeline dot */}
      <div className="absolute left-0 top-4 w-[18px] h-[18px] rounded-full border-2 border-[var(--accent-hover)]/50 bg-[var(--sidebar-bg)] flex items-center justify-center z-10">
        <div
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${open ? 'bg-[var(--accent-hover)]' : 'bg-[var(--accent)]/60'}`}
        />
      </div>

      {/* Connecting line to next item */}
      {!isLast && (
        <div
          className="absolute left-[8px] top-[26px] w-px"
          style={{
            height: open ? 'calc(100% - 10px)' : 'calc(100% + 8px)',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
            transition: 'height 0.3s ease',
          }}
        />
      )}

      {/* Accordion header */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-start justify-between pt-2 pb-3 text-left hover:cursor-pointer group"
        aria-expanded={open}
      >
        <div className="flex flex-col min-w-0 pr-4">
          <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">
            {title}
          </span>
          <span className="text-xs text-foreground/45 mt-0.5">{period}</span>
        </div>
        <FaChevronDown
          className={`mt-1 flex-shrink-0 text-foreground/30 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          size={12}
        />
      </button>

      {/* Collapsible details */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 pb-6' : 'max-h-0'}`}
      >
        <p className="text-xs text-[var(--accent)]/80 italic mb-2">{company}</p>
        <ul className="space-y-1.5">
          {details.map((d) => (
            <li
              key={d}
              className="flex gap-2 text-sm text-foreground/65 leading-relaxed"
            >
              <span className="mt-1.5 block w-1 h-1 rounded-full bg-[var(--accent-hover)]/50 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const { setActiveSection } = useActiveSection();

  const inViewRef = useOnInView(
    (inView, entry) => {
      if (inView) {
        setActiveSection('#Experience');
      }
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0.3, triggerOnce: false },
  );

  return (
    <Section title="Experience" aria-label="Experience Section" ref={inViewRef}>
      <div className="relative flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.company}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
