import { ChangeEvent, KeyboardEvent, FC } from 'react';

type CommentTextAreaProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => unknown;
  comment: string;
  onEnterPress: (e: KeyboardEvent<HTMLTextAreaElement>) => unknown;
};

export const CommentTextArea: FC<CommentTextAreaProps> = ({
  onChange,
  comment,
  onEnterPress,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Comment</span>
      </label>
      <textarea
        value={comment}
        onChange={onChange}
        placeholder="Type your comment"
        className="textarea textarea-bordered textarea-accent w-full"
        onKeyDown={onEnterPress}
      />
    </div>
  );
};
