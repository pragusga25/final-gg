import { Link } from 'react-router-dom';
import { NavbarRight } from './NavbarRight';

export const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 px-5 fixed z-50">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl">
          <img src="/logo.png" alt="logo" className="w-16 h-full -ml-2" />
        </Link>
      </div>
      <NavbarRight />
    </nav>
  );
};
