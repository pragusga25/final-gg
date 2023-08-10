import { useAuthModal } from '@/hooks';
import { AuthForm } from '@/components/Form';

export const AuthModal = () => {
  const { isLoginActive, onLoginTabClick, onRegisterTabClick, closeBtnRef } =
    useAuthModal();

  return (
    <dialog id="authModal" className="modal max-w-md mx-auto">
      <form method="dialog" className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          ref={closeBtnRef}
        >
          ✕
        </button>
        <div className="tabs w-full mb-2">
          <a
            className={`tab w-1/2 tab-bordered ${
              isLoginActive ? 'tab-active' : ''
            }`}
            onClick={onLoginTabClick}
          >
            Login
          </a>
          <a
            className={`tab w-1/2 tab-bordered ${
              isLoginActive ? '' : 'tab-active'
            }`}
            onClick={onRegisterTabClick}
          >
            Register
          </a>
        </div>
        <AuthForm isLogin={isLoginActive} />
      </form>
    </dialog>
  );
};
