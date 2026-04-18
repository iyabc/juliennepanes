import Details from './components/Details';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono selection:bg-white/20 selection:text-white md:cursor-none">
      {/* Subtle grid bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="flex md:justify-center md:items-center w-screen h-screen">
        <div
          className="relative z-[1] flex flex-col md:flex-row md:h-[80vh] md:w-[80vw] md:overflow-hidden mx-auto rounded-lg border border-white/[0.06] bg-black/30
          transition-transform duration-300 hover:scale-[1.02] hover:shadow-[var(--button-shadow-hover)] "
        >
          <aside className="w-full md:w-56 lg:w-64 xl:w-72 md:flex-shrink-0 h-full absolute md:top-0 sidebar-bg">
            <Sidebar />
          </aside>
          <main className="flex-1 h-full md:overflow-auto">
            <Details />
          </main>
        </div>
      </div>
    </div>
  );
}
