import Details from './components/Details';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col bg-gradient-to-b min-h-screen px-4 items-center xl:px-44 xl:py-20">
      <aside className="w-full md:w-1/3 lg:w-1/4 md:pb-0 py-6">
        <Sidebar />
      </aside>
      <Details />
    </div>
  );
}
