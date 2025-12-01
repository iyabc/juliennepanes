import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

type SocialsListType = {
    name: string,
    icon?: React.ReactNode,
    href: string,
}

const SocialsList: SocialsListType[] = [
    {
        name: 'GitHub',
        icon: <Github />,
        href: 'https://github.com/iyabc',
    },
    {
        name: 'LinkedIn',
        icon: <Linkedin />,
        href: 'https://www.linkedin.com/in/julienne-andrea-panes-99456024a',
    },
    {
        name: 'Mail',
        icon: <Mail />,
        href: 'mailto:juliennepanes@gmail.com?subject=Software%20Developer',
    },
]

const Socials = () => {
    return (
        <ul className="flex gap-4 w-full justify-end md:justify-start">
            {
                SocialsList.map((social) => (
                    <li key={social.name}>
                        <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform transition duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-[var(--button-shadow-hover)]
                            hover:cursor-pointer"
                        >
                            {social.icon ? social.icon : social.name}
                        </Link>
                    </li>
                ))
            }
        </ul >
    )
}

export default Socials
