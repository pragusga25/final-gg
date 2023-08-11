import { cn } from '@/utils';
import { forwardRef } from 'react';

type CommentItemProps = {
  comment: string;
  username: string;
  isLastComment: boolean;
  showTime: string;
  isMine: boolean;
  uAvatar: string;
};

export const CommentItem = forwardRef<HTMLDivElement, CommentItemProps>(
  (props, ref) => {
    const { comment, username, isLastComment, showTime, isMine, uAvatar } =
      props;

    return (
      <div
        className={cn('chat', isMine ? 'chat-end' : 'chat-start')}
        ref={isLastComment ? ref : null}
      >
        {/* <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  
                </div>
              </div> */}
        <div className="avatar placeholder chat-image">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
            <span className="text-sm">{uAvatar}</span>
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
);
