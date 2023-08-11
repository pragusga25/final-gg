import {
  useAuth,
  useCommentModal,
  useCommentSub,
  useCommentsQuery,
} from '@/hooks';
import { ContainerModal } from './ContainerModal';
import { cn } from '@/utils';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CommentModal = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const { closeBtnRef, lastCommentRef, scrollToLastComment } =
    useCommentModal();

  const { isLoggedIn } = useAuth();

  const { data, isLoading } = useCommentsQuery(id);
  const [comment, setComment] = useState('');

  const { addComment, isConnected } = useCommentSub(id);

  useEffect(() => {
    scrollToLastComment();
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  let btnText = 'Login to comment';
  if (isLoggedIn) {
    btnText = isConnected ? 'Send' : 'Connecting...';
  }

  return (
    <ContainerModal
      id="commentModal"
      className="max-w-3xl"
      closeBtnRef={closeBtnRef}
      modalBoxClassName="overflow-hidden flex flex-col"
    >
      <div className="overflow-y-auto" id="comments">
        {data.map(
          ({ id, comment, username, isLastComment, showTime, isMine }) => {
            return (
              <div
                className={cn('chat', isMine ? 'chat-end' : 'chat-start')}
                key={id}
                ref={isLastComment ? lastCommentRef : null}
              >
                {/* <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  
                </div>
              </div> */}
                <div className="avatar placeholder chat-image">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-sm">
                      {username.toUpperCase().slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="chat-header">
                  {username}
                  <time className="text-xs opacity-50 ml-2">{showTime}</time>
                </div>
                <div className="chat-bubble">{comment}</div>
              </div>
            );
          }
        )}
      </div>

      <div className="shadow-lg mt-4 px-2 sm:px-5 py-3">
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your comment"
              className="textarea textarea-bordered textarea-accent w-full"
            />
          </div>

          <button
            className={cn(
              'w-full btn btn-accent mt-4',
              !isLoggedIn && 'cursor-not-allowed'
            )}
            type="button"
            onClick={() => {
              if ((comment.trim(), length === 0)) return;
              addComment(comment);
              setComment('');
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </ContainerModal>
  );
};
