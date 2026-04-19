import Image from 'next/image';
import Section from '../ui/Section';

type TechStackItemType = {
  name: string;
  icon: string;
};

const categories: { label: string; items: TechStackItemType[] }[] = [
  {
    label: 'Frameworks & Libraries',
    items: [
      { name: 'Java Spring', icon: '/logos/spring.svg' },
      { name: 'Angular', icon: '/logos/angular.svg' },
      { name: 'Next.js', icon: '/logos/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg' },
      { name: 'React Native', icon: '/logos/reactnative.svg' },
    ],
  },
  {
    label: 'Languages & Databases',
    items: [
      { name: 'Java', icon: '/logos/java.svg' },
      { name: 'PostgreSQL', icon: '/logos/pgsql.svg' },
      { name: 'MySQL', icon: '/logos/mysql.svg' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'AWS', icon: '/logos/aws.svg' },
      { name: 'Git', icon: '/logos/git.svg' },
      { name: 'Figma', icon: '/logos/figma.svg' },
      { name: 'Jira', icon: '/logos/jira.svg' },
      { name: 'Redmine', icon: '/logos/redmine.svg' },
    ],
  },
];

const TechStack = () => {
  return (
    <Section title="Tech Stack" aria-label="Tech Stack Section">
      <div className="flex flex-col gap-6">
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs text-foreground/30 uppercase tracking-widest mb-3">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-200"
                >
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain drop-shadow-[0_1px_7px_rgba(255,255,255,0.4)]"
                      draggable={false}
                    />
                  </div>
                  <span className="text-xs text-foreground/60 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
