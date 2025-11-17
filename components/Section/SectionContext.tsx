"use client";
import React, { createContext, useContext, useState } from 'react';

type Section = 'all' | 'Home' | 'Services' | 'Education' | 'Projects' | 'Skills' | 'Contacts';

type SectionContextType = {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<Section>('all');

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error('useSection must be used within SectionProvider');
  return ctx;
};

export type { Section };
