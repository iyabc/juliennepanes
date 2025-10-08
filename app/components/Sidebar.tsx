'use client'

import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Socials from './Socials'
import { Download, FileText, X } from 'lucide-react';

interface ResumeModalProps {
    open: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-[90%] max-w-4xl h-4/5 md:h-[90%] bg-background rounded-xl overflow-hidden shadow-2xl">
                <div className="flex justify-between items-center px-4 py-2 border-b border-border bg-background/90">
                    <h2 className="text-lg font-semibold">My Resume</h2>
                    <div className="flex gap-2">
                        <a
                            href="/Julienne Andrea Panes_Resume.pdf"
                            download
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-accent text-white hover:bg-accent-hover text-sm"
                        >
                            <Download className="h-4 w-4" />
                            Download
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md hover:bg-white/10 transition"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <iframe
                    src="/Julienne Andrea Panes_Resume.pdf"
                    title="Resume PDF Viewer"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

const ResumeButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="
          inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full
          bg-[var(--button)] from-accent to-accent-hover text-white font-medium\
          transition-all duration-300 text-md
          hover:translate-y-[-2px] hover:shadow-[var(--button-shadow-hover)]
          hover:cursor-pointer"
            >
                <FileText className="h-4 w-4" />
                View Resume
            </button>

            <ResumeModal open={open} onClose={() => setOpen(false)} />
        </>
    );
};

const Sidebar = () => {
    return (
        <div className='block md:flex md:flex-col  space-y-10 md:space-y-0 justify-between md:h-[80vh] card-glass'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-3xl'>Julienne Panes</h1>
                <h2 className='font-medium text-xl'>Software Developer</h2>
                <ResumeButton />
            </div>

            <Navigation />

            <Socials />
        </div>
    )
}

export default Sidebar
