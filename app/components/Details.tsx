'use client';

import { FaChevronDown } from 'react-icons/fa6';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import TechStack from '../sections/TechStack';
import { useEffect, useRef, useState } from 'react';

const Details = () => {
  const divRef = useRef<HTMLElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkBottom = (el: HTMLElement) => {
    setIsAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight <= 5);
  };

  useEffect(() => {
    if (divRef.current) checkBottom(divRef.current);
  }, []);

  const scrollToBottom = () => {
    divRef.current?.scrollTo({ top: divRef.current.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative flex-1">
      <main
        ref={divRef}
        onScroll={(e) => checkBottom(e.currentTarget)}
        className="flex flex-col max-h-full md:h-[83vh] px-0 md:px-4 py-2 md:pt-4 pb-6 overflow-auto space-y-8"
      >
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <button
        onClick={scrollToBottom}
        className={`absolute bottom-0 left-1/2 w-8 h-8 animate-bounce transition-opacity duration-200
					hover:cursor-pointer hidden md:block ${isAtBottom ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <FaChevronDown size={32} color="white" fontWeight="black" />
      </button>
    </div>
  );
};

export default Details;
