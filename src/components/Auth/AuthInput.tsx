import { cn } from '@/utils';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

type AuthInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
  label: string;
  className?: string;
  type?: 'text' | 'password';
};

export const AuthInput: FC<AuthInputProps> = ({
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
