import { useAuthModal } from '@/hooks';
import { AuthForm } from './AuthForm';
import { Modal } from '@/components/Modal';
import { AuthModalTabs } from './AuthModalTabs';

export const AuthModal = () => {
  const { isLoginActive, closeBtnRef } = useAuthModal();

  return (
    <Modal id="authModal" className="max-w-md" closeBtnRef={closeBtnRef}>
      <AuthModalTabs />
      <AuthForm isLogin={isLoginActive} />
    </Modal>
  );
};
