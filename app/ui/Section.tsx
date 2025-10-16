import React from 'react'
import { FadeIn } from './FadeIn';

const Section: React.FC<{ id?: string; title?: string; 'aria-label'?: string; children?: React.ReactNode; className?: string }> = ({
    id,
    title,
    children,
    'aria-label': ariaLabel,
    className = '',
}) => {
    return (
        <FadeIn>
            <section id={id} aria-label={ariaLabel} className={`w-full card-glass ${className}`}>
                {title ? <h3 className="font-bold text-2xl mb-8">{title}</h3> : null}
                {children ?? <span>Section</span>}
            </section>
        </FadeIn>
    );
};

export default Section