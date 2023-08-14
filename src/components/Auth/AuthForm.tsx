import { FC } from 'react';
import { AuthLoginForm } from './AuthLoginForm';
import { AuthRegisterForm } from './AuthRegisterForm';

type AuthFormProps = {
  isLogin: boolean;
};

export const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
  if (isLogin) return <AuthLoginForm />;
  return <AuthRegisterForm />;
};
