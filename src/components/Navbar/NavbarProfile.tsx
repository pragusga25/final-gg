import { useLogout, useMe } from '@/hooks';
import { Link } from 'react-router-dom';
import { Avatar } from '@/components/Avatar';

export const NavbarProfile = () => {
  const { data, isLoading } = useMe();
  const logout = useLogout();

  if (isLoading) return null;

  const image = data!.image;
  const username = data!.username;
  const uAvatar = data!.uAvatar;

  return (
    <div className="flex-none">
      <Link to={`/${username}`} className="mr-2 text-right text-teal-400">
        <p className="font-semibold text-sm">@{username}</p>
        <p className="text-xs text-teal-500">Your Account</p>
      </Link>
      <div className="dropdown dropdown-end">
        <Avatar
          uAvatar={uAvatar}
          wrapperClassName="placeholder cursor-pointer"
          className="w-10 rounded-full ring ring-teal-400"
          image={image}
          tabIndex={0}
        />
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
