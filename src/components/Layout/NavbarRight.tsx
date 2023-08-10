import { useAuth, useAuthModal, useLogout } from '@/hooks';
import { AuthModal } from '@/components/AuthModal';
import { cn } from '@/utils';

export const NavbarRight = () => {
  const {
    isLoggedIn,
    auth: { user },
  } = useAuth();
  const { onOpen } = useAuthModal();
  const logout = useLogout();

  if (!isLoggedIn)
    return (
      <>
        <button className="btn btn-accent px-6" onClick={onOpen}>
          Login
        </button>
        <AuthModal />
      </>
    );

  const usernamePlaceholder = user!.username.toUpperCase().slice(0, 2);
  const image = user!.image;

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className={cn(
            'avatar btn btn-ghost btn-circle',
            !image && 'placeholder'
          )}
        >
          {!!image && (
            <div className="w-10 rounded-full">
              <img src={image} />
            </div>
          )}
          {!image && (
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <span className="text-sm">{usernamePlaceholder}</span>
            </div>
          )}
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
