import { useAuthForm } from '@/hooks';
import { cn } from '@/utils';
import { FC } from 'react';
import { AuthInput } from './AuthInput';

type AuthFormProps = {
  isLogin: boolean;
};

export const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
  const {
    creds: { username, password },
    onPasswordChange,
    onUsernameChange,
    onSubmit,
    disableBtn,
    isLoading,
    onEnterPress,
    errors: { username: usernameError, password: passwordError },
  } = useAuthForm(isLogin);

  return (
    <div className="w-full">
      <AuthInput
        value={username}
        onChange={onUsernameChange}
        onKeyDown={onEnterPress}
        error={usernameError}
        label="Username"
      />

      <AuthInput
        value={password}
        onChange={onPasswordChange}
        onKeyDown={onEnterPress}
        error={passwordError}
        label="Password"
        className="mt-4"
        type="password"
      />

      <div className="mt-5">
        <button
          type="button"
          className={cn(
            'w-full btn btn-outline btn-success',
            disableBtn && 'btn-disabled',
            isLoading && 'loading'
          )}
          onClick={onSubmit}
          disabled={disableBtn}
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
};
