const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`skeleton-shimmer rounded ${className}`} />
);

const SidebarSkeleton = () => (
  <div className="flex flex-col justify-between h-full px-7 py-9 md:py-12">
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-44" />
      <Skeleton className="h-3 w-36" />
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-10 w-full mt-1" />
    </div>

    <div className="flex-1 flex flex-col justify-center gap-2 py-10">
      <Skeleton className="h-8 w-28" />
      <Skeleton className="h-8 w-28" />
      <Skeleton className="h-8 w-28" />
    </div>

    <div className="border-t border-white/[0.07] pt-5 flex gap-3">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-5 w-5" />
    </div>
  </div>
);

const SectionTitleSkeleton = () => (
  <div className="flex items-center gap-3 mb-7">
    <div className="block w-[3px] h-6 rounded-full bg-white/[0.07]" />
    <Skeleton className="h-4 w-28" />
    <div className="h-px flex-1 bg-white/[0.04]" />
  </div>
);

const DetailsSkeleton = () => (
  <div className="flex flex-col h-full px-4 md:px-6 py-6 pb-12 space-y-5">
    {/* About */}
    <section className="w-full p-8">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/6" />
      </div>
    </section>

    {/* Tech Stack */}
    <section className="w-full p-8">
      <SectionTitleSkeleton />
      <div className="flex flex-col gap-6">
        {[5, 3, 5].map((count, i) => (
          <div key={i}>
            <Skeleton className="h-3 w-40 mb-3" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: count }).map((_, j) => (
                <Skeleton key={j} className="h-7 w-20" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Experience */}
    <section className="w-full p-8">
      <SectionTitleSkeleton />
      <div className="flex flex-col gap-6 pl-9">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-28" />
          </div>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section className="w-full p-8">
      <SectionTitleSkeleton />
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-36 w-full md:h-48 md:w-[calc(50%-8px)] xl:w-[calc(33.33%-12px)]"
          />
        ))}
      </div>
    </section>
  </div>
);

const loading = () => {
  return (
    <div className="min-h-screen bg-black/70 text-white font-mono">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="flex md:justify-center md:items-center w-screen h-screen">
        <div className="relative z-[1] flex flex-col md:flex-row md:h-[80vh] md:w-[80vw] md:overflow-hidden mx-auto rounded-lg border border-white/[0.06] bg-black/40">
          <aside className="w-full md:w-56 lg:w-64 xl:w-72 md:flex-shrink-0 h-full absolute md:top-0 sidebar-bg">
            <SidebarSkeleton />
          </aside>
          <main className="flex-1 h-full md:overflow-auto">
            <DetailsSkeleton />
          </main>
        </div>
      </div>
    </div>
  );
};

export default loading;
