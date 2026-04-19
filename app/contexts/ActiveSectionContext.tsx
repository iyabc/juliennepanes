'use client';
import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

const SECTION_IDS = ['TechStack', 'Experience', 'Projects'];

const ActiveSectionContext = createContext<{
  activeSection: string;
  setScrollContainer: (el: HTMLElement | null) => void;
} | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('');
  const containerRef = useRef<HTMLElement | null>(null);

  const computeActive = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const targetY = containerRect.top + containerRect.height * 0.4;

    let active = '';
    let maxTop = -Infinity;

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= targetY && top > maxTop) {
        maxTop = top;
        active = `#${id}`;
      }
    }

    if (!active) active = `#${SECTION_IDS[0]}`;
    setActiveSection(active);
  }, []);

  const setScrollContainer = useCallback(
    (el: HTMLElement | null) => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', computeActive);
      }
      containerRef.current = el;
      if (el) {
        el.addEventListener('scroll', computeActive, { passive: true });
        computeActive();
      }
    },
    [computeActive],
  );

  useEffect(() => {
    return () => {
      containerRef.current?.removeEventListener('scroll', computeActive);
    };
  }, [computeActive]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setScrollContainer }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) throw new Error('useActiveSection must be used inside ActiveSectionProvider');
  return context;
}
