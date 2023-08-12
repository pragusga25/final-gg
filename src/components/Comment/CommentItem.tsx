import { cn } from '@/utils';
import { forwardRef } from 'react';
import { CommentAvatar } from './CommentAvatar';

type CommentItemProps = {
  comment: string;
  username: string;
  showTime: string;
  isMine: boolean;
  uAvatar: string;
};

export const CommentItem = forwardRef<HTMLDivElement, CommentItemProps>(
  (props, ref) => {
    const { comment, username, showTime, isMine, uAvatar } = props;

    return (
      <div className={cn('chat', isMine ? 'chat-end' : 'chat-start')} ref={ref}>
        <CommentAvatar uAvatar={uAvatar} />
        <div className="chat-header">
          {username}
          <time className="text-xs opacity-50 ml-2">{showTime}</time>
        </div>
        <div className="chat-bubble">{comment}</div>
      </div>
    );
  }
);
