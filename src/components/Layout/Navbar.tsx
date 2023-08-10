import { Link } from 'react-router-dom';
import { NavbarRight } from './NavbarRight';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-5">
      <div className="flex-1">
        <a href="https://pragusga.com" target="_blank">
          <img src="/logo.png" alt="logo" className="w-16 h-full mr-2" />
        </a>
        <Link to="/" className="normal-case text-xl">
          Home
        </Link>
      </div>
      <NavbarRight />
    </div>
  );
};
