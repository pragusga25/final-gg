import { useAuth, useLogout } from '@/hooks';
import { cn } from '@/utils';

export const NavbarProfile = () => {
  const {
    auth: { user },
  } = useAuth();

  const logout = useLogout();

  const usernamePlaceholder = user!.username.toUpperCase().slice(0, 2);
  const image = user!.image;
  const username = user!.username;

  const avatar = !!image ? (
    <div className="w-10 rounded-full">
      <img src={image} />
    </div>
  ) : (
    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
      <span className="text-sm">{usernamePlaceholder}</span>
    </div>
  );

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
            'avatar btn btn-ghost btn-circle',
            !image && 'placeholder'
          )}
        >
          {avatar}
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li onClick={logout}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
