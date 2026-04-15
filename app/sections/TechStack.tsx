import Image from 'next/image';
import Section from '../ui/Section';

type TechStackListType = {
    name: string;
    icon: string;
};

const TechStackList: TechStackListType[] = [
    { name: "Java", icon: "/logos/java.svg" },
    { name: "Java Spring", icon: "/logos/spring.svg" },
    { name: "Angular", icon: "/logos/angular.svg" },
    { name: "Next.js", icon: "/logos/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/logos/tailwindcss.svg" },
    { name: "React Native", icon: "/logos/reactnative.svg" },
    { name: "PostgreSQL", icon: "/logos/pgsql.svg" },
    { name: "MySQL", icon: "/logos/mysql.svg" },
    { name: "Figma", icon: "/logos/figma.svg" },
    { name: "Git", icon: "/logos/git.svg" },
    { name: "Jira", icon: "/logos/jira.svg" },
    { name: "Redmine", icon: "/logos/redmine.svg" },
    { name: "AWS", icon: "/logos/aws.svg" }
];

const TechStack = () => {
    return (
        <Section id="TechStack" title="Tech Stack" aria-label="Tech Stack Section" className='flex-1'>
            <ul className='flex flex-wrap gap-4 justify-center items-center mx-auto'>
                {TechStackList.map((tech) => (
                    <li key={tech.name} tabIndex={0} className='relative group flex w-8 h-8 md:w-14 md:h-14 justify-between items-center' >
                        <Image src={tech.icon} alt={`${tech.name} logo`} className='absolute' draggable={false} fill />
                        <div
                            className="absolute bottom-full left-1/2 
                       transform -translate-x-1/2 mb-2 
                       w-max px-2 py-1 text-sm text-white
                       bg-background rounded shadow-lg 
                       opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                            <strong>{tech.name}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default TechStack
