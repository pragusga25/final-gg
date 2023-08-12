import { useAuthForm } from '@/hooks';
import { cn } from '@/utils';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

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
      <Input
        value={username}
        onChange={onUsernameChange}
        onKeyDown={onEnterPress}
        error={usernameError}
        label="Username"
      />

      <Input
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

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
  label: string;
  className?: string;
  type?: 'text' | 'password';
};

const Input: FC<InputProps> = ({
  value,
  onChange,
  onKeyDown,
  error,
  label,
  className,
  type = 'text',
}) => {
  const errorLabel = error ? (
    <label className="label">
      <span className="label-text-alt ml-1 mt-2 text-red-500">{error}</span>
    </label>
  ) : null;

  return (
    <div className={cn('form-control', className)}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder="Type here"
        className="input input-bordered input-accent w-full"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {errorLabel}
    </div>
  );
};
