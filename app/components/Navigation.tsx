'use client'

import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useEffect, useState } from "react"

const Links = [
    { name: 'Tech Stack', href: '#TechStack' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Projects', href: '#Projects' },
]

const DesktopMenu = ({ activeHash }: { activeHash: string }) => {
    return (
        <div className="hidden md:flex flex-col gap-6 text-center">
            {Links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={
                        activeHash === link.href ? "text-accent" : "text-white"
                    }
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

const MobileMenu = ({ activeHash }: { activeHash: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="relative md:hidden">
            <button
                onClick={toggleMenu}
                className="fixed top-5 right-5 z-50 p-2 rounded hover:bg-white/10 transition"
                aria-label="Menu"
            >
                {isOpen ? <CloseIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
            </button>

            {isOpen && (
                <div className="fixed right-5 top-16 z-50 flex flex-col gap-4 p-4 rounded-lg bg-background/90 backdrop-blur-md shadow-lg border border-border min-w-[150px]">
                    {Links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-2 py-1 rounded hover:bg-white/10 transition ${activeHash === link.href ? "text-accent" : "text-white"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

const Navigation = () => {
    const [activeHash, setActiveHash] = useState<string>("");

    useEffect(() => {
        const sections = Links.map(link =>
            document.querySelector(link.href) as HTMLElement
        ).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) {
                    setActiveHash(`#${visible[0].target.id}`);
                }
            },
            {
                rootMargin: '-20% 0px -60% 0px', // trigger earlier
                threshold: [0.1, 0.25, 0.5],     // fires as more of section is visible
            }
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);


    return (
        <>
            <DesktopMenu activeHash={activeHash} />
            <MobileMenu activeHash={activeHash} />
        </>
    )
}

export default Navigation
