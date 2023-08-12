import { useAuthModal } from '@/hooks';
import { AuthForm } from './AuthForm';
import { Modal } from '@/components/Modal';
import { cn } from '@/utils';

export const AuthModal = () => {
  const { isLoginActive, onLoginTabClick, onRegisterTabClick, closeBtnRef } =
    useAuthModal();

  const tabStyle = 'tab w-1/2 tab-bordered';
  return (
    <Modal id="authModal" className="max-w-md" closeBtnRef={closeBtnRef}>
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
    </Modal>
  );
};
