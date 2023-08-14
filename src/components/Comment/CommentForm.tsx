import { useAuth, useCommentForm, useCommentSub } from '@/hooks';
import { cn } from '@/utils';
import { useParams } from 'react-router-dom';
import { CommentTextArea } from './CommentTextArea';
import { CommentCheckbox } from './CommentCheckbox';
import { CommentInput } from './CommentInput';

export const CommentForm = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoggedIn } = useAuth();
  const { isConnected } = useCommentSub(id);
  const {
    comment,
    onCommentChange,
    sendComment,
    onEnterPress,
    guestMode,
    toggleGuestMode,
    onUsernameChange,
    username,
    usernameError,
  } = useCommentForm(id);

  const btnText = isConnected ? 'Send' : 'Connecting...';

  const usernameElement = guestMode ? (
    <CommentInput
      username={username}
      onChange={onUsernameChange}
      onEnterPress={onEnterPress}
      error={usernameError}
    />
  ) : null;

  const checkboxElement = isLoggedIn ? (
    <CommentCheckbox onChange={toggleGuestMode} checked={guestMode} />
  ) : null;

  return (
    <div className="mt-4 px-2 sm:px-5 py-3">
      {usernameElement}
      <CommentTextArea
        comment={comment}
        onChange={onCommentChange}
        onEnterPress={onEnterPress}
      />
      {checkboxElement}
      <button
        className={cn('w-full btn btn-accent mt-4')}
        type="button"
        onClick={sendComment}
      >
        {btnText}
      </button>
    </div>
  );
};
