'use client';
import { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext<{
  activeSection: string;
  setActiveSection: (section: string) => void;
} | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context)
    throw new Error(
      'useActiveSection must be used inside ActiveSectionProvider',
    );
  return context;
}
