import { useAuthModal } from '@/hooks';
import { cn } from '@/utils';

export const AuthModalTabs = () => {
  const { isLoginActive, onLoginTabClick, onRegisterTabClick } = useAuthModal();
  const tabStyle = 'tab w-1/2 tab-bordered';

  return (
    <div className="tabs w-full mb-2">
      <a
        className={cn(tabStyle, isLoginActive && 'tab-active')}
        onClick={onLoginTabClick}
      >
        Login
      </a>
      <a
        className={cn(tabStyle, !isLoginActive && 'tab-active')}
        onClick={onRegisterTabClick}
      >
        Register
      </a>
    </div>
  );
};
