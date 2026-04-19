const Section: React.FC<{
  title?: string;
  'aria-label'?: string;
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}> = ({ title, children, 'aria-label': ariaLabel, className = '', ref }) => {
  return (
    <section
      id={title?.replace(/\s+/g, '')}
      aria-label={ariaLabel}
      className={`w-full p-8 ${className}`}
      ref={ref}
    >
      {title ? (
        <div className="flex items-center gap-3 mb-7">
          <span className="block w-[1px] h-6 rounded-full flex-shrink-0 bg-white/20" />
          <h2 className="text-base font-bold uppercase tracking-[0.18em] text-foreground/80">
            {title}
          </h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      ) : null}
      {children ?? <span>Section</span>}
    </section>
  );
};

export default Section;
