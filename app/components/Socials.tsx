import { Github, Linkedin } from "lucide-react"

type SocialsListType = {
    name: string,
    icon?: React.ReactNode,
    href: string,
}

const SocialsList: SocialsListType[] = [
    {
        name: 'GitHub',
        icon: <Github />,
        href: '',
    },
    {
        name: 'LinkedIn',
        icon: <Linkedin />,
        href: '',
    },
]

const Socials = () => {
    return (
        <ul className="flex gap-4 w-full justify-end md:justify-start">
            {
                SocialsList.map((social) => (
                    <li key={social.name}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                            {social.icon ? social.icon : social.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Socials
