import { useAuth, useLogout } from '@/hooks';
import { cn } from '@/utils';
import { Link } from 'react-router-dom';
import { Avatar } from '../Avatar';

export const NavbarProfile = () => {
  const {
    auth: { user },
  } = useAuth();

  const logout = useLogout();

  const image = user!.image;
  const username = user!.username;
  const uAvatar = username.toUpperCase().slice(0, 2);

  return (
    <div className="flex-none">
      <div className="mr-2 text-right">
        <p className="font-semibold text-sm">{username}</p>
        <p className="text-xs text-slate-300">Your Account</p>
      </div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className={cn(
            'avatar btn btn-ghost ring btn-circle',
            !image && 'placeholder'
          )}
        >
          <Avatar uAvatar={uAvatar} image={image} />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={`/${username}`} className="justify-between">
              Profile
            </Link>
          </li>
          <li onClick={logout}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
