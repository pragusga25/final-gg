import { useAuthForm } from '@/hooks';
import { cn } from '@/utils';
import { FC } from 'react';

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
    errors: { username: usernameError, password: passwordError },
  } = useAuthForm(isLogin);

  return (
    <div className="w-full">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full"
          value={username}
          onChange={onUsernameChange}
        />
        {!!usernameError && (
          <span className="text-sm text-left ml-1 mt-2 text-red-500">
            {usernameError}
          </span>
        )}
      </div>

      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-accent w-full"
          value={password}
          onChange={onPasswordChange}
        />
        {!!passwordError && (
          <label className="label">
            <span className="label-text-alt ml-1 mt-2 text-red-500">
              {passwordError}
            </span>
          </label>
        )}
      </div>

      <button
        type="button"
        className={cn(
          'w-full mt-6 btn btn-outline btn-success',
          disableBtn && 'btn-disabled',
          isLoading && 'loading'
        )}
        onClick={onSubmit}
        disabled={disableBtn}
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    </div>
  );
};
