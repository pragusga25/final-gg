import { useAuth, useCommentForm, useCommentSub } from '@/hooks';
import { cn } from '@/utils';
import { useParams } from 'react-router-dom';

export const CommentForm = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const { isLoggedIn } = useAuth();
  const { isConnected } = useCommentSub(id);
  const { comment, onChange, sendComment, onEnterPress } = useCommentForm(id);

  let btnText = 'Login to comment';
  let btnClassName = '';
  if (isLoggedIn) {
    btnText = isConnected ? 'Send' : 'Connecting...';
    btnClassName = isConnected ? 'loading' : 'btn-disabled';
  }

  return (
    <div className="mt-4 px-2 sm:px-5 py-3">
      <div>
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
            disabled={!isLoggedIn || !isConnected}
          />
        </div>

        <button
          className={cn('w-full btn btn-accent mt-4', btnClassName)}
          type="button"
          onClick={sendComment}
          disabled={!isLoggedIn || !isConnected}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};