import { ChangeEvent, KeyboardEvent, FC } from 'react';

type CommentInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  username: string;
  onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => unknown;
  error?: string;
};

export const CommentInput: FC<CommentInputProps> = ({
  onChange,
  username,
  onEnterPress,
  error,
}) => {
  const errorLabel = error ? (
    <label className="label">
      <span className="label-text-alt ml-1 mt-2 text-red-500">{error}</span>
    </label>
  ) : null;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Username</span>
      </label>
      <input
        value={username}
        onChange={onChange}
        placeholder="Type your username"
        className="textarea textarea-bordered textarea-accent w-full"
        onKeyDown={onEnterPress}
        max={10}
      />
      {errorLabel}
    </div>
  );
};
