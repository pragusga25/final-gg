import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="https://pragusga.com" target="_blank">
          <img src="/logo.png" alt="logo" className="w-16 h-full mr-2" />
        </a>
        <Link to="/" className="normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 shadow-md">
//   <div className="flex items-center flex-shrink-0 text-white">
//     <img src="/logo.png" alt="logo" className="w-16 h-full mr-2" />
//     <Link to="/">
//       <span className="font-semibold text-xl tracking-tight">Home</span>
//     </Link>
//   </div>
// </nav>
