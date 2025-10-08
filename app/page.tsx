import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col bg-gradient-to-b min-h-screen px-4 items-center xl:px-44 xl:py-20">
      <aside className="w-full md:w-1/3 lg:w-1/4 md:pb-0 py-6">
        <Sidebar />
      </aside>
      <main className="flex flex-col flex-1 h-[80vh] px-0 md:px-4 py-2 md:pt-4 pb-6 overflow-auto space-y-8">
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
