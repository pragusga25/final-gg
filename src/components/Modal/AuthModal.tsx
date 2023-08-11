import { useAuthModal } from '@/hooks';
import { AuthForm } from '@/components/Form';
import { ContainerModal } from './ContainerModal';
import { cn } from '@/utils';

export const AuthModal = () => {
  const { isLoginActive, onLoginTabClick, onRegisterTabClick, closeBtnRef } =
    useAuthModal();

  const tabStyle = 'tab w-1/2 tab-bordered';
  return (
    <ContainerModal id="authModal" closeBtnRef={closeBtnRef}>
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
      <AuthForm isLogin={isLoginActive} />
    </ContainerModal>
  );
};
