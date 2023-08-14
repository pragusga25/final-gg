import { cn } from '@/utils';
import { FC, ChangeEvent, KeyboardEvent } from 'react';
import { AuthInput } from './AuthInput';
import { Credentials } from '@/types';

type AuthFormTemplateProps = {
  creds: Credentials;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  onSubmit: () => unknown;
  disableBtn: boolean;
  isLoading: boolean;
  onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => unknown;
  errors?: Credentials;
  btnText: string;
};

export const AuthFormTemplate: FC<AuthFormTemplateProps> = (props) => {
  const {
    creds: { username, password },
    onPasswordChange,
    onUsernameChange,
    onSubmit,
    disableBtn,
    isLoading,
    onEnterPress,
    errors,
    btnText,
  } = props;

  return (
    <div className="w-full">
      <AuthInput
        value={username}
        onChange={onUsernameChange}
        onKeyDown={onEnterPress}
        error={errors?.username}
        label="Username"
      />
      <AuthInput
        value={password}
        onChange={onPasswordChange}
        onKeyDown={onEnterPress}
        error={errors?.password}
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
          {btnText}
        </button>
      </div>
    </div>
  );
};
