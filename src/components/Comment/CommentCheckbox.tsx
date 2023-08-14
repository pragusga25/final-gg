import { ChangeEvent, FC } from 'react';

type CommentCheckboxProps = {
  onChange: (e?: ChangeEvent<HTMLInputElement>) => unknown;
  checked: boolean;
};

export const CommentCheckbox: FC<CommentCheckboxProps> = ({
  onChange,
  checked,
}) => {
  return (
    <div className="form-control mt-1">
      <label className="cursor-pointer label justify-start w-fit">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox checkbox-accent"
        />
        <span className="label-text ml-2">Guest mode</span>
      </label>
    </div>
  );
};
