'use client';

import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import { useActiveSection } from '../contexts/ActiveSectionContext';

const Links = [
  { name: 'Tech Stack', href: '#TechStack' },
  { name: 'Experience', href: '#Experience' },
  { name: 'Projects', href: '#Projects' },
];

const DesktopMenu = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="hidden md:flex flex-col gap-1">
      {Links.map((link) => {
        const isActive = activeSection === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            className={
              `relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200` +
              (isActive ? ' font-bold' : 'font-normal')
            }
          >
            <span
              className={`block w-[1px] h-4 rounded-full flex-shrink-0 transition-all duration-300
                ${isActive ? 'bg-white/20 opacity-100' : 'opacity-0'}`}
            />
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-5 right-5 z-50 p-2 rounded-lg bg-[var(--sidebar-bg)]/80 backdrop-blur border border-[var(--border)] hover:bg-white/10 transition"
        aria-label="Menu"
      >
        {isOpen ? (
          <FaXmark className="h-5 w-5 text-white" />
        ) : (
          <IoMenu className="h-5 w-5 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed right-5 top-16 z-50 flex flex-col gap-1 p-2 rounded-xl bg-black/20 backdrop-blur-md shadow-lg border border-[var(--border)] min-w-[160px]">
          {Links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all'
                }
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navigation = () => {
  const { activeSection } = useActiveSection();

  return (
    <>
      <DesktopMenu activeSection={activeSection} />
      <MobileMenu />
    </>
  );
};

export default Navigation;
