import { useLogout, useMe } from '@/hooks';
import { cn } from '@/utils';
import { Link } from 'react-router-dom';
import { Avatar } from '../Avatar';

export const NavbarProfile = () => {
  const { data, isLoading } = useMe();
  if (isLoading) return null;

  const logout = useLogout();

  const image = data!.image;
  const username = data!.username;
  const uAvatar = data!.uAvatar;

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
