import { cn } from '@/utils';
import { forwardRef } from 'react';
import { CommentAvatar } from './CommentAvatar';
import { Link } from 'react-router-dom';
import { useDeleteComment } from '@/hooks';

type CommentItemProps = {
  comment: string;
  username: string;
  showTime: string;
  isMine: boolean;
  uAvatar: string;
  image?: string;
  id: string;
};

export const CommentItem = forwardRef<HTMLDivElement, CommentItemProps>(
  (props, ref) => {
    const { comment, username, showTime, isMine, uAvatar, image, id } = props;

    const { onDelete } = useDeleteComment();

    const delEl = isMine ? (
      <div
        className="chat-footer cursor-pointer link hover:link-error opacity-80"
        onClick={() => onDelete(id)}
      >
        Delete
      </div>
    ) : null;

    return (
      <div className={cn('chat', isMine ? 'chat-end' : 'chat-start')} ref={ref}>
        <CommentAvatar uAvatar={uAvatar} image={image} />
        <div className="chat-header">
          <Link to={`/${username}`} className="link link-accent">
            @{username}
          </Link>
          <time className="text-xs opacity-50 ml-2">{showTime}</time>
        </div>
        <div className="chat-bubble">{comment}</div>
        {delEl}
      </div>
    );
  }
);
