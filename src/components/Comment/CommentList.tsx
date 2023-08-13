import { useCommentModal, useCommentsQuery } from '@/hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CommentItem } from '@/components/Comment';

export const CommentList = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const { lastCommentRef, scrollToLastComment } = useCommentModal();
  const { data, isLoading } = useCommentsQuery(id);

  useEffect(() => {
    scrollToLastComment();
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="overflow-y-auto mt-3" id="comments">
      {data.map(({ isLastComment, user: { id, ...userRest }, ...rest }) => (
        <CommentItem
          key={rest.id}
          {...rest}
          {...userRest}
          ref={isLastComment ? lastCommentRef : null}
        />
      ))}
    </div>
  );
};
