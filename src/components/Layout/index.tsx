import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-[1280px] min-h-screen mx-auto">
        <main className="w-full pt-24 mx-auto min-h-screen px-5 tn:max-w-lg md:max-w-4xl bg:max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
