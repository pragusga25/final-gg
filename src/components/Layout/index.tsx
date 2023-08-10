import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] mx-auto">
        <main className="w-full pt-8 mx-auto h-full px-5 tn:max-w-lg md:max-w-4xl bg:max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
