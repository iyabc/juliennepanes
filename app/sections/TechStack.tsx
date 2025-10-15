import Image from 'next/image';
import Section from '../ui/Section';

type TechStackListType = {
    name: string;
    description: string;
    icon: string;
};

const TechStackList: TechStackListType[] = [
    {
        name: "Java",
        description: "Proficient in Java programming for building scalable applications.",
        icon: "/logos/java.svg"
    },
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
        name: "React Native",
        description: "Experienced in building cross-platform mobile applications with React Native, ensuring native performance and seamless user experiences on both iOS and Android.",
        icon: "/logos/reactnative.svg"
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
        name: "Figma",
        description: "Experienced in UI/UX design and prototyping using Figma.",
        icon: "/logos/figma.svg"
    },
    {
        name: "Git",
        description: "Proficient in version control and collaboration using Git.",
        icon: "/logos/git.svg"
    },
    {
        name: "Jira",
        description: "Experienced in project management and issue tracking using Jira.",
        icon: "/logos/jira.svg"
    },
    {
        name: "Redmine",
        description: "Skilled in project tracking and management using Redmine.",
        icon: "/logos/redmine.svg"
    },
    {
        name: "AWS",
        description: "Proficient in deploying and managing applications on Amazon Web Services (AWS).",
        icon: "/logos/aws.svg"
    }
];

const TechStack = () => {
    return (
        <Section id="TechStack" title="Tech Stack" aria-label="Tech Stack Section" className='flex-1'>
            <ul className='flex flex-wrap gap-4 justify-center items-center mx-auto'>
                {TechStackList.map((tech, index) => (
                    <li key={index} tabIndex={0} className='relative group flex w-8 h-8 md:w-14 md:h-14 justify-between items-center' >
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
