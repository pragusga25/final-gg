import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type Auth = {
  accessToken?: string;
  user?: {
    id: string;
    username: string;
    image?: string;
  };
};

type AuthContextType = {
  auth: Auth;
  setAuth: Dispatch<SetStateAction<Auth>>;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  auth: {},
  setAuth: () => {},
  isLoggedIn: false,
});

export const AuthProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({});
  const isLoggedIn = !!auth.accessToken;

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
