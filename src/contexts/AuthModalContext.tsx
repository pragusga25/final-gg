import {
  FC,
  ReactNode,
  RefObject,
  createContext,
  useRef,
  useState,
} from 'react';

type WindowType = Window &
  typeof globalThis & {
    authModal: {
      showModal: () => unknown;
    };
  };

type AuthModalContextType = {
  isLoginActive: boolean;
  closeBtnRef: RefObject<HTMLButtonElement>;
  onClose: () => unknown;
  onOpen: () => unknown;
  onLoginTabClick: () => unknown;
  onRegisterTabClick: () => unknown;
};

export const AuthModalContext = createContext<AuthModalContextType>({
  isLoginActive: true,
  closeBtnRef: { current: null },
  onClose: () => {},
  onOpen: () => {},
  onLoginTabClick: () => {},
  onRegisterTabClick: () => {},
});

export const AuthModalProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const onOpen = () => {
    (window as WindowType).authModal.showModal();
  };

  const onClose = () => {
    closeBtnRef.current?.click();
  };

  const onRegisterTabClick = () => setIsLoginActive(false);
  const onLoginTabClick = () => setIsLoginActive(true);

  const value = {
    isLoginActive,
    closeBtnRef,
    onClose,
    onOpen,
    onLoginTabClick,
    onRegisterTabClick,
  };

  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
};
