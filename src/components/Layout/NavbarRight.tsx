import { useAuth, useAuthModal } from '@/hooks';
import { AuthModal } from '@/components/Modal';
import { NavbarProfile } from './NavbarProfile';

export const NavbarRight = () => {
  const { isLoggedIn } = useAuth();
  const { onOpen } = useAuthModal();

  if (!isLoggedIn)
    return (
      <>
        <button className="btn btn-accent px-6" onClick={onOpen}>
          Login
        </button>
        <AuthModal />
      </>
    );

  return <NavbarProfile />;
};
